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
  }
};
