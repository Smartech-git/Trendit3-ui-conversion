"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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

export const getNetworkProviderIcon = (phoneNumber: string, size: number = 24) => {
  const networks = {
    Airtel: ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0904", "0907", "0911", "0912"],
    MTN: ["0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913", "0916"],
    Globacom: ["0705", "0805", "0807", "0811", "0815", "0905", "0915"],
    "9Mobile": ["0809", "0817", "0818", "0908", "0909"],
  };
  const cleanNumber = phoneNumber.replace("+234", "0").replace(/\s/g, "");

  const prefix = cleanNumber.slice(0, 4);

  for (const [provider, prefixes] of Object.entries(networks)) {
    if (prefixes.includes(prefix)) {
      if (provider === "MTN") {
        return (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }}>
            <Image width={size} height={size} src={`/logos/MTN.png`} alt='at' />
          </motion.div>
        );
      } else if (provider === "Airtel") {
        return (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }}>
            <Image width={size} height={size} src={`/logos/Airtel.png`} alt='at' />
          </motion.div>
        );
      } else if (provider === "Globacom") {
        return (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }}>
            <Image width={size} height={size} src={`/logos/Globacom.png`} alt='at' />
          </motion.div>
        );
      } else if (provider === "9Mobile") {
        return (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }}>
            <Image width={size} height={size} src={`/logos/9mobile.png`} alt='at' />
          </motion.div>
        );
      }
      return <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className='size-[sizepx] rounded-full bg-gray-100' transition={{ type: "spring" }}></motion.div>;
    }
  }
  return <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className='size-[sizepx] rounded-full bg-gray-100' transition={{ type: "spring" }}></motion.div>;
};
