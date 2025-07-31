export type ContactStateType = {
  message: Message;
  sending: boolean;
  isSendSuccess: boolean | null;
};

export type Message = {
  name: string;
  email: string;
  mobile: string;
  text: string;
};

export const successMessage = "Message Sent Successfully!";

export const failedMessage =
  "Error! Failed to send Message. Please try again Later";
