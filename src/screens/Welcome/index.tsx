import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IUser } from '../../constants/App.constants';
import Layout from '../../constants/Layout.constants';

interface ResultScreenProps {
  data: IUser
}

const ResultScreen: React.FC<ResultScreenProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Collected Information:</Text>
      <View style={styles.item}>
        <Text style={styles.title}>Full Name:</Text>
        <Text style={styles.content}>{data?.fullName}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>ID Number:</Text>
        <Text style={styles.content}>{data?.idNumber}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Email Address:</Text>
        <Text style={styles.content}>{data?.email}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Phone Number:</Text>
        <Text style={styles.content}>{data?.phoneNumber}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Date of Birth:</Text>
        <Text style={styles.content}>{data?.dateOfBirth}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Selected Purposes:</Text>
        <Text style={styles.content}>{(data?.purposes || []).join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: Layout.fontSize.large,
    fontWeight: '600',
    marginBottom: 10,
  },
  title: {
    fontWeight: '500',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  }
});

export default memo(ResultScreen);

