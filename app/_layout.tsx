import { Stack } from "expo-router";
import "../app/globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="Movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
