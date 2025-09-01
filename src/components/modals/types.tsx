import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorValue } from "react-native";

export enum MessageTypes{
    'FAIL',
    'SUCCESS',
    'INFO',
    'WARNING',
    'DECISION',
    'DANGEROUS_DECISION'
}

export type MessageIconNameType = keyof typeof MaterialCommunityIcons.glyphMap;

export type MessageThemeColorType = ColorValue;

export type MessageModalProps = {
  messageModalVisible: boolean;
  messageType: MessageTypes;
  headerText: string;
  messageText: string;
  buttonText?: string;
  altButtonText?: string;
  onDismiss: () => any;
  onConfirm: () => any;
  onReject?: () => any;
  isLoading?: boolean;
  isConfirming?: boolean;
  isRejecting?: boolean;
};
