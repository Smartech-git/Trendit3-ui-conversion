export const signupPaths: Array<string> = ["/signup/email", "/signup/email-confirmation", "/signup/about", "/signup/profile-setup", "/signup/referal", "/signup/use-case"] as const;
export type signupPathTypes = (typeof signupPaths)[number];


export enum pathsEnum {
  login = "/login/0",
  verification = "/login/verification",
  resetPassword = "/login/1",
  email = "/signup/email",
  emailConfirmation = "/signup/email-confirmation",
  about = "/signup/about",
  profileSetup = "/signup/profile-setup",
  referal = "/signup/referal",
  useCase = "/signup/use-case",
  home = "/home",
}

export const loginPaths: Array<string> = ["/login/0", "/login/1", "/login/verification"] as const;
export type loginPathTypes = (typeof loginPaths)[number];

export const resetpasswordPaths: Array<string> = ["/reset-password/0"] as const;
export type resetPasswordPathTypes = (typeof resetpasswordPaths)[number];

export const earnPageDynamicPaths: Array<string> = ["/earn/history", "/earn/create-facebook", "/earn/create-X", "/earn/create-tiktok", "/earn/create-instagram", "/earn/create-youtube", "/earn/create-telegram"] as const;
export type earnPageDynamicPathTypes = (typeof earnPageDynamicPaths)[number];
export const advertisePageDynamicPaths: Array<string> = ["/advertise/history", "/advertise/create-facebook", "/advertise/create-X", "/advertise/create-tiktok", "/advertise/create-instagram", "/advertise/create-youtube", "/advertise/create-telegram"] as const;
export type advertisePageDynamicPathTypes = (typeof earnPageDynamicPaths)[number];

export type toastTypes = { open: boolean; state: undefined | "success" | "error"; content: undefined | string | number };

export type membershipApprovalTypes = "approved" | "pending" | "false";

export const default_notoficationBannerProps = {
  open: false,
  mainContent: null,
  description: null,
  action: null,
  actionCallback: () => {},
  timer: false,
};
export type notificationBannerTypes = {
  open: boolean;
  mainContent: string | null;
  description?: string | null;
  action?: string | null;
  actionCallback?: () => void;
  timer?: boolean;
};

export type GlobalContextTypes = {
  appUser: any;
  setAppUser: React.Dispatch<React.SetStateAction<any>>;
  toast: toastTypes;
  setToast: React.Dispatch<React.SetStateAction<toastTypes>>;
  member: boolean;
  setMember: React.Dispatch<React.SetStateAction<boolean>>;
  membershipApproved: membershipApprovalTypes;
  setMembershipApproved: React.Dispatch<React.SetStateAction<membershipApprovalTypes>>;
  activeTask: boolean;
  setActiveTask: React.Dispatch<React.SetStateAction<boolean>>;
  taskTimerActive: boolean;
  setTaskTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  notificationBanner: notificationBannerTypes;
  setNotificationBanner: React.Dispatch<React.SetStateAction<notificationBannerTypes>>;
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

export type modalTypes = {
  becomeMember?: boolean;
  selectPaymentMethod?: boolean;
  generate?: boolean;
  submit?: boolean;
  orderSummary?: boolean;
};

export type createAdFormTypes = {
  platform: string | undefined;
  location: string | undefined;
  state: string | undefined;
  noOfPosts: number | undefined;
  gender: string | undefined;
  religion: string | undefined;
  images: Array<any>;
};

export type cookiesType = {
  signup_token?: string | undefined;
  email?: string | undefined;
  id?: number | undefined;
  expires?: string | undefined;
  date_joined?: string | undefined;
  access_token?: string | undefined;
};
