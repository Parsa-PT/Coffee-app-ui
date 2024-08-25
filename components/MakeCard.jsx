import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { COFFEE_CARD } from "@/constants";

export default function MakeCard() {
  const width = Dimensions.get("window").width;
  return (
    <View>
      <Carousel
        mode="parallax"
        width={width}
        height={450}
        autoPlay={false}
        data={COFFEE_CARD}
        scrollAnimationDuration={3500}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index, item }) => (
          <View
            style={{
              width: width,
              height: 450,
              borderRadius: 45,
              backgroundColor: "#794518",
              shadowColor: "#865439",
              shadowOpacity: 0.6,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 15 },
              elevation: 20,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                shadowColor: "#000",
                shadowOpacity: 0.7,
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 40 },
                elevation: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -60,
              }}
            >
              <Image
                style={{ width: 250, height: 250 }}
                source={item.pic}
                alt="pic"
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 40 }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  marginTop: 5,
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="star" size={14} color="white" />
                <Text style={{ color: "white" }}>3.5</Text>
              </View>
              <Text
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 15,
                  marginTop: 10,
                }}
              >
                Volume <Text style={{ color: "white" }}>80 ml</Text>
              </Text>
            </View>

            <View
              style={{
                marginTop: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700", fontSize: 35 }}>
                ${item.price}
              </Text>
              <View
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 50,
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.6,
                  shadowRadius: 16,
                  shadowOffset: { width: 0, height: 0 },
                  elevation: 20,
                }}
              >
                <AntDesign name="plus" size={24} color="#865439" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
