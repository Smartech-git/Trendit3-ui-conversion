export const signupPaths = ["/signup/email", "/signup/email-confirmation", "/signup/about", "/signup/profile-setup", "/signup/referal", "/signup/use-case"];
export const signupPath_types = signupPaths.join("|");

export interface signupFormTypes {
  firstName: undefined | string;
  lastName: undefined | string;
  userName: undefined | string;
  email: undefined | string;
  password: undefined | string;
  passwordConfirm: undefined | string;
  OTP: string | undefined;
  gender: string | undefined;
  refCode: string | undefined;
  dob: string | undefined;
  state: string | undefined;
  country: string | undefined;
  LGA: string | undefined;
  referal: string | undefined;
  useCase: string | undefined;
}
