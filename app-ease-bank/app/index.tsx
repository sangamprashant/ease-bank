import _colors from "@/utils/colors";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useThemeContext } from "@/context/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import _svgs from "@/(components)/(svgs)";

const slides = [
  {
    image: _svgs.SecureSvg,
    title: "Secure Banking",
    description: "Your money is safe with us using 256-bit encryption.",
  },
  {
    image: _svgs.FastSvg,
    title: "Fast Transfers",
    description: "Send money instantly to anyone, anywhere.",
  },
  {
    image: _svgs.MobileSvg,
    title: "Mobile First",
    description: "All-in-one mobile banking on the go.",
  },
];



export default function Index() {
  const { handleTheme, handleTaskBarColor } = useThemeContext();
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useFocusEffect(
    useCallback(() => {
      handleTaskBarColor(_colors.indigo);
      handleTheme('dark');
    }, [])
  );

  useEffect(() => {
    progressBars.forEach((bar, index) => {
      bar.stopAnimation(); 
      if (index === currentSlide) {
        Animated.timing(bar, {
          toValue: 1,
          duration: 6000, 
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            if (currentSlide < slides.length - 1) {
              setCurrentSlide(prev => prev + 1);
            }
          }
        });
      } else {
        bar.setValue(index < currentSlide ? 1 : 0); 
      }
    });
  }, [currentSlide]);

  const handleGetStarted = () => {
    router.replace("/(main)/main")
    // router.replace("/(authenticate)/login")
  };

  const SlideImage = slides[currentSlide].image;

  const progressBars = useRef(
    slides.map(() => new Animated.Value(0))
  ).current;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SlideImage width={260} height={260} style={styles.image} />
        <Text style={styles.title}>{slides[currentSlide].title}</Text>
        <Text style={styles.description}>{slides[currentSlide].description}</Text>

        <View style={styles.progressContainer}>
          {progressBars.map((bar, index) => (
            <View key={index} style={styles.progressBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: bar.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0%", "100%"],
                    }),
                  },
                ]}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 24,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  progressBackground: {
    height: 4,
    width: 30,
    marginHorizontal: 4,
    backgroundColor: "#e5e7eb",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: _colors.indigo,
  },
  button: {
    backgroundColor: _colors.indigo,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});