export const signupPaths = ["/signup/email", "/signup/email-confirmation", "/signup/about", "/signup/profile-setup", "/signup/referal", "/signup/use-case"] as const;
export type signupPathTypes = (typeof signupPaths)[number];

export const loginPaths = ["/login/0", "/login/1", "/login/verification"] as const;
export type loginPathTypes = (typeof loginPaths)[number];

export const resetpasswordPaths = ["/reset-password/0"] as const;
export type resetPasswordPathTypes = (typeof resetpasswordPaths)[number];

export type toastTypes = { open: boolean; state: undefined | "success" | "error"; content: undefined | string | number };

export type GlobalContextTypes = {
  appUser: any;
  setAppUser: React.Dispatch<React.SetStateAction<any>>;
  toast: toastTypes;
  setToast: React.Dispatch<React.SetStateAction<toastTypes>>;
};

export type signupFormTypes = {
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
};

export type resetPasswordFormTypes = {
  OTP: string | undefined;
};

export type loginFormTypes = {
  email: undefined | string;
  password: undefined | string;
  OTP: string | undefined;
};
