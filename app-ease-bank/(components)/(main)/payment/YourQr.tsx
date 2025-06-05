import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { demoUsers } from '@/locales/strings';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const currentUser: User = demoUsers[0];

const YourQr = ({
    qrVisible,
    setQrVisible,
}: {
    qrVisible: boolean;
    setQrVisible: (visible: boolean) => void;
}) => {
    return (
        <Modal visible={qrVisible} transparent animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.qrCard}>
                    <Text style={styles.title}>Your QR Code</Text>

                    <View style={{ marginBottom: 5, alignItems: 'center' }}>
                        <View style={styles.userRow}>
                            <FontAwesome name="user" size={18} color="#666" />
                            <Text style={styles.username}>{currentUser.name}</Text>
                        </View>
                        <Text style={styles.upi}>{currentUser.upi}</Text>
                    </View>

                    <View style={styles.qrWrapper}>
                        <QRCode value={JSON.stringify(currentUser)} size={180} />
                    </View>

                    <TouchableOpacity style={styles.closeButton} onPress={() => setQrVisible(false)}>
                        <MaterialIcons name="close" size={20} color="#fff" />
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default YourQr;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrCard: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
   
    },
    username: {
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
        marginLeft: 6,
    },
    upi: {
        fontSize: 14,
        fontWeight: '400',
        color: '#888',
    },
    qrWrapper: {
        marginVertical: 16,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#f9f9f9',
    },
    closeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    closeText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        marginLeft: 6,
    },
});
