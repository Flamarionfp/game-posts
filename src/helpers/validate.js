const rules = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
};

export const validateEmail = value => {
  if (!rules.email.test(value)) {
    return {hasError: true, msg: 'Email inválido'};
  } else {
    return {hasError: false, msg: ''};
  }
};
