import React from 'react';
import { useSelector } from 'react-redux';
import Toast from './Toast';

const ToastContainer = () => {
  const msg = useSelector((state) => state.notification);
  if (msg) {
    return (
      <>
        <Toast msg={msg} />{' '}
      </>
    );
  }

  return <></>;
};

export default ToastContainer;
