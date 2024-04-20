import React from "react";
import { View } from "react-native";
import { Container, Button, Text } from "native-base";
import {useNavigation} from '@react-navigation/native';

const NuevaOrden = () => {
    const navigation = useNavigation();
    return(
        <Container>
            <View>
                <Button
                    onPress={()=> navigation.navigate('Menu')}
                >
                    <Text>Crear una orden</Text>
                </Button>
            </View>
        </Container>
    )
}
export default NuevaOrden;