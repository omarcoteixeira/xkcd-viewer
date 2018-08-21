export default (state = {}, action) => {
  switch (action.type) {
    case 'COMIC':
      return Object.assign({}, state, { [action.comicNum]: action.comicMetadata });
    default:
      return state;
  }
};