import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

interface themeTpye {
  backgroundColor: string,
  color: string,
  fontSize: number,
  ImageSize: number
}

interface PersonType {
  name: string,
  theme: themeTpye
}

interface CardType {
  image_url: any
}

const person: PersonType = {
  name: "Tarou",
  theme: {
    backgroundColor: "white",
    color: "black",
    fontSize: 64,
    ImageSize: 100
  }
}

function Card({image_url}:CardType) {
  return (
    <View>
      <Image
        source={image_url}
        accessibilityLabel={person.name}
        style={{ width: person.theme.ImageSize, height: person.theme.ImageSize }}
      />
      <Text>{person.name}</Text>
    </View>
  )
}

export default function App() {
  const isPacked = true;
  return (
    <View style={{ flex: 1, ...person.theme, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: person.theme.fontSize, color: person.theme.color }}>Hello World!!!{isPacked && '✅'}</Text>
      <Card image_url={require('./assets/icon.png')}></Card>
      <StatusBar style="auto" />
    </View>
  );
}

// ここからやる
// https://ja.react.dev/learn/describing-the-ui