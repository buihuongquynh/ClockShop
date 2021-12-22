/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../state/actions";
function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.getMan.data);
  useEffect(() => {
    dispatch(getMan());
  }, []);
  return (
    <div className="pay">
      <div className="scrolls">
        <div className="split left">
          <div className="centered">
            <a className="logo">
              <img
                src="https://curnonwatch.com/_next/static/image/assets/images/icons/logo.25d9bce7b5bbc8c0786175f169af2c42.svg"
                alt="logo"
              />
            </a>
            <div className="customer_info">
              <h3>THÔNG TIN KHÁCH HÀNG</h3>
              <form>
                <div className="email">
                  <span className="email_text">
                    {" "}
                    *Không được bỏ trống email*
                  </span>
                  <input
                    id="email"
                    className="email_input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="name_number">
                  <div className="name">
                    <span className="name_number_text">
                      {" "}
                      *Không được bỏ trống tên*
                    </span>
                    <input
                      id="name"
                      className="name_input"
                      type="name"
                      placeholder="Họ tên"
                      name="name"
                      required
                    />
                  </div>
                  <div className="number">
                    <span className="name_number_text">
                      {" "}
                      *Không được bỏ trống số điện thoại*
                    </span>
                    <input
                      id="number"
                      className="number_input"
                      type="number"
                      placeholder="Số điện thoại"
                      name="number"
                      required
                    />
                  </div>
                </div>
                <div className="address">
                  <span className="address_text">
                    {" "}
                    *Không được bỏ trống địa chỉ*
                  </span>
                  <input
                    id="address"
                    className="address_input"
                    type="address"
                    placeholder="Địa chỉ"
                    name="address"
                    required
                  />
                </div>
              </form>
              <div className="shipping">
                <p className="shipping_text">
                  *Phương thức vận chuyển là <span>FREESHIP</span> với đơn hàng
                  từ 700.000đ
                </p>
              </div>
              <button className="next_button">
                <span>TIẾP TỤC</span>
                <span>
                  <svg className="icon" viewBox="0 0 12 6" opacity={1}>
                    <path
                      fill="currentColor"
                      d="M0.125 2.70484C0.0416667 2.77556 0 2.87279 0 2.99654C0 3.12029 0.0416667 3.22636 0.125 3.31476C0.229167 3.38547 0.354167 3.42083 0.5 3.42083H10.2812L8.15625 5.25058C7.90625 5.44504 7.89583 5.64835 8.125 5.86049C8.375 6.05496 8.61458 6.04612 8.84375 5.83397L11.8438 3.28824C11.9063 3.25288 11.9479 3.20869 11.9688 3.15565C11.9896 3.10261 12 3.04958 12 2.99654C12 2.94351 11.9896 2.89047 11.9688 2.83743C11.9479 2.7844 11.9063 2.7402 11.8438 2.70484L8.84375 0.159108C8.61458 -0.0530361 8.375 -0.0530361 8.125 0.159108C7.89583 0.353574 7.90625 0.54804 8.15625 0.742506L10.2812 2.57225H0.5C0.354167 2.57225 0.229167 2.61645 0.125 2.70484Z"
                    />
                  </svg>
                </span>
              </button>
              <p className="note">
                *Lưu ý: Curnon sẽ liên lạc lại với bạn trong 24h (trừ thứ 7, chủ
                nhật và các ngày lễ) để xác nhận đơn hàng.
              </p>
             
            </div>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="order">
              <div className="order_header">
                <p>ĐƠN HÀNG</p>
                <span style={{ cursor: "pointer" }}>Sửa</span>
              </div>
              <div className="order_body">
                <div className="product_info">
                  <div className="product_info_item">
                    <div className="product_img">
                      <img src="https://curnonwatch.com/_next/image?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fs%2Ft%2Fsterling.png&w=128&q=75" />
                    </div>
                    <div className="product_detail">
                      <p className="product_name">STERLING</p>
                      <p className="product_subName">42MM</p>
                      <p className="product_quantity">Qty: 1</p>
                    </div>
                    <div className="product_price">
                      <p className="product_price_discount">
                        {" "}
                        2.634.000&nbsp;₫
                      </p>
                      <p className="product_price_original">3.099.000&nbsp;₫</p>
                    </div>
                  </div>
                </div>
                <div className="coupon">
                  <form className="coupon_code" autoComplete="off">
                    <input
                      className="coupon_code_input"
                      type="text"
                      name="coupon_code"
                      placeholder="Nhập mã khuyến mãi..."
                      autoComplete="false"
                      defaultValue
                    />
                    <button className="coupon_code_button">ÁP DỤNG</button>
                  </form>
                </div>
                <div className="order_sum">
                  <div>
                    <span className="order_sum_text">Thành tiền</span>
                    <span className="order_sum_price">2.634.000&nbsp;₫</span>
                  </div>
                  <div className="discount">
                    <span className="order_sum_text">Mã giảm giá</span>
                    <span className="order_sum_price">0&nbsp;₫</span>
                  </div>
                  <div>
                    <span className="order_sum_text">Phí ship</span>
                    <span className="order_sum_price">0&nbsp;₫</span>
                  </div>
                </div>
                <div className="order_total">
                  <div className="order_total_price">
                    <span className="order_sum_text">TỔNG:</span>
                    <span className="order_sum_price">2.634.000&nbsp;₫</span>
                  </div>
                  <div className="order_total_pay">
                    <p className="order_sum_text">(Đã bao gồm VAT)</p>
                    <p className="order_sum_text1">
                      hoặc 878.000&nbsp;₫ x 3 kỳ
                      <br /> với
                      <span> Fundiin </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
