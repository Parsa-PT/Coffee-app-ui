import { Stack } from "expo-router";

export default function RootLayout() {
  return (
     <Stack.Screen name="index"  />
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
  );
}
