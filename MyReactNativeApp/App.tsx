import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface themeTpye {
  backgroundcolor: String,
  color: String
}

interface PersonType {
  name: String,
  theme: themeTpye
}

const person: PersonType = {
  name: "Tarou",
  theme: {
    backgroundcolor: "black",
    color: "pink"
  }
}

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function App() {
  return (
    <div style={person.theme}>
      <h1>Hello World!!!</h1>
      <Text>{person.name}</Text>
      <Profile />
      <StatusBar style="auto" />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ここからやる
// https://ja.react.dev/learn/describing-the-ui