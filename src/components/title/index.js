import { StyleSheet, Text } from 'react-native';

export function Title(props) {
  return (
    <Text style={styles.title}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 64,
    padding: 32,
    fontSize: 24,
    textAlign: 'center',
  },
});