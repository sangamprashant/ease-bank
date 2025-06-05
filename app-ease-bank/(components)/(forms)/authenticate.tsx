import { useRouter } from "expo-router";
import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type AuthenticateFormProps = {
    type: "login" | "register";
};

const AuthenticateForm = ({ type }: AuthenticateFormProps) => {
    const isRegister = type === "register";
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const router = useRouter();

    const handleNavigation = () => {
        if (!isRegister) {
            router.push("/register");
        } else {
            router.push("/login");
        }
    }

    const handleAuthenticate = () => {
        if (isRegister) {
            router.replace({ pathname: '/otp', params: { email: email.trim() }, })
        } else {
            router.replace("/(main)/main");
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
        >
            <Text style={styles.title}>
                {isRegister ? "Create Account" : "Welcome Back"}
            </Text>

            <View style={{}}>
                {isRegister && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            placeholderTextColor="#999"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                        />
                    </>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleAuthenticate}>
                    <Text style={styles.buttonText}>
                        {isRegister ? "Register" : "Login"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 16 }} onPress={handleNavigation}>
                    <Text style={{ color: "#6c63ff", textAlign: "center" }}>
                        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                    </Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
};

export default AuthenticateForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 26,
        fontWeight: "600",
        color: "#6c63ff",
        textAlign: "center",
        marginBottom: 32,
    },
    input: {
        height: 48,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 16,
        fontSize: 16,
        color: "#333",
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#6c63ff",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});
