import { put } from "redux-saga/effects";
import ApiCall from "./httpService";
const apiCall = new ApiCall();

function* loginUser(action) {
  try {
    const loginResult = yield apiCall.sendRequest({
      url: "user/login",
      method: "post",
      data: action.payload,
    });
    yield put({ type: "LOGIN_SUCCESS", value: loginResult.data });
    return loginResult;
  } catch (error) {
    throw error;
  }
}

export { loginUser };
