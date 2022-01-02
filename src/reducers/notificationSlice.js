let timeoutId = null;

export const displayNotification = (msg, sec) => (dispatch) => {
  clearInterval(timeoutId);
  dispatch({ type: 'notification/display', payload: msg });
  timeoutId = setTimeout(() => dispatch(removeNotification()), sec * 1000);
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
      timeoutId = null;
      return '';
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
