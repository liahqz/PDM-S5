// import React, { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [erro, setErro] = useState("");

//   const handleLogin = () => {
//     if (!email || !senha) {
//       setErro("Preencha todos os campos.");
//       return;
//     }

//     // Simulação de login
//     if (email === "admin@saude.com" && senha === "123456") {
//       alert("Login realizado com sucesso!");
//       setErro("");
//     } else {
//       setErro("E-mail ou senha inválidos.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
        
//         {/* Espaço para logo */}
//         <div style={styles.logo}>
//           <span>LOGO</span>
//         </div>

//         <h2 style={styles.title}>App Saúde</h2>

//         <input
//           type="email"
//           placeholder="E-mail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="password"
//           placeholder="Senha"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//           style={styles.input}
//         />

//         <button onClick={handleLogin} style={styles.button}>
//           Entrar
//         </button>

//         {erro && <p style={styles.error}>{erro}</p>}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#8EBCCD",
//   },
//   card: {
//     background: "#fff",
//     padding: "30px",
//     borderRadius: "12px",
//     width: "320px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//     textAlign: "center",
//   },
//   logo: {
//     width: "90px",
//     height: "90px",
//     margin: "0 auto 20px",
//     borderRadius: "50%",
//     background: "#e0e0e0",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#777",
//     fontSize: "12px",
//   },
//   title: {
//     color: "#2E7D32",
//     marginBottom: "20px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     margin: "8px 0",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "10px",
//     background: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//     fontSize: "12px",
//   },
// };


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Image
        source={require('./assets/images/SplashScrum.png')}
        style={styles.logo}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Nome de usuário ou e-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.register}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7FA9B4",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
    borderRadius: 45,
  },

  card: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 20,
    padding: 20,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },

  link: {
    color: "blue",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#0E3A5D",
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  register: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
  },
});