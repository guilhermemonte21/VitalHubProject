import { StatusBar } from "expo-status-bar";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera, CameraView } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LastPicture } from "./Style";

import * as Notifications from "expo-notifications";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

export const CameraModal = ({
  visible,
  setUriCameraCapture,
  setShowCamera,
  setPfp,
  getMediaLibrary = true,
}) => {
  // const [tipoCamera, setTipoCamera] = useState(Camera.AutoFocus);
  const [facing, setFacing] = useState("front");
  const [focus, setFocus] = useState("on");
  const [flash, setFlash] = useState("off");
  const [openModal, setOpenModal] = useState(false);
  const [picture, setPicture] = useState(null);
  const [lastPicture, setLastPicture] = useState();
  const [capturePicture, setCapturePicture] = useState();
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function GetLatestPicture() {
    const { assets } = await MediaLibrary.getAssetsAsync({
      sortBy: [[MediaLibrary.SortBy.creationTime, false]],
      first: 1,
    });
    if (assets.length > 0) {
      console.log(":3");
      setLastPicture(assets[0].uri);
    }
    console.log(assets);
  }

  useEffect(() => {
    setPicture(null);
    console.log("3:");
    if (getMediaLibrary) {
      GetLatestPicture();
      console.log(lastPicture);
    }
  }, [visible]);

  // quando deletar removar da galeria
  // permitir foto com flash
  // botão para recarregar o autofocus
  // vídeo
  function handleClose() {
    setOpenModal(false);
    setShowCamera(false);
  }

  async function TakePicture() {
    if (cameraRef) {
      const picture = await cameraRef.current.takePictureAsync();
      setPicture(picture.uri);
      setOpenModal(true);
      console.log(picture);
    }
  }

  async function ClearPicture() {
    setPicture(null);
    handleClose();
  }

  async function UploadPicture() {
    await setUriCameraCapture(picture);
    MediaLibrary.saveToLibraryAsync(picture);
    console.log("pic");
    console.log(picture.uri);
    setUriCameraCapture(picture.uri);
    handleClose();
  }

  async function SelectImageGallery() {
    console.log(":D");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setPicture(result.assets[0].uri);

      setOpenModal(true);
    }
  }

  async function DeletePicture() {
    await setUriCameraCapture(null);
  }
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <CameraView
          flash={flash}
          ref={cameraRef}
          style={styles.camera}
          facing={facing}
          ratio="16:9"
          autofocus={true}
          whiteBalance={"shadow"}
        >
          <View style={styles.viewFlip}>
            <TouchableOpacity
              style={styles.btnFlip}
              onPress={() => setFacing(facing === "front" ? "back" : "front")}
            >
              <Text style={styles.txtFlip}>Trocar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnFlip}
              onPress={() => setFocus(focus === "on" ? "off" : "on")}
            >
              <Text style={styles.txtFlip}>Focus : {focus}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnFlip}
              onPress={() => setFlash(flash === "on" ? "off" : "on")}
            >
              <Text style={styles.txtFlip}>Flash : {flash}</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnCapture}
            onPress={() => TakePicture()}
          >
            <FontAwesome name="camera" size={24} color={"cyan"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => SelectImageGallery()}
          >
            {lastPicture != null ? (
              <LastPicture source={{ uri: lastPicture }}></LastPicture>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCapture}
            onPress={() => setShowCamera(false)}
          >
            <FontAwesome name="camera" size={24} color={"red"} />
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={false} visible={openModal}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
              gap: 20,
            }}
          >
            <Image
              style={{ width: "100%", height: 500, borderRadius: 15 }}
              source={{ uri: picture }}
            />
            <View style={{ margin: 10, flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnClear}
                onPress={() => ClearPicture().then(DeletePicture())}
              >
                <FontAwesome name="trash" size={35} color={"#DD1111"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnUpload}
                onPress={() => UploadPicture()}
              >
                <FontAwesome name="upload" size={35} color={"#121212"} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    height: "80%",
    width: "100%",
  },
  viewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  btnFlip: {
    padding: 20,
  },
  txtFlip: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#121212",

    justifyContent: "center",
    alignItems: "center",
  },
  btnClear: {
    padding: 20,
    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },
  btnUpload: {
    padding: 20,
    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },
});
