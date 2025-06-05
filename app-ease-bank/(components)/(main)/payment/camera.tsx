import _colors from '@/utils/colors';
import { BarcodeScanningResult, CameraType, CameraView } from 'expo-camera';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const Camera = ({
    facing,
    handleScan,
    cameraVisible,
    turnCameraVisible
}: {
    facing: CameraType,
    handleScan: ({ data, type }: BarcodeScanningResult) => Promise<void>;
    cameraVisible: boolean;
    turnCameraVisible: () => void;
}) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (cameraVisible) {
            animation.setValue(0); // Reset animation each time camera opens
            Animated.loop(
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 2500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            ).start();
        }
    }, [cameraVisible]);

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
    });

    return (
        <View style={styles.wrapper}>
            {cameraVisible ? (
                <>
                    <CameraView
                        style={styles.camera}
                        facing={facing}
                        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                        onBarcodeScanned={handleScan}
                    />
                    <View style={styles.overlay}>
                        <View style={styles.scanArea}>
                            <Animated.View
                                style={[
                                    styles.scanLine,
                                    { transform: [{ translateY }] }
                                ]}
                            />
                        </View>
                    </View>
                </>
            ) : (
                <TouchableOpacity style={styles.disabledCamera} onPress={turnCameraVisible}>
                    <View style={styles.dashedBorder}>
                        <MaterialIcons name="qr-code-scanner" size={70} color="white" />
                        <Text style={styles.activateText}>Camera is Off</Text>
                        <Text style={styles.activateText}>Tap to Activate</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Camera;

const styles = StyleSheet.create({
    wrapper: {
        height: 250,
        width: 250,
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanArea: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: '#00FFAA',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    scanLine: {
        height: 3,
        width: '100%',
        backgroundColor: '#00FFAA',
        position: 'absolute',
    },
    disabledCamera: {
        flex: 1,
        backgroundColor: _colors.indigo,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    dashedBorder: {
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'dashed',
        borderRadius: 12,
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activateText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
});
