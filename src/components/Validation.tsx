export interface props {
  email?: string;
  password?: string;
}
// export type ERRORS = {
//     email?: string,
//     password?: string
// }

const Validation = (values: props) => {
  const errors: props = {};
  const regex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!regex.test(values.email!)){
    errors.email = "Email format is invalid";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  }
  return errors;
};

export default Validation;
