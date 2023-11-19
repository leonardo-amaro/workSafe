import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderView } from '../components/headerview';
import { Title } from '../components/title';

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>
        Seja bem vindo ao WorkSafe! Tenha total controle sobre a saúde ocupacional da sua empresa.
      </Title>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Cadastro de exames
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Cadastro de funcionários
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Cadastro de exames realizados
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff'
  },
  buttonArea: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: '#28a745',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#28a745'
  },
});
