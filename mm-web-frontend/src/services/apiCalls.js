import { put } from "redux-saga/effects";
import ApiCall from "./httpService";

const apiCall = new ApiCall();

function* createExpense(action) {
  try {
    const userData = yield apiCall.sendRequest({
      url: "expense",
      method: "post",
      data: action.payload.expensePayload,
      headers: {
        Authorization: `Bearer ${action.payload.authToken}`,
      },
    });
    if (userData.data) {
      yield put({ type: "NEW_EXPENSE_ADDED", expense: userData.data });
    }
  } catch (error) {
    yield put({ type: "NEW_EXPENSE_FAILED" });
  }
}

function* loginUser(action) {
  try {
    const loginResult = yield apiCall.sendRequest({
      url: "user/login",
      method: "post",
      data: action.payload.loginPayload,
    });
    if (loginResult) {
      localStorage.setItem("authToken", loginResult.data.authToken);
      localStorage.setItem("userId", loginResult.data.userId);
    }

    action.payload.history.push("main", { expenses: [] });
    yield put({ type: "LOGIN_SUCCESS", value: loginResult.data });
  } catch (error) {
    yield put({ type: "LOGIN_FAILED" });
    // throw error;
  }
}

async function getAllExpenses(userId, authToken) {
  try {
    const expenseData = await apiCall.sendRequest({
      url: `expense/${userId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return expenseData;
  } catch (error) {
    throw error;
  }
}

async function getAllCategory(userId, authToken) {
  try {
    const categoryData = await apiCall.sendRequest({
      url: `category/${userId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return categoryData;
  } catch (error) {
    throw error;
  }
}

export { loginUser, getAllExpenses, createExpense, getAllCategory };
