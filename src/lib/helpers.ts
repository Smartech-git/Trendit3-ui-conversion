import { setPathsCookies } from "@/cookies";

type requiredErrorMessage_types = "firstName" | "lastName" | "email" | "userName" | "password" | "passwordConfirm" | "OTP" | "gender" | "refCode" | "dob" | "state" | "country" | "LGA" | "referal" | "useCase";

export const extractData = (obj: Record<string, any>, keysToExtract: string[]): Record<string, any> => {
  return Object.keys(obj).reduce((newObj, key) => {
    if (keysToExtract.includes(key)) {
      newObj[key] = obj[key]; // Add key-value pair to the new object
    }
    return newObj;
  }, {} as Record<string, any>);
};

export const getRequiredErrorMessage = (key: requiredErrorMessage_types): string | undefined => {
  if (key === "firstName") {
    return "First name is required";
  } else if (key === "lastName") {
    return "Last name is required";
  } else if (key === "password") {
    return "Password is required";
  } else if (key === "userName") {
    return "Username is required";
  } else if (key === "passwordConfirm") {
    return "Password is required";
  } else if (key === "email") {
    return "Email is required";
  } else if (key === "dob") {
    return "Birthday is required";
  } else if (key === "gender") {
    return "Gender is required";
  } else if (key === "country") {
    return "Country is required";
  } else if (key === "state") {
    return "State is required";
  } else if (key === "LGA") {
    return "LGA is required";
  }
};

export const getEngagementSubPath = (data: string) => {
  if (data.startsWith("Follow social") || data.startsWith("Get Genuine People to Follow")) {
    return "Follow social";
  } else if (data.startsWith("Like social") || data.startsWith("Get Genuine People to Like")) {
    return "Like social";
  } else if (data.startsWith("Like and follow") || data.startsWith("Get Real People to Like and Follow")) {
    return "Like and follow";
  } else if (data.startsWith("Post Comments") || data.startsWith("Get Genuine People to Comment")) {
    return "Post comments";
  } else {
    return "Like social";
  }
};
