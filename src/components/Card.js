import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';
export default function Card() {
  const movies = [
    {
        titulo: "Homem Aranha",
        lançamento: "21/07/2020"
    },
    {
        titulo: "Aranha Aranha",
        lançamento: "21/07/2020"
    },
    {
        titulo: "Homem Homem",
        lançamento: "21/07/2020"
    },
    {
        titulo: "Homem XD",
        lançamento: "21/07/2020"
    },
    {
        titulo: "Homens",
        lançamento: "21/07/2020"
    },
  ];
  return (
    <View style={styles.card}>
        <Text style={styles.title}>Título do Filme</Text>
        {/* <FlatList data={movies} renderItem={({ item }) => <Text>{item.titulo} {item.lançamento}</Text>} /> */}
        <Button style={styles.deleteButton} title="Deletar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: 'white',
    height: 100,
    width: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    backgroundColor: "gray"
  },
  deleteButton: {
    color: "black"
  },
});
