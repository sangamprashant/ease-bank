import LandingLayout from '@/(layouts)/LandingLayout';
import { ThemeProvider } from '@/context/ThemeProvider';
import { useFonts } from 'expo-font';
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


  return (
    <ThemeProvider>
      <LandingLayout />
    </ThemeProvider>
  )
}
