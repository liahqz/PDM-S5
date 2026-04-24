import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

export default function App() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Lívia e Aron </Text>
        </View>
    );
}

export default function App() {
    return(
        <ImageBackground source={require('@/assets/melanie.jpg')}>
            <Text style={styles.title}> Lívia e Aron </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})