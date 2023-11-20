import { StyleSheet, View } from 'react-native';
import { HeaderView } from '../components/headerview'
import { Title } from '../components/title';
import { Card } from '../components/card';
import { AddButton } from '../components/addbutton';

export function Exames() {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>Exames</Title>
      <Card />
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff'
  },
});