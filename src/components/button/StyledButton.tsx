import { appColors } from "@/src/config/theme";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../StyledText";
import { StyledButtonProps } from "./types";

const StyledButton = ({ children, style, TextStyle, onPress, isLoading, disabled } :StyledButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} disabled={ disabled||isLoading}>
      <StyledText style={[styles.text, TextStyle]}>
        {isLoading ? <ActivityIndicator color={appColors.white} /> : children}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.neutral,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    borderRadius:10,
  },
  text:{
    color:appColors.white,
  }
});

export default StyledButton;
