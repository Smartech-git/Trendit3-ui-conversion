import * as z from "zod";
import parsePhoneNumber from "libphonenumber-js";
const numeral = require("numeral");

export const airtimeFormSchema = z.object({
  phone: z.string().transform((value, ctx) => {
    const phoneNumber = parsePhoneNumber(value, {
      defaultCountry: "NG",
    });

    if (!phoneNumber?.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid phone number",
      });
      return z.NEVER;
    }

    return phoneNumber.formatInternational();
  }),
  amount: z.preprocess((value) => {
    const parsedValue = numeral(value).value();
    return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
  }, z.number().min(50, { message: "Minimum amount is ₦50" }).positive({ message: "Add a price" })),
});

export const electricityFormSchema = z.object({
  distributionCompany: z.string().min(1, { message: "Select distribution company" }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  meterNumber: z.preprocess((value) => {
    const parsedValue = numeral(value).value();
    return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
  }, z.number().positive({ message: "Add meter number" })),
  amount: z.preprocess((value) => {
    const parsedValue = numeral(value).value();
    return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
  }, z.number().min(50, { message: "Minimum amount is ₦50" }).positive({ message: "Add a price" })),
  accountType: z.string().min(1, { message: "Select account type" }),
});

export const bettingFormSchema = z.object({
  betPlatform: z.string().min(1, { message: "Select bet platform" }),
  userID: z.string().min(1, { message: "Add user ID" }),
  phone: z.string().transform((value, ctx) => {
    const phoneNumber = parsePhoneNumber(value, {
      defaultCountry: "NG",
    });

    if (!phoneNumber?.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid phone number",
      });
      return z.NEVER;
    }

    return phoneNumber.formatInternational();
  }),
  amount: z.preprocess((value) => {
    const parsedValue = numeral(value).value();
    return !isNaN(parsedValue) && value !== "" ? parsedValue : undefined;
  }, z.number().min(50, { message: "Minimum amount is ₦50" }).positive({ message: "Add a price" })),
});
