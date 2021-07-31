function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(action)
      return state;
    default:
      return state;
  }
}

function mapStateToProps(state) {
  return state;
}

export { reducer, mapStateToProps };
