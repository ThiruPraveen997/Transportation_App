import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider ,SignedIn , SignedOut } from "@clerk/clerk-expo";
import LoginScreen from './../components/LoginScreen';


export default function RootLayout () {
  useFonts({
    'Kanit-Black':require('../assets/fonts/Kanit-Black.ttf'),
    'Kanit-Bold':require('../assets/fonts/Kanit-Bold.ttf'),
    'Kanit-ExtraBold':require('../assets/fonts/Kanit-ExtraBold.ttf'),
    'Kanit-Medium':require('../assets/fonts/Kanit-Medium.ttf')
  })
return (
  <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
  <SignedIn>
  <Stack screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="(tabs)" />
    </Stack>
  </SignedIn>
  <SignedOut>
    <LoginScreen/>
  </SignedOut>
  </ClerkProvider>
);
}