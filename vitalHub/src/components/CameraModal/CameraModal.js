import { StatusBar } from "expo-status-bar";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AutoFocus, Camera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export const CameraModal = ({
  visible,
  setUriCameraCapture,
  setShowCamera,
}) => {
  const [tipoCamera, setTipoCamera] = useState(CameraType.back);
  const [focus, setFocus] = useState(AutoFocus.on);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [openModal, setOpenModal] = useState(false);
  const [picture, setPicture] = useState(null);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  // quando deletar removar da galeria
  // permitir foto com flash
  // botão para recarregar o autofocus
  // vídeo
  function handleClose() {
    setOpenModal(false)
    setShowCamera(false)
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
    handleClose();
  }

  async function DeletePicture() {
    await setUriCameraCapture(null);
  }
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Camera
          flashMode={flash}
          ref={cameraRef}
          style={styles.camera}
          type={tipoCamera}
          ratio="16:9"
        >
          <View style={styles.viewFlip}>
            <TouchableOpacity
              style={styles.btnFlip}
              onPress={() =>
                setTipoCamera(
                  tipoCamera === CameraType.back
                    ? CameraType.front
                    : CameraType.back
                )
              }
            >
              <Text style={styles.txtFlip}>Trocar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnFlip}
              onPress={() =>
                setFocus(focus === AutoFocus.on ? AutoFocus.off : AutoFocus.on)
              }
            >
              <Text style={styles.txtFlip}>Focus : {focus}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnFlip}
              onPress={() =>
                setFlash(flash === FlashMode.on ? FlashMode.off : FlashMode.on)
              }
            >
              <Text style={styles.txtFlip}>Flash : {flash}</Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnCapture}
            onPress={() => TakePicture()}
          >
            <FontAwesome name="camera" size={24} color={"cyan"} />
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
