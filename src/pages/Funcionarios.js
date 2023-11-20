import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { HeaderView } from '../components/headerview'
import { Title } from '../components/title';
import { Card } from '../components/card';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Funcionarios({ navigation }) {
  const [funcionarios, setFuncionarios] = useState([]);
  
  useEffect(() => {
    loadFuncionarios();
  }, []);

  const loadFuncionarios = async () => {
    const result = await axios.get("http://localhost:8080/allemployees");
    setFuncionarios(result.data);
  };

  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>Funcionários</Title>
      {funcionarios.map( funcionario => (
        <Card
          nome={funcionario.employee_name}
        />
      ) )}
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('ModalFuncionario') }>
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