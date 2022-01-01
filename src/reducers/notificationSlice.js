export const displayNotification = (msg, sec) => (dispatch) => {
  dispatch({ type: 'notification/display', payload: msg });
  setTimeout(() => dispatch(removeNotification()), sec * 1000);
};

export const removeNotification = () => {
  return { type: 'notification/remove' };
};

export const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'notification/display': {
      return action.payload;
    }
    case 'notification/remove': {
      return '';
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
