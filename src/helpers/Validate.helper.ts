export const isValidPhone = (phone: string) => {
  const regexPattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return regexPattern.test(phone);
};

export const isValidEmail = (email: string) => {
  const regexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regexPattern.test(email);
};

export const generateError = (field: string) => {
  return `${field} is required`;
};