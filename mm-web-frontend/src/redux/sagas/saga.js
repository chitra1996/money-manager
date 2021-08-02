import { takeLatest } from "redux-saga/effects";
import {
  loginUser,
  createExpense,
} from "../../services/apiCalls";

function* creatingExpense() {
  yield takeLatest("CREATING_NEW_EXPENSE", createExpense);
}

function* loggingInUser() {
  yield takeLatest("LOGGING_IN_USER", loginUser);
}

export { loggingInUser, creatingExpense };
