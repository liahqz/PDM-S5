import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default function TelaLogin() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.nome}>+Saude</Text>
          <Image
            source={require("@/assets/images/folha.png")}
            style={styles.folha}
          />
        </View>
  
        <View style={styles.card}>
          <Text style={styles.label}>Nome de usuário ou e-mail:</Text>
          <TextInput style={styles.input} />
  
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry />
  
          <Text style={styles.NovaSenha}>Esqueceu a senha?</Text>
  
          <TouchableOpacity style={styles.Botao}>
            <Text style={styles.TextoBotao}>Entrar</Text>
          </TouchableOpacity>
  
          <Text style={styles.Cadastro}>Cadastre-se</Text>
        </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#A8C7D6",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    nome: {
      fontSize: 32,
      color: "#fff",
      fontWeight: "bold",
    },
    folha: {
      width: 30,
      height: 30,
      marginLeft: 5,
    },
    card: {
      width: "60%",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 20,
    },
    label: {
      marginBottom: 5,
      color: "#555",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 10,
      marginBottom: 15,
    },
    NovaSenha: {
      color: "blue",
      marginBottom: 20,
      textDecorationLine: 'underline',
    },
    Botao: {
      backgroundColor: "#184D6B",
      padding: 12,
      borderRadius: 10,
      alignItems: "center",
    },
    TextoBotao: {
      color: "#fff",
      fontWeight: "bold",
    },
    Cadastro: {
      textAlign: "center",
      marginTop: 20,
      color: "#777",
      fontWeight: 'bold'
    },
  });
