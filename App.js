import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';

export default function App() {
  // const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5'];
  return (
    <View style={styles.container}>
      <Header />
      <View>
        {/* <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} /> */}
        <Card/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 20,
  },
});
