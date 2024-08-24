import { Text, View , Image , TextInput , FlatList , TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import {COFFEE} from '../constants/index'
import { useState } from "react";


export default function Index() {
  const [activeCategory, setActive] = useState(1)

  return (
    <View style={{
      flex: 1,
      backgroundColor:'white'
    }}>
     
      <View style={{ 
        width:'100%',
        position:'relative'
      }}>
        <Image style={{
           objectFit:'cover',
           height:200,
           opacity:0.13,
           position:'absolute',
           zIndex:-10
        }} source={require('../assets/images/bean.jpg')} alt="pic"/>

        <View style={{
          display:'flex',
          justifyContent:'space-between',
          paddingHorizontal:12,
          flexDirection:'row',
          marginTop:45,
          position:'relative',
          zIndex:20
        }}>
          <View style={{
            width:40,
            height:40,
            backgroundColor:'#A67B5B',
            borderRadius:50,
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <FontAwesome6 name="user-large" size={24} color="#6C4B35" />
          </View>

          <View style={{display:'flex' , flexDirection:'row' , alignItems:'center'}}>
          <Entypo name="location-pin" size={28} color="#6C4B35" />
            <Text style={{fontWeight:'bold' , fontSize:20}}>
              New York, NYC
            </Text>
            
          </View>

          <MaterialCommunityIcons name="bell-outline" size={28} color="black" />
        </View>

        <View style={{paddingHorizontal:20 , marginTop:62 , position:'relative'}}>
          <TextInput placeholderTextColor="#9e9e9e"  style={{width:'100%' , height:55 , borderRadius:30 , backgroundColor:'#e8e8e8', paddingLeft:15 , shadowColor:'#000' , shadowOpacity:0.3 , shadowRadius:10 , shadowOffset:{width:0 , height:10} ,  elevation: 20}} placeholder="Search"/>
          <View style={{width:40 , height:40 , borderRadius:40 , backgroundColor:'#A67B5B' , display:'flex',
            justifyContent: 'center',
            alignItems: 'center'  , right:25 ,  bottom:5 , position:'absolute'}}>
          <Feather name="search" size={24} color="white" />

          </View>
        </View>
      </View>

      <View style={{marginTop:20 , paddingLeft:15}} >
          <FlatList horizontal  showsHorizontalScrollIndicator={false} data={COFFEE} renderItem={({item})=>{
            let active = item.id === activeCategory  
            let activestyle = active ? '#E4C59E' : '#e8e8e8'

            return(
              <TouchableOpacity onPress={()=> setActive(item.id)}  style={{marginRight:20 , padding:12 , backgroundColor:activestyle , borderRadius:20}}>
                <Text style={{color:'black' , fontWeight:'bold'}}>
                  {item.title}
                </Text>
            </TouchableOpacity>
            )
          }}/>
      </View>

    </View>
  );
}
