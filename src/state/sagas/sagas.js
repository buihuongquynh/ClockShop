import { call, put, takeLatest, all, takeEvery } from "redux-saga/effects";
import {
  Actions,
  getDataCurrencySuccess,
  getValCurrencySuccess,
  getManSuccess,
  getWomanSuccess,
  getDetailSuccess
} from "../actions";
import TableService from "../../services/table.services";
function* fetchCurrency() {
  try {
    const list = yield call(TableService.listCurrency);
    yield put(getDataCurrencySuccess(list));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchChangeValCurrency(action) {
  try {
    yield put(getValCurrencySuccess(action.payload));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* fetchUser(action) {
  try {
    const user = yield call(TableService.list, action.payload);

    yield put({ type: Actions.GET_DATA_SUCCESS, payload: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* fetchMan() {
  try {
    console.log("hihih")
    const list = yield call(TableService.listMan);
    yield put(getManSuccess(list));
  } catch (e) {
    console.log("hihih")
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchWoman() {
  try {
    const list = yield call(TableService.listWoman);
    yield put(getWomanSuccess(list));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* fetchDetail(action) {
  console.log(action,"pay")
  try {
    const detail = yield call(TableService.detail, action.payload);
    yield put(getDetailSuccess(detail));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* mySaga() {
  yield takeLatest(Actions.GET_DELTAI, fetchDetail);
  yield takeLatest(Actions.GET_DATA_MAN, fetchMan);
  yield takeLatest(Actions.GET_DATA_WOMAN, fetchWoman);
  

}

export default function* rootSaga() {
  yield all([mySaga()]);
}
