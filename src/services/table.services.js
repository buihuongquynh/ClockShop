import axiosClient from './config.services';

class TableService {

  static list(query) {
    // return fetchData(query);
    const url = '/coins/markets';
    return axiosClient.get(url, { params: query });
  }
  static listCurrency() {
    const url = '/simple/supported_vs_currencies';
    return axiosClient.get(url);
  }
  static listMan() {
    const url = '/product_man';
    return axiosClient.get(url);
  }
  static listWoman() {
    const url = '/product_woman';
    return axiosClient.get(url);
  }
  static detail(id) {
    const url = `/product_man/${id}`;
    return axiosClient.get(url);
  }
}
export default TableService;
