import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Link } from "../../components/Link/Style";
import { useState } from "react";
import api from "../../services/service";






export const CreateAccountScreen = ({navigation}) => {

const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [id , setId] = useState("ACF079DE-DC46-4F76-A97D-0B9F4B538C8B")

async function Cadastro(){
await api.post('/Pacientes', { email: email,
  senha:senha, idTipoUsuario: id })
      .then((response) => { 

        

        console.log( response.data.mensagem);
        navigation.navigation("Profile" ,{ 
          email:email,senha:senha} )
      }).catch((e) => {

        if (e.response) {  

          console.log("erro1");

        } else { 

         console.log("erro2")

        }
})
      }


      
    
  

  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Criar conta</Title>
      <Subtitle color={"4E4B59"}>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Subtitle>

      <Input 
      value = {email} 
      placeholder="Usuário ou E-mail"
      onChangeText={(txt) => setEmail(txt)}
      />
      <Input 
      value = {senha} 
      placeholder="Senha"
      onChangeText={(txt) => setSenha(txt)} />
      <Input 
      // value = {senha}
       placeholder="Confirmar senha" 
       />

      <Button onPress={() => Cadastro}>
        <ButtonTitle  color={"white"}>Cadastrar</ButtonTitle>
      </Button>
      <Link  color={"#344F8F"}>Cancelar</Link>
    </Container>
  );
      }
