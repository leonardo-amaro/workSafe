import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderView } from '../components/headerview'
import { Title } from '../components/title';
import { Card } from '../components/card';

export function Exames({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>Exames</Title>
      <Card />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ModalExam') }>
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