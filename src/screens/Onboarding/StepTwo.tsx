import React, { useState, memo, useCallback } from 'react';
import { Alert, View } from 'react-native';

import { BTextInput, Button } from '../../components/';

import { StepEnum } from '../../constants/App.constants';
import { isValidEmail, isValidPhone } from '../../helpers/Validate.helper';

interface StepTwoData {
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
}

interface StepTwoProps {
  onNext: (data: StepTwoData, step: StepEnum) => void;
}

const StepTwo = ({ onNext }: StepTwoProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const onPress = useCallback(() => {
    if (!phoneNumber || ! email || !dateOfBirth) Alert.alert('Field is required.');
    else if (isValidPhone(phoneNumber) && isValidEmail(email))
     onNext({ phoneNumber, email, dateOfBirth }, 'three');
    else Alert.alert('Field is invalid.');
  }, [phoneNumber, email, dateOfBirth])

  return (
    <View style={{ flex: 1 }}>
      <BTextInput
        label='Phone number'
        value={phoneNumber}
        onChangeText={(text: string) => setPhoneNumber(text)}
      />

      <BTextInput
        label='Email'
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />

      <BTextInput
        label='Date of Birth'
        value={dateOfBirth}
        onChangeText={(text: string) => setDateOfBirth(text)}
      />
      <Button label="Next" onPress={onPress} />
    </View>
  );
}

export default memo(StepTwo);