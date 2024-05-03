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
import { ButtonCamera } from "./Style";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

export const ProfileScreen = () => {
  const [pfpSource, setPfpSource] = useState(
    require("../../assets/ProfileImgPlaceholder.png")
  );
  const [editavel, setEditavel] = useState(false)
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [photo, setPhoto] = useState();
  const [email, setEmail] = useState();
  const [birth, setBirth] = useState();
  const [cpf, setCpf] = useState();
  const [endereco, setEndereco] = useState();
  const [showModal, setShowModal] = useState(false);
  const [uriCameraCapture, setUriCameraCapture] = useState(null);

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

  async function profileLoad() {
    
    const token = await userDecodeToken();

    if (token) {
      console.log(token);
      setId(token.jti);
      setNome(token.name);
      setEmail(token.email);
      await api
        .get(`/Pacientes/BuscarPorId?id=${token.id}`)
        .then((response) => {
          setId(response.data.id);
          setCpf(response.data.cpf);
          setBirth(response.data.dataNascimento);
          setEndereco(response.data.endereco);
        });
    }
  }

  async function ChangeProfilePicture() {
    profileLoad()
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


  const AtualizarUsuario = async (idUsuario, dadosUsuario) => {
    const idTipoUsuario = "415320A4-9FB0-43B3-A267-1073183B9770"
  
    await api.put(`/Pacientes?idUsuario=${idUsuario}`, {
        rg: dadosUsuario.rg,
        cpf: dadosUsuario.cpf,
        dataNascimento: moment(dadosUsuario.dataNascimento).format("YYYY-MM-DD"),
        cep: dadosUsuario.endereco.cep,
        logradouro: dadosUsuario.endereco.logradouro,
        numero: dadosUsuario.endereco.numero,
        cidade: dadosUsuario.endereco.cidade,
        nome: dadosUsuario.idNavigation.nome,
        idTipoUsuario
    }).then(() => {
        CarregarDadosUsuario(idUsuario, perfilUsuario).then(() => {
            setEditavel(false)
        })
    }).catch(error => {
        alert(error)
    })
}
  return (
    <>
      <View>
        <ProfileImg source={{uri: photo}} />
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
              editable={true}n 
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
              editable={false}
              color={"white"}
              placeholder={"*********-**"}
              maxLength={13}
            >
              {cpf ? cpf : null}
            </InputLightEditable>
          </FieldContent>
          <FieldContent>
            <InputLabel>Endereço</InputLabel>
            <InputLightEditable editable={true} color={"white"}>
              {endereco ? `${endereco.logradouro}, ${endereco.numero}` : null}
            </InputLightEditable>
          </FieldContent>
          <ContainerRow>
            <FieldContentSmall>
              <InputLabel>CEP</InputLabel>
              <InputLightEditable
                editable={false}
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
                color={"white"}
                editable={false}
                placeholder={"*****-***"}
              >
                {endereco ? `${endereco.cidade}-SP` : null}
              </InputLightEditable>
            </FieldContentSmall>
          </ContainerRow>
          <Button>
            <ButtonTitle onPress={() => AtualizarUsuario()} color={"#FFFFFF"}>SALVAR</ButtonTitle>
          </Button>
          <Button>
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
