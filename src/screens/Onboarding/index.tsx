import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import component
import WelcomeScreen from '../Welcome';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

// import constant
import Layout from '../../constants/Layout.constants';
import { StepEnum, StepTitle, StepKeys, IUser } from '../../constants/App.constants';

// import header
import { Header } from '../../components';

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState<StepKeys>('one');
  const [data, setData] = useState<IUser | {}>({});

  const onNext = useCallback((obj: any, step: StepEnum) => {
    setData({ ...data, ...obj });
    setCurrentStep(step);
  }, [data])

  return (
    <SafeAreaView style={styles.container}>
      <Header label={StepTitle[currentStep]} />
      
      {currentStep === 'one'  && <StepOne onNext={onNext} />}
      {currentStep === 'two'  && <StepTwo onNext={onNext} />}
      {currentStep === 'three'  && <StepThree onNext={onNext} />}
      {currentStep === 'finished' && (
        <WelcomeScreen data={data as any}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Layout.spacing.lg,
    backgroundColor: 'transparent',
  },
});

export default OnBoarding;
