import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { HeaderView } from "../headerview";
import { Title } from "../title";

export function ModalProcedimento({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>Novo Exame Realizado</Title>
      <View style={styles.buttonArea}>
        <Text style={{ fontSize: 16 }}>
          Nome do exame
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do exame..."
        />
      </View>
      <View style={styles.buttonArea}>
        <Text style={{ fontSize: 16 }}>
          Nome do funcionário
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do funcionário..."
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={[styles.button, styles.buttonSave]}>
          <Text style={styles.buttonText}>
            Salvar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={ () => navigation.goBack() }>
          <Text style={styles.buttonText}>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderWidth: 1,
    padding: 10
  },
  buttonArea: {
    padding: 16
  },
  button: {
    marginVertical: 16,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center' 
  },
  buttonSave: {
    backgroundColor: '#28a745'
  },
  buttonCancel: {
    backgroundColor: '#c82333'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
});