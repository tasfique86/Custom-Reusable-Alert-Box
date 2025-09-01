import { MessageTypes } from "@/src/components/modals/types";
import { useState } from "react";
import {
    ExtraMessageModalPropsType,
    RequireMessageModalPropsType,
} from "../hook/types";
const useMessageModel = () => {
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [requireMessageModal, setRequireMessageModal] =
    useState<RequireMessageModalPropsType>({
      messageType: MessageTypes.INFO,
      headerText: "",
      messageText: "",
      onDismiss: () => {},
      onConfirm: () => {},
    });

  const [extraMessageModalProps, setExtraMessageModalProps] = useState<
    ExtraMessageModalPropsType | undefined
  >();

  const [isLoading, setIsLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const hideModal = () => {
    setMessageModalVisible(false);
  };

  const showMessageModal = (
    messageType: MessageTypes,
    headerText: string,
    messageText: string,
    onConfirm: () => any,
    extraProps?: ExtraMessageModalPropsType
  ) => {
    setMessageModalVisible(true);
    setRequireMessageModal({
      messageType,
      headerText,
      messageText,
      onConfirm,
      onDismiss: hideModal,
    });
    setExtraMessageModalProps(extraProps);
  };

  const messageModalState = {
    messageModalVisible,
    ...requireMessageModal,
    ...extraMessageModalProps,
    isLoading,
    isConfirming,
    isRejecting,
  };

  return {
    showMessageModal,
    hideModal,
    messageModalState,
    setIsLoading,
    setIsConfirming,
    setIsRejecting,
  };
};

export default useMessageModel;
