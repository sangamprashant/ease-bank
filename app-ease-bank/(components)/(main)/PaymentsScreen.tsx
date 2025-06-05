import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    BarcodeScanningResult,
    CameraType,
    useCameraPermissions
} from 'expo-camera';
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Camera from './payment/camera';
import PaymentModal from './payment/PaymentModal';
import YourQr from './payment/YourQr';
import { ScrollView } from 'react-native';
import _colors from '@/utils/colors';

const PaymentsScreen: React.FC = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [amount, setAmount] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [qrVisible, setQrVisible] = useState(false);
    const [cameraVisible, setCameraVisible] = useState(false);
    const [history, setHistory] = useState([
        { _id: '1', name: 'Aman Sharma', amount: '500', upi: 'aman@ybl' },
        { _id: '2', name: 'Priya Verma', amount: '120', upi: 'priya@okhdfc' },
        { _id: '3', name: 'Priya Verma', amount: '120', upi: 'priya@okhdfc' },
        { _id: '4', name: 'Priya Verma', amount: '120', upi: 'priya@okhdfc' },
        { _id: '5', name: 'Priya Verma', amount: '120', upi: 'priya@okhdfc' },
        { _id: '6', name: 'Priya Verma', amount: '120', upi: 'priya@okhdfc' },
    ]);

    if (!permission) return <View />;
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to access the camera</Text>
                <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const handleScan = async ({ data, type }: BarcodeScanningResult) => {
        if (!scanned && type === 'qr') {
            setScanned(true);
            try {
                const parsed: User = JSON.parse(data);
                const userId = parsed?._id;
                if (!userId) throw new Error('Invalid QR Code');

                setLoading(true);
                setTimeout(() => {
                    setUser(parsed);
                    setLoading(false);
                    setModalVisible(true);
                    setAmount('');
                    turnCameraInvisible();
                }, 1000);
            } catch (err: unknown) {
                Alert.alert('Scan Failed', (err as Error).message || 'Invalid QR format');
                setScanned(false);
                setLoading(false);
            }
        }
    };

    const sendMoney = () => {
        if (!user || !amount) return;
        setLoading(true);
        setTimeout(() => {
            Alert.alert('Success', `₹${amount} sent to ${user.name}`);
            setHistory(prev => [
                { _id: `${Date.now()}`, name: user.name, amount, upi: user.upi },
                ...prev,
            ]);
            setModalVisible(false);
            setUser(null);
            setAmount('');
            setScanned(false);
            setLoading(false);
        }, 1000);
    };

    const toggleCameraFacing = () => {
        setFacing(prev => (prev === 'back' ? 'front' : 'back'));
    };

    const turnCameraVisible = () => {
        setCameraVisible(true);
    };

    const turnCameraInvisible = () => {
        setCameraVisible(false);
        setScanned(false);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setScanned(false);
        setUser(null);
        setAmount('');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#f7f9fc' }}>
            <Camera
                facing={facing}
                handleScan={handleScan}
                cameraVisible={cameraVisible}
                turnCameraVisible={turnCameraVisible}
            />

            <View style={styles.actions}>
                <TouchableOpacity
                    style={[
                        styles.actionButton,
                        !cameraVisible && styles.disabledButton,
                    ]}
                    onPress={cameraVisible ? toggleCameraFacing : undefined}
                    activeOpacity={cameraVisible ? 0.7 : 1}
                >
                    <MaterialCommunityIcons name="camera-flip-outline" size={20} color="#fff" />
                    <Text style={styles.actionText}>Flip Camera</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.actionButton, { backgroundColor: _colors.indigo }]} onPress={() => {
                    turnCameraInvisible();
                    setQrVisible(true);
                }}>
                    <FontAwesome5 name="qrcode" size={18} color="#fff" />
                    <Text style={styles.actionText}>Receive Money</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.historyTitle}>Recent Transactions</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {history.map(item => (
                    <View key={item._id} style={styles.historyItem}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.historyName}>{item.name}</Text>
                            <Text style={styles.historyUpi}>{item.upi}</Text>
                        </View>
                        <Text style={styles.historyAmount}>₹{item.amount}</Text>
                    </View>
                ))}
            </ScrollView>

            <PaymentModal
                modalVisible={modalVisible}
                loading={loading}
                user={user}
                amount={amount}
                setAmount={setAmount}
                sendMoney={sendMoney}
                handleCloseModal={handleCloseModal}
            />
            <YourQr qrVisible={qrVisible} setQrVisible={setQrVisible} />
        </View>
    );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
    },
    permissionButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        color: '#333',
    },
    historyList: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    historyItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    historyName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
    },
    historyUpi: {
        fontSize: 13,
        color: '#666',
    },
    historyAmount: {
        fontSize: 16,
        fontWeight: '600',
        color: _colors.indigo,
    },
    disabledButton: {
        backgroundColor: '#ccc',
        opacity: 0.6,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 80,
    },

});
