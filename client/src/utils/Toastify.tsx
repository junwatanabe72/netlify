import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {}

export const options = {
  autoClose: 5000,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  progress: undefined,
};

const Toastify: React.FC<Props> = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
