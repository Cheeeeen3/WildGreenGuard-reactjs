
export interface props {
  email?: string;
  password?: string;
}

const Validation = (values: props) => {
  const errors: props = {};
  const regex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
  if (values.email === "") {
    errors.email = "require email";
  } else if (!regex.test(values.email!)){
    errors.email = "invalid email";
  }

  if (values.password === "") {
    errors.password = "require password";
  }
  return errors;
};

export default Validation;
