import { CenterModal, CenterModalProps, SlideupModal } from "@tyanpey/urban_memories_lib";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type modalTitleSection = {
  title: CenterModalProps["titleText"];
  icon: CenterModalProps["titleIcon"];
};
type modalContent = ReactNode;
export type modalMode = "centerCard" | "slideUp";

// ------ Context -------------
export interface AppModalContext {
  /**
   * Open a modal with the given title, icon, and content (Pass a ReactNode).
   */
  openModal: (
    modalTitle: modalTitleSection,
    modalContent: modalContent,
    modalMode?: modalMode
  ) => void;
  /**
   * Close the current modal.
   */
  closeModal: () => void;
}

const AppModalContext = createContext<AppModalContext>({
  openModal: () => {},
  closeModal: () => {},
});

// ------ Wrapper -------------
interface AppModalWrapperProps {
  children: ReactNode;
}
export const AppModalWrapper = ({ children }: AppModalWrapperProps) => {
  // ---------- Master State ------------
  // Determines if any modal is open.
  // Context Provider handles this state inside functions exported in the context.

  // Master state for modals. If any modal is open, the effect sets this to true.
  const [isOpen, setIsOpen] = useState(false);

  // ----------- Modal Data State -----------
  // These will be used to store the data of the modal to render it.
  // Receives data from context functions.

  // Used to store which modal to render.
  const [modalMode, setModalMode] = useState<modalMode>("centerCard");

  // Used to store modal title.
  const [modalTitleSection, setModalTitleSection] =
    useState<modalTitleSection>();

  // Used to store modal component.
  const [modalComponent, setModalComponent] = useState<modalContent>(null);

  // ------ These functions are passed to the context -------------
  const openModal = (
    modalTitle: modalTitleSection,
    modalContent: modalContent,
    modalMode?: modalMode
  ) => {
    setModalMode(modalMode || "centerCard");
    setModalTitleSection(modalTitle);
    setModalComponent(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log("closeModal");
    setIsOpen(false);
  };

  // ------- Effects ------------
  // reset modal data when modal is closed.
  useEffect(() => {
    if (isOpen) return;
    setModalMode("centerCard");
    setModalTitleSection(undefined);
    setModalComponent(null);
  }, [isOpen]);

  // -------- Context Provider Value -----------
  const contextValue = {
    openModal,
    closeModal,
  };

  return (
    <AppModalContext.Provider value={contextValue}>
      {children}

      {/* Open modals according to modalMode */}

      {/* centerCard */}
      {modalMode == "centerCard" && (
        <CenterModal
          titleText={modalTitleSection?.title}
          titleIcon={modalTitleSection?.icon}
          isOpen={isOpen}
          bgBlur
          onClose={closeModal}
        >
          {modalComponent}
        </CenterModal>
      )}

      {/* slideUp */}
      {modalMode == "slideUp" && (
        <SlideupModal
          heightSteps={[.9]}
          bgBlur
          isOpen={isOpen}
          titleText={modalTitleSection?.title}
          onClose={closeModal}
        >
          {modalComponent}
        </SlideupModal>
      )}

    </AppModalContext.Provider>
  );
};

// ------ Custom Hook -------------
export const useAppModal = () => {
  const { openModal, closeModal } = useContext(AppModalContext);
  return { openModal, closeModal };
};
