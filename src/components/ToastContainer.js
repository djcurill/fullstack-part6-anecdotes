import React from 'react';
import { connect } from 'react-redux';
import Toast from './Toast';

const ToastContainer = (props) => {
  //const msg = useSelector((state) => state.notification);
  if (props.msg) {
    return (
      <>
        <Toast msg={props.msg} />{' '}
      </>
    );
  }

  return <></>;
};

const mapStateToProps = (state) => {
  return {
    msg: state.notification,
  };
};

export default connect(mapStateToProps)(ToastContainer);
