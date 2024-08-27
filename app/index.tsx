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
import { BounceIn, BounceOut, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";


export default function Index() {
  const route = useRouter();


  return (
  
    <View style={{flex : 1 ,  backgroundColor:'#1E1413'}}>
      <Image style={{width:'100%' , height:500}} source={require('../assets/images/introc.jpg')} alt="pic"/>
      <Text style={{color:'white' , fontWeight:'bold' , fontSize:37 , marginHorizontal:25 , textAlign:'center' , marginTop:20}}>
       Fall in love with coffee in Modern Rex 
      </Text>
      <Text style={{color:'white' , textAlign:'center' , marginHorizontal:25 , marginTop:15}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo at alias omnis molestias explicabo velit cupiditate corporis suscipit 
      </Text>
      <Animated.View entering={FadeInDown.delay(300).springify()}>
      <TouchableOpacity onPress={()=> route.push('(tabs)')} style={{marginTop:30 , paddingVertical:20 , paddingHorizontal:10 , backgroundColor:'#CD9B69' , marginHorizontal:20 , borderRadius:40}}>
        <Text style={{color:'white' , textAlign:'center' , fontSize:18}}>
          Get started
        </Text>
      </TouchableOpacity>
      </Animated.View>
      
    </View>
  );
}
