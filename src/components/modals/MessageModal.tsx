import { appColors } from "@/src/config/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, Modal, Pressable, StyleSheet, View } from "react-native";
import StyledText from "../StyledText";
import StyledButton from "../button/StyledButton";
import {
    MessageIconNameType,
    MessageModalProps,
    MessageThemeColorType,
    MessageTypes
} from "./types";
const MessageModal = ({
    messageModalVisible,
  messageType,
  headerText,
  messageText,
  buttonText,
  altButtonText,
  onDismiss,
  onConfirm,
  onReject = () => {},
  isLoading,
  isProceeding,
  isRejecting
} : MessageModalProps) => {
  let messageIconNameType: MessageIconNameType,
    messageThemeColorType: MessageThemeColorType = "";

  switch (messageType) {
    case MessageTypes.FAIL:
      messageIconNameType = "close";
      messageThemeColorType = appColors.fail;
      break;
    case MessageTypes.SUCCESS:
      messageIconNameType = "check-circle";
      messageThemeColorType = appColors.success;
      break;
    case MessageTypes.INFO:
      messageIconNameType = "information";
      messageThemeColorType = appColors.info;
      break;
    case MessageTypes.WARNING:
      messageIconNameType = "alert-circle-outline";
      messageThemeColorType = appColors.warning;
      break;
    case MessageTypes.DECISION:
      messageIconNameType = "alert-circle-check-outline";
      messageThemeColorType = appColors.decision;
      break;
    case MessageTypes.DANGEROUS_DECISION:
      messageIconNameType = "alert-circle-check-outline";
      messageThemeColorType = appColors.fail;
      break;
    default:
      messageIconNameType = "information-variant";
      messageThemeColorType = appColors.info;
      break;
  }
  return (
    <Modal animationType="slide" visible={true} 
    transparent={ messageModalVisible}>
      <Pressable onPress={onDismiss} style={styles.container}>

        {isLoading && <ActivityIndicator size={70} color={appColors.white} />}

        {
            !isLoading &&
            <View style={styles.modalView}>
          <View
            style={[
              styles.modalIcon,
              { backgroundColor: messageThemeColorType },
            ]}
          >
            <MaterialCommunityIcons
              name={messageIconNameType}
              size={75}
              color={appColors.white}
            />
          </View>
          <View style={styles.modalContent}>
            <StyledText bold big style={styles.headerText}>
              {headerText || "HEADER"}
            </StyledText>
            <StyledText style={styles.messageText}>
              {messageText || "Message"}
            </StyledText>

            {messageType === MessageTypes.DECISION ||
            messageType === MessageTypes.DANGEROUS_DECISION ? (
              <View style={styles.buttonContainer}>
                <StyledButton
                  style={[styles.decisionButton]}
                  onPress={onReject}
                   isLoading={isRejecting}
                >
                  {altButtonText || (
                    <>
                      NO
                      <MaterialCommunityIcons
                        name="close"
                        size={16}
                        color={appColors.white}
                      />
                    </>
                  )}
                </StyledButton>
                <StyledButton
                  style={[
                    styles.decisionButton,
                    { backgroundColor: messageThemeColorType },
                  ]}
                  onPress={onConfirm}
                  isLoading={isProceeding}
                >
                  {buttonText || (
                    <>
                      YES
                      <MaterialCommunityIcons
                        name="check"
                        size={16}
                        color={appColors.white}
                      />
                    </>
                  )}
                </StyledButton>
              </View>
            ) : (
              <StyledButton
                style={{ backgroundColor: messageThemeColorType }}
                onPress={onConfirm}
                isLoading={isProceeding}
              >
                {buttonText || "Okay"}
              </StyledButton>
            )}
          </View>
        </View>
            
        }

        
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    alignItems: "center",
    backgroundColor: appColors.secondary,
    width: "100%",
    borderRadius: 15,
    paddingTop: 45,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  modalIcon: {
    backgroundColor: appColors.neutral,
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -50,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  modalContent: {
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  headerText: {
    marginBottom: 10,
    textAlign: "center",
  },
  messageText: {
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
  decisionButton: {
    width: "auto",
  },
});

export default MessageModal;
