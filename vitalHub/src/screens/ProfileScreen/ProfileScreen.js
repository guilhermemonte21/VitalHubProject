import {
  Container,
  ContainerRow,
  FieldContent,
  FieldContentSmall,
} from "../../components/Container/Style";
import { Image, ScrollView, View } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import {
  Input,
  InputLight,
  InputLightEditable,
} from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle, SubtitleHighlighted } from "../../components/Subtitle/Style";
import { ProfileImg } from "../../components/ProfileImage/ProfileImage";
import { ProfileImgPlaceholder } from "../../assets/ProfileImgPlaceholder.png";
import { BoxInput } from "../../components/BoxInput/Index";
import { InputLabel } from "../../components/Label/Style";
import { useEffect, useState } from "react";
import api from "../../services/service";
import { userDecodeToken } from "../../utils/Auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraModal } from "../../components/CameraModal/CameraModal";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { ButtonCamera } from "./Style";
import moment from "moment/moment";

export const ProfileScreen = () => {
  const [pfpSource, setPfpSource] = useState(
    require("../../assets/ProfileImgPlaceholder.png")
  );
  const [id, setId] = useState();
  const [role, setRole] = useState();
  const [nome, setNome] = useState();
  const [photo, setPhoto] = useState();
  const [email, setEmail] = useState();
  const [birth, setBirth] = useState();
  const [cpf, setCpf] = useState();
  const [endereco, setEndereco] = useState();
  const [showModal, setShowModal] = useState(false);
  const [uriCameraCapture, setUriCameraCapture] = useState(null);
  const [editavel, setEditavel] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState({});

  const AtualizarUsuario = async (idUsuario, dadosUsuario) => {
    console.log(role);
    idTipoUsuario =
      role === "Paciente"
        ? "8A95FC3C-47BF-4CCD-BB3E-649A8F0D12D6"
        : "2E2A80A5-4DF1-43A3-B804-915FDEE1C026";
    console.log(cpf);
    console.log(endereco.logradouro);
    console.log(endereco.numero);
    console.log(endereco.cidade);
    console.log(endereco.cep);
    await api
      .put(`/${role}s?idUsuario=${id}`, {
        dataNascimento: moment(dadosUsuario.dataNascimento).format(
          "YYYY-MM-DD"
        ),
        cpf: cpf,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        cidade: endereco.cidade,
        cep: endereco.cep,
      })
      .then(() => {
        profileLoad().then(() => {
          setEditavel(false);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function requestGaleria() {
    await MediaLibrary.requestMediaLibraryPermissionsAsync;
    await ImagePicker.requestPermissionsAsync;
  }

  useEffect(() => {
    (async () => {
      requestGaleria();
      console.log(uriCameraCapture);
    })();
  }, [uriCameraCapture]);

  async function toggleEdit() {
    editavel === false ? setEditavel(true) : setEditavel(false);
  }

  async function profileLoad() {
    const token = await userDecodeToken();
    await api
      .get(`/${token.role}s/BuscarPorId?id=${token.id}`)
      .then((response) => {
        setDadosUsuario(response.data);
      });
    if (token) {
      console.log(token);
      setId(token.jti);
      setRole(token.role);
      setNome(token.name);
      setEmail(token.email);
      await api
        .get(`/Pacientes/BuscarPorId?id=${token.id}`)
        .then((response) => {
          console.log(response);
          setDadosUsuario(response.data);
          setId(response.data.id);
          setCpf(response.data.cpf);
          setBirth(response.data.dataNascimento);
          setEndereco(response.data.endereco);
        });
    }
  }

  async function ChangeProfilePicture() {
    profileLoad();
    console.log(`/Usuario/AlterarFotoPerfil?id=${id}`);

    const formData = new FormData();

    formData.append("Arquivo", {
      uri: uriCameraCapture,
      name: `image.${uriCameraCapture.split(".")[1]}`,
      type: `image/${uriCameraCapture.split(".")[1]}`,
    });

    await api
      .put(`/Usuario/AlterarFotoPerfil?id=${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("then");
        console.log(response);
        setPhoto(uriCameraCapture);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    profileLoad();
  }, []);

  useEffect(() => {
    if (uriCameraCapture != null) {
      ChangeProfilePicture();
    }
  }, [uriCameraCapture]);
  return (
    <>
      <View>
        <ProfileImg source={{ uri: photo }} />
        <ButtonCamera onPress={() => setShowModal(true)}>
          <MaterialCommunityIcons
            name="camera-plus"
            size={20}
            color={"#FFFFFF"}
          />
        </ButtonCamera>
      </View>
      <ScrollView>
        <Container color={"#FBFBFB"}>
          <Title>{nome}</Title>
          <Subtitle color={"4E4B59"}>{email}</Subtitle>

          <FieldContent>
            <InputLabel>Data de nascimento</InputLabel>
            <InputLightEditable
              onChangeText={(txt) => setBirth(txt)}
              editable={editavel}
              color={"white"}
              placeholder={"DD/MM/YYYY"}
              maxLength={10}
            >
              {birth ? birth : null}
            </InputLightEditable>
          </FieldContent>
          <FieldContent>
            <InputLabel>CPF</InputLabel>
            <InputLightEditable
              onChangeText={(txt) => setCpf(txt)}
              editable={editavel}
              color={"white"}
              placeholder={"*********-**"}
              maxLength={13}
            >
              {cpf ? cpf : null}
            </InputLightEditable>
          </FieldContent>
          <FieldContent>
            <InputLabel>Endereço</InputLabel>
            <InputLightEditable
              onChangeText={(txt) =>
                setEndereco({ ...endereco, logradouro: txt })
              }
              editable={editavel}
              color={"white"}
            >
              {endereco ? `${endereco.logradouro}` : null}
            </InputLightEditable>
          </FieldContent>
          <ContainerRow>
            <FieldContentSmall>
              <InputLabel>CEP</InputLabel>
              <InputLightEditable
                onChangeText={(txt) => setCep(txt)}
                editable={editavel}
                color={"white"}
                placeholder={"*****-***"}
                maxLength={11}
              >
                {endereco ? endereco.cep : null}
              </InputLightEditable>
            </FieldContentSmall>
            <FieldContentSmall>
              <InputLabel>Cidade</InputLabel>
              <InputLightEditable
                onChangeText={(txt) =>
                  setEndereco({ ...endereco, cidade: txt })
                }
                color={"white"}
                editable={editavel}
                placeholder={"*****-***"}
              >
                {endereco ? `${endereco.cidade}-SP` : null}
              </InputLightEditable>
            </FieldContentSmall>
          </ContainerRow>
          <Button onPress={() => AtualizarUsuario(id, dadosUsuario)}>
            <ButtonTitle color={"#FFFFFF"}>SALVAR</ButtonTitle>
          </Button>
          <Button onPress={() => toggleEdit()}>
            <ButtonTitle color={"#FFFFFF"}>EDITAR</ButtonTitle>
          </Button>
        </Container>
      </ScrollView>

      <CameraModal
        visible={showModal}
        setUriCameraCapture={setUriCameraCapture}
        setShowCamera={setShowModal}
        setPfp={setPfpSource}
      />
    </>
  );
};
