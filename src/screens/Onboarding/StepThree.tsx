import React, { useCallback, useState, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, CheckBoxButton } from '../../components/';
import { StepEnum, PURPOSES } from '../../constants/App.constants';

interface StepThreeData {
  purposes: string[];
}

interface StepThreeProps {
  onNext: (data: StepThreeData, step: StepEnum) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onNext }) => {
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);

  const handleCheckboxChange = useCallback((purpose: string) => {
    if (selectedPurposes.includes(purpose)) {
      setSelectedPurposes(selectedPurposes.filter(item => item !== purpose));
    } else {
      setSelectedPurposes([...selectedPurposes, purpose]);
    }
  }, []);

  const onPress = () => {
    onNext({ purposes: selectedPurposes }, 'finished');
  };

  return (
    <View style={styles.container}>
      {PURPOSES.map((purpose) => (
        <View key={purpose} style={styles.item}>
          <CheckBoxButton
            value={selectedPurposes.includes(purpose)}
            onPress={() => handleCheckboxChange(purpose)}
          />
          <Text style={styles.text}>{purpose}</Text>
        </View>
      ))}
    
      <Button label="Complete" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 20,
  }
});

export default memo(StepThree);
