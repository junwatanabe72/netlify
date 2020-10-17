import { useRef, useCallback, MutableRefObject } from 'react';

export const useDialog = () => {
  const ref: MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const showDialog = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);
  const closeDialog = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, []);
  return { ref, showDialog, closeDialog };
};

export default useDialog;
