export const displayNotification = (msg) => {
  return { type: 'notification/display', payload: msg };
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
