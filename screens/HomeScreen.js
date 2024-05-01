import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const handleProfileDropdown = () => {
    // Lógica para alternar a exibição do menu suspenso
    console.log('Dropdown menu opened or closed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Nosso Recife</Text>
        <View style={styles.profileDropdown}>
          <TouchableOpacity onPress={handleProfileDropdown} style={styles.profileDropdownBtn}>
            <View style={styles.profileImg}>
              <Text style={styles.profileImgText}>João</Text>
            </View>
          </TouchableOpacity>
          {/* Menu suspenso - conteúdo do menu aqui */}
        </View>
      </View>

      {/* Conteúdo principal */}
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.text}>Bem-vindo ao Nosso Recife, um portal dedicado a proporcionar uma visão completa da nossa amada cidade, funcionando como uma ferramenta de divulgação do destino Recife. Você encontrará informações turísticas detalhadas, sugestões de onde ficar, onde comer, como chegar e o que fazer em Recife. Além disso, oferecemos uma variedade de conteúdos, desde eventos locais e notícias da comunidade até perfis de personalidades locais e guias de viagem detalhados. Junte-se a nós nesta jornada enquanto exploramos, descobrimos e compartilhamos o melhor de Recife. Porque Recife não é apenas um lugar, é o nosso lar.</Text>

      {/* Integrantes */}
      <View style={styles.integrantes}>
        <View style={styles.integrante}>
          <Text style={styles.integranteTitle}>Nome do Integrante 1</Text>
          <Text style={styles.integranteText}>Descrição do Integrante 1.</Text>
        </View>
        <View style={styles.integrante}>
          <Text style={styles.integranteTitle}>Nome do Integrante 2</Text>
          <Text style={styles.integranteText}>Descrição do Integrante 2.</Text>
        </View>
        <View style={styles.integrante}>
          <Text style={styles.integranteTitle}>Nome do Integrante 3</Text>
          <Text style={styles.integranteText}>Descrição do Integrante 3.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDropdown: {
    position: 'relative',
  },
  profileDropdownBtn: {
    padding: 5,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImgText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
  },
  integrantes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  integrante: {
    width: '30%',
  },
  integranteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  integranteText: {
    marginBottom: 10,
  },
});

export default HomeScreen;
