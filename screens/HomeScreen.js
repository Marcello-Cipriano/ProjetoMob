import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const HomeScreen = () => {
  const handleProfileDropdown = () => {
    // Lógica para alternar a exibição do menu suspenso
    console.log("Dropdown menu opened or closed");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.app.goo.gl/2ATwNc1bmGWn8J6ZA",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>Nosso Recife</Text>
          <View style={styles.profileDropdown}>
            <TouchableOpacity
              onPress={handleProfileDropdown}
              style={styles.profileDropdownBtn}
            >
              <View style={styles.profileImg}>
                <Text style={styles.profileImgText}>NR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Conteúdo principal */}
        <Text style={styles.title}>Sobre Nós</Text>
        <Text style={styles.text}>
          Bem-vindo ao Nosso Recife, um portal dedicado a proporcionar uma visão
          completa da nossa amada cidade, funcionando como uma ferramenta de
          divulgação do destino Recife. Você encontrará informações turísticas
          detalhadas, sugestões de onde ficar, onde comer, como chegar e o que
          fazer em Recife. Além disso, oferecemos uma variedade de conteúdos,
          desde eventos locais e notícias da comunidade até perfis de
          personalidades locais e guias de viagem detalhados. Junte-se a nós
          nesta jornada enquanto exploramos, descobrimos e compartilhamos o
          melhor de Recife. Porque Recife não é apenas um lugar, é o nosso lar.
        </Text>

        {/* Integrantes */}
        <View style={styles.integrantes}>
          <View style={styles.integrante}>
            <Text style={styles.integranteTitle}>
              Kaio Vitor Mariano da Silva
            </Text>
            <Text style={styles.integranteText}>01635673</Text>
          </View>
          <View style={styles.integrante}>
            <Text style={styles.integranteTitle}>
              Marcello Cipriano Ferreira da Silva
            </Text>
            <Text style={styles.integranteText}>01582107</Text>
          </View>
          <View style={styles.integrante}>
            <Text style={styles.integranteTitle}>
              Pedro Henrique Tenório Leal
            </Text>
            <Text style={styles.integranteText}>01591056</Text>
          </View>
        </View>
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
    padding: 20,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileDropdown: {
    position: "relative",
  },
  profileDropdownBtn: {
    padding: 5,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#152544",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImgText: {
    color: "#FBB630",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
  },
  integrantes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  integrante: {
    width: "30%",
  },
  integranteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  integranteText: {
    marginBottom: 10,
  },
});

export default HomeScreen;
