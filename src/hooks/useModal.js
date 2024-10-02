import {useState, useCallback} from 'react';

const useModal = InitialValue => {
  const [Visible, setVisible] = useState(InitialValue || false);
  const onOpen = useCallback(async value => {
    setVisible(true);
  }, []);
  const onClose = useCallback(async () => {
    setVisible(false);
  }, []);
  const Toggle = useCallback(async () => {
    setVisible(!Visible);
  }, [Visible]);
  return {Visible, setVisible, onOpen, onClose, Toggle};
};

export default useModal;
