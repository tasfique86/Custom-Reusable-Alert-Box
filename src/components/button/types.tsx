import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type StyledButtonProps = {
  children:  ReactNode;
  style?: StyleProp<ViewStyle>;
  TextStyle?:StyleProp<TextStyle>;
  isLoading?: boolean;
  disabled?: boolean;
  onPress:()=> any;
};
