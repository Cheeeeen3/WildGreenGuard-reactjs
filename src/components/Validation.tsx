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
  if (values.email === "") {
    errors.email = "Email is required";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  }
  return errors;
};

export default Validation;
