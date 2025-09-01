import StyledButton from "@/src/components/button/StyledButton";
import MessageModal from "@/src/components/modals/MessageModal";
import { MessageTypes } from "@/src/components/modals/types";
import StyledText from "@/src/components/StyledText";

import { appColors } from "@/src/config/theme";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useMessageModel } from "../hook";
export default function Index() {
  const {
    showMessageModal,
    hideModal,
    messageModalState,
    setIsLoading,
    setIsConfirming,
    setIsRejecting,
  } = useMessageModel();

  const handleProceed = () => {
    setIsConfirming(true);

    setTimeout(() => {
      setIsConfirming(false);
      hideModal();
    }, 4000);
    console.log("Proceeding 8...");
    // hideModal();
  }

  const handleDismiss = () => {
    console.log("Dismissing...");
    hideModal();
  };

  const handleReject = () => {
    setIsRejecting(true);
    console.log("Rejecting...");
    setTimeout(() => {
      setIsRejecting(false);
      hideModal();
    }, 4000);
    // hideModal();
  };

  useEffect(() => {
  //  setIsLoading(true);

  //  setTimeout(() => {
  //    setIsLoading(false);
  //  }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <StyledText style={styles.text} big bold>
        Hello TR
      </StyledText>
      <StyledButton 
      style={{ marginBottom: 10, backgroundColor: appColors.fail }}
      onPress={() => {
        showMessageModal(
          MessageTypes.FAIL,
          "Login Failed",
          "Please check your credentials and try again.",
          handleProceed
        );
      }}>
        Fail
      </StyledButton>

      <StyledButton 
      style={{ marginBottom: 10, backgroundColor: appColors.success }}
      onPress={() => {
        showMessageModal(
          MessageTypes.SUCCESS,
          "Login Successful",
          "Welcome back! You have successfully logged in.",
          handleProceed,
          { 
            onDismiss: handleDismiss,
            buttonText: "Continue",
          }
        );
      }}>
        Success
      </StyledButton>

      <StyledButton 
      style={{ marginBottom: 10, backgroundColor: appColors.warning }}
      onPress={() => {
        showMessageModal(
          MessageTypes.WARNING,
          "Login Failed",
          "Please check your credentials and try again.",
          handleProceed
        );
      }}>
        Warning
      </StyledButton>

      <StyledButton 
      style={{ marginBottom: 10, backgroundColor: appColors.decision }}
      onPress={() => {
        showMessageModal(
          MessageTypes.DECISION,
          "Login Failed",
          "Please check your credentials and try again.",
          handleProceed,
          {
            onDismiss: handleDismiss,
            buttonText: "Proceed",
            altButtonText: "Cancel"
          }
        );
      }}>
        Decision
      </StyledButton>

      <StyledButton 
      style={{ marginBottom: 10, backgroundColor: appColors.fail }}
      onPress={() => {
        showMessageModal(
          MessageTypes.DANGEROUS_DECISION,
          "Login Failed",
          "Please check your credentials and try again.",
          handleProceed,
          {
            onReject: handleReject,
          }
        );
      }}>
       Dangerous Decision
      </StyledButton>

      <StyledButton 
      style={{ marginBottom: 10, backgroundColor: appColors.info }}
      onPress={() => {
        showMessageModal(
          MessageTypes.INFO,
          "Information",
          "Please check your credentials and try again.",
          handleProceed,
          {
            onDismiss: handleDismiss
          }
        );
      }}>
        Decision
      </StyledButton>
      
      <MessageModal {...messageModalState} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    padding: 25,
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  }
});
