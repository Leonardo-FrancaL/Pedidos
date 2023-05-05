import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Box, Input } from "native-base";

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackground} source={require('../../assets/teste.png')}>
                <StatusBar style="auto" />
                <Box style={styles.box}>
                    <Text style={styles.titulo}>Login</Text>
                    <Box style={styles.boxInputs}>
                        <Input mx="3" style={styles.inputs} placeholder="Email ou Nome de Usuario" w="100%" />
                    </Box>
                    <Box style={styles.boxInputs}>
                        <Input mx="3" style={styles.inputs} type='password' placeholder='Senha' w="100%" />
                    </Box>
                    <Text style={styles.text}>
                        Esqueceu sua senha ?
                    </Text>
                    <Button style={styles.botaologar}>
                        <Text style={styles.texto}>Logar</Text>
                    </Button>
                </Box>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaologar: {
        backgroundColor: '#6AB04A',
        width: '60%'
    },
    titulo: {
        fontSize: 30,
        color: 'white',
        marginBottom: 25,
    },
    texto: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14,
    },
    box: {
        backgroundColor: '#2C3E50',
        width: '90%',
        padding: 20,
        alignItems: 'center',
        left: 20,
        top: 220,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    inputs: {
        backgroundColor: 'white',
        color: 'black',
    },
    boxInputs: {
        marginBottom: 25,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    text: { 
        fontSize: 14,
        color: 'white',
        textAlign: 'right',
        fontWeight: 'normal',
        marginBottom: 25,
    }
});
