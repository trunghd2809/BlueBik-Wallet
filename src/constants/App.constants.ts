export type StepEnum = 'one' | 'two' | 'three' | 'finished';

export const StepTitle = {
  one: 'Basic information',
  two: 'Additional Information',
  three: 'Purpose',
  finished: 'Welcome to E wallet',
} as const;

export type StepKeys = keyof typeof StepTitle;

// The type StepKeys is now: 'one' | 'two' | 'three' | 'finished'

export interface IUser {
  fullName?: string;
  idNumber?: string;
  email?: string;
  phoneNumber?: string;
  purposes?: string[];
  dateOfBirth: string;
}

export const PURPOSES = [
  'Money Transfer',
  'Payment',
  'Bill Payment',
  'Loan',
  'Investment',
  'Saving',
];