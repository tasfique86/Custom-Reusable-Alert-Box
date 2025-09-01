import { MessageTypes } from "@/src/components/modals/types";
export type RequireMessageModalPropsType = {

  messageType: MessageTypes;
  headerText: string;
  messageText: string;
  onDismiss: () => any;
  onConfirm: () => any;
};
export type ExtraMessageModalPropsType = {
  buttonText?: string;
  altButtonText?: string;
  onDismiss: () => any;
  onReject?: () => any;
};