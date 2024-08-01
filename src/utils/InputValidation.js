export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(9))) {
    return false;
  }
  add = 0;
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
  }
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
};

export const validateCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }
  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) {
    return false;
  }
  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) {
    return false;
  }
  return true;
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[1-9]{2}9[6-9][0-9]{3}[0-9]{4}$/;
  return phoneRegex.test(phone);
};

export const validateDateOfBirth = (date) => {
  const dateOfBirthRegex = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;
  return dateOfBirthRegex.test(date);
};

export const validateCompanyOpeningDate = (date) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Os meses em JavaScript são baseados em zero
  const day = currentDate.getDate() - 1;
  const maxDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const companyOpeningDateRegex = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/;

  if (!companyOpeningDateRegex.test(date)) {
    return false;
  }

  const [dayStr, monthStr, yearStr] = date.split('-');
  const formattedDate = `${yearStr}-${monthStr}-${dayStr}`;

  return formattedDate <= maxDate;
};

export const validateName = (name) => {
  const regex = /^[A-Za-z\s]{3,}$/;
  return regex.test(name);
};