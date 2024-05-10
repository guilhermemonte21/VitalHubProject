import { Ionicons } from "@expo/vector-icons";
import { Container } from "../Container/Style.js";
import {
  HeaderHome,
  WelcomeView,
  UserImageHeader,
  FieldContent,
} from "./Style.js";

import { UserText, MontSerratWhite } from "../Text/Style.js";
import { userDecodeToken } from "../../utils/Auth.js";
import { useEffect, useState } from "react";
import api from "../../services/service.js";

export const Header1 = () => {
  const [nome, setNome] = useState();
  const [id, setId] = useState();
  const [role, setRole] = useState();
  const [photo, setPhoto] = useState();
  async function profileLoad() {
    const token = await userDecodeToken();
    if (token) {
      setNome(token.name);
      setRole(token.role);
      setId(token.id);
      console.log(token);
      console.log(role);
      console.log(id);
    }
  }

  useEffect(() => {
    profileLoad();
  }, []);

  useEffect(() => {
    api.get(`/${role}s/BuscarPorId?id=${id}`).then((response) => {
      setPhoto(response.data.idNavigation.foto);
    }).catch(console.log())
  }, [id]);
  return (
    <HeaderHome>
      <WelcomeView>
        <UserImageHeader source={{ uri: photo }} />
        <FieldContent>
          <MontSerratWhite>Bem Vindo</MontSerratWhite>
          <UserText>{nome}</UserText>
        </FieldContent>
      </WelcomeView>
      <Ionicons name="notifications" size={25} color="white" />
    </HeaderHome>
  );
};
