import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useRouter } from "expo-router";


export default function Index() {
  const route = useRouter();


  return (
  
    <View>
      <Text onPress={()=> route.push('(tabs)')}>
        click here
      </Text>
    </View>
  );
}
