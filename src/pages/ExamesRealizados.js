import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { HeaderView } from '../components/headerview'
import { Title } from '../components/title';
import { CardDate } from '../components/carddate';

export function ExamesRealizados({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>Exames Realizados</Title>
      <CardDate
        exame="Exame de sangue"
        funcionario="Ronaldy Gomes"
        data="16/11/2023"
      />
      <CardDate
        exame="Exame de vista"
        funcionario="Leonardo Silva"
        data="12/11/2023"
      />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ModalProcedimento') }>
          <Text style={styles.buttonText}>
            +
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
    position: 'absolute',
    bottom: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#28a745',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 32,
    color: '#f3f3ff'
  },
});