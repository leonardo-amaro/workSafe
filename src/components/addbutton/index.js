import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function AddButton() {
  return (
    <View style={styles.buttonArea}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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