import StyledButton from "@/src/components/button/StyledButton";
import MessageModal from "@/src/components/modals/MessageModal";
import StyledText from "@/src/components/StyledText";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text} big bold>
        Hello TR
      </StyledText>
      <StyledButton onPress={() => console.log("Button pressed")}>
        Ok
      </StyledButton>
      <MessageModal />
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
