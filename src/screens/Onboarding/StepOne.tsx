import React, { useState, memo, useCallback, useMemo } from 'react';
import { Alert, View } from 'react-native';

import { BTextInput, Button } from '../../components/';

import { StepEnum } from '../../constants/App.constants';
import { generateError } from '../../helpers/Validate.helper';

interface StepOneProps {
  onNext: (data: { fullName: string; idNumber: string }, step: StepEnum) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const errors = useMemo(() => ({
    fullName: fullName === '' ? generateError('FullName') : null,
    idNumber: idNumber === '' ? generateError('Id Number') : null,
  }), [fullName, idNumber]);

  const onPress = useCallback(() => {
    if (Object.values(errors).some(error => error)) return;

    onNext({ fullName, idNumber }, 'two');
  }, [fullName, idNumber])

  return (
    <View style={{ flex: 1 }}>
      <BTextInput
        label='Full name'
        value={fullName}
        onChangeText={(text: string) => setFullName(text)}
        borderColor={errors.fullName ? 'red' : 'gray'}
        errors={errors.fullName}
      />

      <BTextInput
        label='ID Number'
        keyboardType="numeric"
        returnKeyType="next"
        value={idNumber}
        onChangeText={(text: string) => setIdNumber(text)}
        borderColor={errors.fullName ? 'red' : 'gray'}
        errors={errors.idNumber}
      />

      <Button label="Next" onPress={onPress} />
    </View>
  );
}

export default memo(StepOne);