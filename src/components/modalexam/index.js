import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function ModalExam({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Modal
      </Text>
      <TouchableOpacity onPress={ () => navigation.goBack() }>
        <Text>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});