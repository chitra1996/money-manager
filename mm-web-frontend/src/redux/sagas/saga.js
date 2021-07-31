import { takeLatest } from 'redux-saga/effects'
import { loginUser } from '../../services/apiCalls';

export function* loggingInUser (action) {
    yield takeLatest('LOGGING_IN_USER', loginUser);
}