export default (state = 1, action) => {
  switch (action.type) {
    case 'COMIC':
      return action.meta && action.number > state ? action.number : state;
    default:
      return state;
  }
};