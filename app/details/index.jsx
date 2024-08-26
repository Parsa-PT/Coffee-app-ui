import { View, Text ,  TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { Stack, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COFFEE, COFFEE_SIZE } from "../../constants/index";
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';

export default function index() {
  const route = useRouter();
  const [selectSize , setSelect] = useState(1)
  const [num , setNum] = useState(1)

  return (
    <>
    <Stack.Screen options={{
      headerShown:false
    }}/>
    <StatusBar style='light'/>
    <View style={{ flex: 1 }}>
      <View style={{ position: "relative", width: "100%", height: 300 }}>
        <Image
          style={{
            width: "100%",
            height: 300,
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
            position: "absolute",
          }}
          source={require("../../assets/images/coffeep.png")}
          alt="pic"
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 55,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons onPress={()=> route.back()} name="arrow-back" size={24} color="white" />
          </View>
          <View
            style={{
              width: 35,
              height: 35,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="heart" size={20} color="white" />
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#865439",
            shadowOffset: { width: 0, height: 32 },
            shadowOpacity: 0.8,
            shadowRadius: 25,
            elevation: 24,
            zIndex: 99,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={require("../../assets/images/cup2.png")}
            alt="pic"
          />
        </View>
      </View>



      <View style={{marginTop: 75, paddingHorizontal:20}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
          width: 60,
          height: 30,
          borderRadius: 20,
          backgroundColor: "#CD9B69",
          justifyContent: "center",
          
        }}
      >
        <AntDesign name="star" size={14} color="white" />
        <Text style={{ color: "white" , fontSize:15 }}>3.5</Text>
      </View>

      <View style={{display:'flex' , justifyContent:'space-between' , flexDirection:'row' , alignItems:'center' , marginTop:20}}>
        <Text style={{fontWeight:'bold' , fontSize:30}}>Cappuccino</Text>
        <Text style={{fontWeight:'bold' , fontSize:17}}>$ 15.50</Text>
      </View>

      <View style={{marginTop:20 , marginBottom:20}}>
        <Text style={{fontWeight:'bold' , fontSize:20 , marginBottom:10}}>Coffee size</Text>
        <View style={{display:'flex' , flexDirection:'row' ,  justifyContent:'space-between'}}>
        {COFFEE_SIZE.map((item , index)=>{

          let checkid = item.id == selectSize

          return(
            <TouchableOpacity onPress={()=>setSelect(item.id)}  style={{width:110 , backgroundColor:checkid ? '#CD9B69' : '#e8e8e8', paddingVertical:10 , borderRadius:20 , }} key={index}>
              <Text style={{fontSize:17 , color:checkid?'white' : 'black' , textAlign:'center'}}>{item.title}</Text>
          </TouchableOpacity>
          )
        })}
        </View>
      </View>


      <View>
        <Text style={{fontSize:20 , fontWeight:'bold' , marginBottom:10}}>
          About
        </Text>
        <Text style={{lineHeight:19}}>
        Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cocoa powder or cinnamon
        </Text>
      </View>



      <View style={{marginTop:20, marginBottom:20 , display:'flex'  , justifyContent:'space-between' , flexDirection:'row' , alignItems:'center'}}>
           <Text
                style={{
                  color: "gray",
                  fontSize: 15,
                  marginTop: 10,
                }}
              >
                Volume <Text style={{ color: "black" }}>80 ml</Text>
              </Text>

              <View style={{display:'flex' ,  flexDirection:'row' , gap:15, padding:5 , borderWidth:1 , borderColor:'black' , borderRadius:20}}>
              <AntDesign name="minus" onPress={()=> setNum(num - 1)} size={24} color="black" />
                <Text style={{fontSize:18 , fontWeight:'bold'}}>{num}</Text>
              <AntDesign name="plus" onPress={()=> setNum(num + 1)} size={22} color="black" />

              </View>
      </View>


      <View style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
          <View
            style={{
              width: 55,
              height: 55,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="shopping-bag" size={24} color='black' />
          </View>
          <TouchableOpacity style={{width:280 , paddingVertical:15 , backgroundColor:'#CD9B69' , borderRadius:40}}>
            <Text style={{color:'white' , fontSize:16 , textAlign:'center'}}>
              Buy more
            </Text>
          </TouchableOpacity>
      </View>

      </View>
    </View>
    </>
  );
}
