import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.examName}>
        {props.nome}
      </Text>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={[styles.button, styles.buttonEdit]}>
          <Text style={{ color: '#28a745' }}>
            Editar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonDelete]}>
          <Text style={{ color: '#fff' }}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  examName: {
    fontSize: 18,
    marginBottom: 16
  },
  buttonArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  buttonEdit: {
    borderWidth: 1,
    borderBlockColor: '#28a745'
  },
  buttonDelete: {
    backgroundColor: '#c82333'
  },
});