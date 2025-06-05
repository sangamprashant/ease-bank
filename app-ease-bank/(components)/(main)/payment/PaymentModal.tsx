import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const PaymentModal = ({
  modalVisible,
  loading,
  user,
  amount,
  setAmount,
  sendMoney,
  handleCloseModal,
}: {
  modalVisible: boolean;
  loading: boolean;
  user: User | null;
  amount: string;
  setAmount: (amount: string) => void;
  sendMoney: () => void;
  handleCloseModal: () => void;
}) => {
  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>
          {loading ? (
            <ActivityIndicator size="large" color="#007BFF" />
          ) : (
            <>
              <Text style={styles.title}>Send Money</Text>

              <View style={styles.userInfo}>
                <View style={styles.row}>
                  <FontAwesome name="user" size={16} color="#666" style={styles.icon} />
                  <Text style={styles.label}>Receiver</Text>
                </View>
                <Text style={styles.value}>{user?.name}</Text>

                <View style={styles.row}>
                  <MaterialIcons name="account-balance-wallet" size={18} color="#666" style={styles.icon} />
                  <Text style={styles.label}>UPI ID</Text>
                </View>
                <Text style={styles.value}>{user?.upi}</Text>
              </View>

              <View style={styles.inputWrapper}>
                <Ionicons name="cash-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  placeholder="₹ Enter amount"
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                  style={styles.input}
                  placeholderTextColor="#888"
                />
              </View>

              <TouchableOpacity
                style={[styles.button, !amount && styles.buttonDisabled]}
                onPress={sendMoney}
                disabled={!amount}
              >
                <Text style={styles.buttonText}>
                  <Ionicons name="send" size={16} color="#fff" /> Send
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={handleCloseModal}>
                <Text style={styles.cancelText}>
                  <MaterialIcons name="cancel" size={16} color="red" /> Cancel
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 26,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  userInfo: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  icon: {
    marginRight: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginLeft: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.4,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 16,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#111',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 14,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 14,
    color: 'red',
    fontWeight: '500',
  },
});
