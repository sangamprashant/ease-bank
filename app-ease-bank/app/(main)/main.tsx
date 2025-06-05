import MainLayout from '@/(layouts)/MainLayout'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MainHome = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MainLayout />
        </SafeAreaView>
    )
}

export default MainHome