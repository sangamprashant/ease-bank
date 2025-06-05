import { useThemeContext } from '@/context/ThemeProvider';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from 'expo-router';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
    const { handleTheme, handleTaskBarColor } = useThemeContext();

    useFocusEffect(
        useCallback(() => {
            handleTaskBarColor("#fff");
            handleTheme('dark');
        }, [])
    );

    const userName = 'Prashant Srivastav';
    const balance = '1,24,817.00';

    const features = [
        { title: 'Send Money', icon: <Feather name="send" size={22} color="#fff" /> },
        { title: 'Scan & Pay', icon: <Feather name="camera" size={22} color="#fff" /> },
        { title: 'Bank Accounts', icon: <Ionicons name="wallet-outline" size={22} color="#fff" /> },
        { title: 'Cards', icon: <Ionicons name="card-outline" size={22} color="#fff" /> },
        { title: 'Recharge', icon: <Feather name="smartphone" size={22} color="#fff" /> },
        { title: 'Bill Pay', icon: <Feather name="file-text" size={22} color="#fff" /> },
        { title: 'Investments', icon: <Feather name="bar-chart-2" size={22} color="#fff" /> },
        { title: 'Settings', icon: <Feather name="settings" size={22} color="#fff" /> },
        { title: 'Loan', icon: <Ionicons name="cash-outline" size={22} color="#fff" /> },
        { title: 'Fixed Deposit', icon: <Feather name="lock" size={22} color="#fff" /> },
        { title: 'Support', icon: <Ionicons name="help-circle-outline" size={22} color="#fff" /> },
        { title: 'Profile', icon: <Ionicons name="person-outline" size={22} color="#fff" /> },
    ];

    return (    
        <View style={styles.container}>
            <View style={{paddingHorizontal:20, paddingTop: 20}}>
                <Text style={styles.greeting}>👋 Welcome, {userName}</Text>

                <View style={styles.balanceCard}>
                    <Text style={styles.balanceLabel}>Your Balance</Text>
                    <Text style={styles.balanceAmount}>₹{balance}</Text>
                </View>

                <Text style={styles.sectionTitle}>Quick Actions</Text>
            </View>

            {/* Only Quick Actions are scrollable */}
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.grid}>
                {features.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.featureButton}>
                        <View style={styles.iconCircle}>{item.icon}</View>
                        <Text style={styles.featureText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc',
    },
    greeting: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    balanceCard: {
        backgroundColor: '#6c63ff',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
    },
    balanceLabel: {
        color: '#ccc',
        fontSize: 16,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '700',
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#444',
    },
    scrollArea: {
        flex: 1,
        paddingHorizontal: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 80,
    },
    featureButton: {
        width: '30%',
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2,
    },
    iconCircle: {
        backgroundColor: '#6c63ff',
        padding: 12,
        borderRadius: 50,
    },
    featureText: {
        marginTop: 10,
        fontSize: 13,
        color: '#333',
        textAlign: 'center',
    },
});
