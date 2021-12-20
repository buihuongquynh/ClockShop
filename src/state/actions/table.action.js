import Actions from "./action.type";
export const getDataCurrency = () => ({
  type: Actions.GET_DATA_CURRENCY,
});

export const getDataCurrencySuccess = (payload) => ({
  type: Actions.GET_DATA_CURRENCY_SUCCESS,
  payload,
});
export const getValCurrency = (payload) => ({
  type: Actions.GET_VAL_CURRENCY,
  payload,
});
export const getValCurrencySuccess = (payload) => ({
  type: Actions.GET_VAL_CURRENCY_SUCCESS,
  payload,
});

export const getData = (payload) => ({
  type: Actions.GET_DATA,
  payload,
});

export const getManSuccess = (payload) => ({
  type: Actions.GET_DATA_MAN_SUCCESS,
  payload,
});

export const getMan = (payload) => ({
  type: Actions.GET_DATA_MAN,
  payload,
});

export const getWomanSuccess = (payload) => ({
  type: Actions.GET_DATA_WOMAN_SUCCESS,
  payload,
});

export const getWoman = (payload) => ({
  type: Actions.GET_DATA_WOMAN,
  payload,
});

export const getDetail = (payload) => ({
  type: Actions.GET_DELTAI,
  payload: payload,
});
export const getDetailSuccess = (payload) => ({
  type: Actions.GET_DELTAI_SUCCESS,
  payload,
});
