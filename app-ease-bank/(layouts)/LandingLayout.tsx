import { useThemeContext } from '@/context/ThemeProvider';
import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React from 'react';

const LandingLayout = () => {
    const { theme, taskBarColor } = useThemeContext();

    return (
        <>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
            <StatusBar style={theme} translucent backgroundColor={taskBarColor}/>
        </>
    );
};

export default LandingLayout;
