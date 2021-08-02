const inititalState = {};

function reducer(state = inititalState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        authToken: action.data.authToken,
        userId: action.data.userId,
      };
    case "LOGIN_FAILED":
      return {
        authToken: undefined,
        userId: undefined,
      };
    case "SET_EXPENSES":
      return {
        expenses: action.expenses,
      };
    case "NEW_EXPENSE_ADDED":
      return {
        expenses: state.expenses.concat(action.expense),
      };
    default:
      return state;
  }
}

function mapStateToProps(state = inititalState) {
  console.log({
    mapStateToProps: state,
  });
  return state;
}

export { reducer, mapStateToProps };
