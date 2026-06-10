import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Cadastro({ navigation }: any) {

  function fazerCadastro() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.titulo}>+Saúde</Text>

        <Image
          source={require("@/app/assets/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* CARD */}
      <View style={styles.card}>

        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>CPF:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>Confirmar Senha:</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/aaaa"
        />

        {/* BOTÃO */}
        <TouchableOpacity style={styles.botao} onPress={fazerCadastro}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#8EBCCD",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
  },

  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },

  card: {
    backgroundColor: "#FFF",
    width: "85%",
    borderRadius: 12,
    padding: 15,
  },

  label: {
    color: "#656565",
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#656565",
    borderRadius: 6,
    padding: 8,
    marginTop: 5,
  },

  botao: {
    backgroundColor: "#184D6B",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
  },

});