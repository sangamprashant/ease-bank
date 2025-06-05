import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _svgs from '../(svgs)';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const ProfileScreen = () => {
  const user = {
    name: 'Prashant Srivastav',
    email: 'prashant@example.com',
    phone: '+91 98765 43210',
    address: 'Lucknow, India',
  };

  const options: {
    label: string;
    icon: IoniconName;
    onPress: () => void;
  }[] = [
      {
        label: 'My Accounts',
        icon: 'wallet-outline',
        onPress: () => { },
      },
      {
        label: 'Transaction History',
        icon: 'document-text-outline',
        onPress: () => { },
      },
      {
        label: 'Security Settings',
        icon: 'shield-checkmark-outline',
        onPress: () => { },
      },
      {
        label: 'Notifications',
        icon: 'notifications-outline',
        onPress: () => { },
      },
      {
        label: 'Cards & Limits',
        icon: 'card-outline',
        onPress: () => { },
      },
      {
        label: 'Loan Details',
        icon: 'trending-up-outline',
        onPress: () => { },
      },
      {
        label: 'Investments',
        icon: 'bar-chart-outline',
        onPress: () => { },
      },
      {
        label: 'Beneficiaries',
        icon: 'people-outline',
        onPress: () => { },
      },
      {
        label: 'Help & Support',
        icon: 'help-circle-outline',
        onPress: () => { },
      },
      {
        label: 'App Settings',
        icon: 'settings-outline',
        onPress: () => { },
      },
      {
        label: 'Log Out',
        icon: 'log-out-outline',
        onPress: () => { },
      },
    ];


  return (
    <View style={{ flex: 1, backgroundColor: '#f1f5f9', }}>
      <View style={styles.profileHeader}>
        <_svgs.Avatar style={styles.avatar} width={80} height={80} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.content}>

        {options.map((opt, index) => (
          <TouchableOpacity key={index} style={styles.optionItem} onPress={opt.onPress}>
            <Ionicons name={opt.icon} size={20} color="#334155" />
            <Text style={styles.optionText}>{opt.label}</Text>
            <Ionicons name="chevron-forward" size={18} color="#94a3b8" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        ))}

      </ScrollView>
    </View>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  content: {
    paddingBottom: 90,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
  },
  email: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  phone: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#ef4444',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
