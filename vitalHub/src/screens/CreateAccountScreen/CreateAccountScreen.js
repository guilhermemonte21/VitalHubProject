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
  const Cadastro = async () => {
    await api.post('/Usuarios', { email: email,
      senha:senha })
          .then((response) => { 
    
            Alert.alert("Sucesso", response.data.mensagem);
    
            
            navigation.navigate('PatientHomeScreen');
    
          }).catch((err) => {
    
            if (err.response) {  
    
              Alert.alert("Ops", err.response.data.mensagem);
    
            } else { 
    
              Alert.alert("Erro");
    
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

      <Button>
        <ButtonTitle onPress={() => Cadastro()} color={"white"}>Cadastrar</ButtonTitle>
      </Button>
      <Link onPress={navigation.navigate("Login")} color={"#344F8F"}>Cancelar</Link>
    </Container>
  );
};
