import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = () => {
    // Verifica se o email é válido
    if (!validateEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Lógica de cadastro
    // Navegação para a próxima tela após o cadastro bem-sucedido
    navigation.navigate("Login");
  };

  // Função para validar o formato do email usando regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://th.bing.com/th/id/OIG2.VLliwxyFOO72BgrDS0Mg?pid=ImgGn",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address" // Define o teclado como de email
          autoCapitalize="none" // Desativa a autocapitalização
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adiciona uma cor de fundo com transparência
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CadastroScreen;
