import { isValidEmail, isValidPhone, generateError } from '../../src/helpers/Validate.helper';

// Write test for checking email
describe('Validate email', () => {

  test('Email is valid', () => {
    expect(isValidEmail('testEmail@gmail.com')).toBe(true);
  });

  test('Email is invalid', () => {
    expect(isValidEmail('testEmail')).toBe(false);
  });
});

// Write test for checking phone
describe('Validate phone number', () => {

  test('Phone is valid', () => {
    expect(isValidPhone('0944280917')).toBe(true);
  });

  test('Phone is invalid', () => {
    expect(isValidPhone('testEmail')).toBe(false);
  });
});

// Write test for generate string
describe('Generate string', () => {

  test('String is generated', () => {
    expect(generateError('FullName')).toBe('FullName is required');
  });
  
});