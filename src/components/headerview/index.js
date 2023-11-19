import { StyleSheet, Text, View } from 'react-native';

export function HeaderView() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        WorkSafe
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#28a745',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#f3f3ff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});