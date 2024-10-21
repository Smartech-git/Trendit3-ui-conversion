export const passwordRegrex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
export const emailRegrex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const dobRegrex = /^(?!0000)([1-9]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

export const statuses = ["Pending", "Completed", "Paid", "Refunded", "Cancelled", "On-going"];

export const paymentMethods = [
  { method: "3rdParty", label: "100% Secure payment", desc: "Pay through our highly secured online payment partner using your VISA/Mastercard/Verve card. Or Bank transfer via USSD or internet Bank Transfer." },
  { method: "wallet", label: "Pay from your Trendit Wallet", desc: "Wallet Balance:" },
  { method: "crypto", label: "Pay with CryptoPay", desc: "Pay with USDT (BEP 20)  to our wallet address" },
];

export const settingsNav = ["Profile", "Security", "Linked Accounts", "Bank Details", "Notifications"] as const;
