import { Ionicons } from '@expo/vector-icons';
import { Container } from '../Container/Style.js';
import { HeaderHome, UserName, WelcomeView, UserImageHeader } from './Style.js';

import { UserText, MontSerratWhite } from '../Text/Style.js';
import { userDecodeToken } from '../../utils/Auth.js';
import { useEffect, useState } from 'react';

export const Header1 = () => {

    const [nome, setNome] = useState()
    async function profileLoad() {
        const token = await userDecodeToken()

        if (token) {

            console.log(token)
            setNome(token.name)
        }
    }

    useEffect(() => {
        profileLoad()
    }, [])
    return (
        <Container>
            <HeaderHome>
                <WelcomeView>
                    <UserImageHeader
                        source={require("../../assets/DoctorImage.png")}
                    />
                    <UserName>
                        <MontSerratWhite>Bem Vindo</MontSerratWhite>
                        <UserText>{nome}</UserText>
                    </UserName>
                </WelcomeView>
                <Ionicons name="notifications" size={25} color="white" />
            </HeaderHome>

        </Container>
    )
}