import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const accounts = [
  { id: '1', type: 'Savings Account', number: 'XXXX1234', balance: '₹64,500.00', currency: 'INR' },
  { id: '2', type: 'Current Account', number: 'XXXX5678', balance: '₹38,250.00', currency: 'INR' },
  { id: '3', type: 'Fixed Deposit', number: 'XXXX9012', balance: '₹1,22,000.00', currency: 'INR' },
];

const getTotalBalance = () => {
  const total = accounts.reduce((sum, acc) => {
    const numeric = parseFloat(acc.balance.replace(/[₹,]/g, ''));
    return sum + numeric;
  }, 0);
  return `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
};

const MyWalletScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, }}>
        <Text style={styles.title}>My Wallet</Text>

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Balance</Text>
          <Text style={styles.totalAmount}>{getTotalBalance()}</Text>
        </View>
        <Text style={styles.sectionTitle}>Your Accounts</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 20, paddingBottom: 80 }}>
          {accounts.map((item) => (
            <View style={styles.accountCard} key={item.id}>
              <View>
                <Text style={styles.accountType}>{item.type}</Text>
                <Text style={styles.accountNumber}>{item.number}</Text>
              </View>
              <Text style={styles.accountBalance}>{item.balance}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#0f172a',
  },
  totalCard: {
    backgroundColor: '#4f46e5',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },
  totalLabel: {
    color: '#cbd5e1',
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1e293b',
  },
  accountCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },
  accountType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  accountNumber: {
    fontSize: 12,
    color: '#64748b',
  },
  accountBalance: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16a34a',
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardBank: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  cardType: {
    fontSize: 14,
    color: '#e0e7ff',
    marginVertical: 6,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 2,
  },
  addCardButton: {
    marginTop: 20,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});
