import { DateValue } from "@nextui-org/react";
import { AnySoaRecord } from "dns";

export const signupPaths: Array<string> = ["/signup/email", "/signup/email-confirmation", "/signup/about", "/signup/profile-setup", "/signup/referal", "/signup/use-case"] as const;
export type signupPathTypes = (typeof signupPaths)[number];

export enum pathsEnum {
  login = "/login/0",
  verification = "/login/verification",
  resetPassword = "/reset-password/0",
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

export type taskTypes = { advert: any; engagement: any };

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

  dashBoardStats: any;
  setDashBoardStats: React.Dispatch<React.SetStateAction<any>>;
  earnersTask: taskTypes;
  setEarnersTask: React.Dispatch<React.SetStateAction<any>>;
  advertTask: taskTypes;
  setAdvertTask: React.Dispatch<React.SetStateAction<any>>;
  socialMediaPlatforms: any;
  setSocialMediaPlatforms: React.Dispatch<React.SetStateAction<any>>;
};

export type signupFormTypes = {
  firstName: undefined | string;
  lastName: undefined | string;
  userName: undefined | string;
  email: undefined | string;
  password: undefined | string;
  passwordConfirm: undefined | string;
  OTP: string | undefined;
  profilePicture: File | undefined;
  gender: string | undefined;
  refCode: string | undefined;
  dob: DateValue | undefined;
  state: string | undefined;
  country: string | undefined;
  LGA: string | undefined;
  referal: string | undefined;
  useCase: string | undefined;
};

export type resetPasswordFormTypes = {
  email: string | undefined;
};

export type loginFormTypes = {
  email: undefined | string;
  password: undefined | string;
  OTP: string | undefined;
};

export type signupContextTypes = {
  formData: signupFormTypes;
  setFormData: React.Dispatch<React.SetStateAction<signupFormTypes>>;
  pathsTrack: Array<string>;
  setPathsTrack: React.Dispatch<React.SetStateAction<Array<string>>>;
};

export type loginContextTypes = {
  formData: loginFormTypes;
  setFormData: React.Dispatch<React.SetStateAction<loginFormTypes>>;
  pathsTrack: Array<string>;
  setPathsTrack: React.Dispatch<React.SetStateAction<Array<string>>>;
};

export type modalTypes = {
  becomeMember?: boolean;
  selectPaymentMethod?: boolean;
  generate?: boolean;
  submit?: boolean;
  orderSummary?: boolean;
  withdraw?: boolean;
  withdrawal_OTP?: boolean;
  topUp?: boolean;
  KYCVerification?: boolean;
  KYCSuccessful?: boolean;
  linkSocialMedia?: boolean;
  linkBank?: boolean;
  airtime?: boolean;
  data?: boolean;
  orderSummaryAirtime?: boolean;
  electricity?: boolean;
  betting?: boolean;
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
  lastname?: string | undefined;
  firstname?: string | undefined;
};

export type statusTypes = "Pending" | "Completed" | "Paid" | "Refunded" | "Cancelled" | "On-going" | "Failed" | "Verified";
