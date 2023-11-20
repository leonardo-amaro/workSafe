import { StyleSheet, View } from 'react-native';
import { HeaderView } from '../components/headerview'
import { Title } from '../components/title';
import { CardDate } from '../components/carddate';
import { AddButton } from '../components/addbutton';

export function ExamesRealizados() {
  return (
    <View style={styles.container}>
      <HeaderView />
      <Title>Exames Realizados</Title>
      <CardDate />
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