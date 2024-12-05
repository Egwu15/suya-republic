import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/index";
import Footer from "../../components/Footer/index";
import "./cart.css";
import { COLOR_BLACK, COLOR_RED } from "@/utils/constant";
import { Link } from "@inertiajs/react";
import Loader from "@/Components/Loader/Loader";
import { router } from "@inertiajs/react";
import useCartStore from "@/store/Store";
// import useCartStore from "@/stores/useCartStore"; // Import Zustand store

function Cart({ cartAdded, products }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        updateItemSpice,
    } = useCartStore(); // Zustand store methods
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!cartAdded && products?.length) {
            const productIds = products.map((product) => product.id);
            router.post("/cart", { product_ids: productIds });
        }
    }, [products, cartAdded]);

    // Handle quantity change using Zustand
    const handleQuantityChange = (id, increment) => {
        updateItemQuantity(id, increment);
    };

    // Handle item removal using Zustand
    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    // Handle spice level change using Zustand
    const handleSpiceChange = (itemId, newSpice) => {
        updateItemSpice(itemId, newSpice);
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2);
    };

    // Calculate total
    const calculateTotal = () => {
        return parseFloat(calculateSubtotal()).toFixed(2);
    };

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <section className="our-menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <h1 className="mb-2">CART</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cart-table container-fluid mt-5">
                        <div className="table-responsive">
                            <table className="table table-responsive">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">PRODUCT</th>
                                        <th scope="col">Variance</th>
                                        <th scope="col" className="px-5">
                                            PRICE
                                        </th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length
                                        ? cartItems.map((item) => (
                                              <tr key={item.id}>
                                                  <td>
                                                      <Link
                                                          href="/product"
                                                          className="center-item pad"
                                                          style={{
                                                              color: "#b7903c",
                                                              textDecoration:
                                                                  "none",
                                                          }}
                                                      >
                                                          <div
                                                              className="card-container-img mr-3 px-2"
                                                              style={{
                                                                  height: "80px",
                                                                  width: "80px",
                                                              }}
                                                          >
                                                              <img
                                                                  src={
                                                                      item.product_image
                                                                  }
                                                                  alt={
                                                                      item.name
                                                                  }
                                                                  className="img-fluid"
                                                                  loading="lazy"
                                                                  style={{
                                                                      height: "100%",
                                                                      width: "100%",
                                                                  }}
                                                              />
                                                          </div>
                                                          <span
                                                              style={{
                                                                  color: "#b7903c",
                                                              }}
                                                          >
                                                              {item.name}
                                                          </span>
                                                      </Link>
                                                  </td>
                                                  <td>
                                                      {item.variance ? (
                                                          <select
                                                              value={item.spice}
                                                              onChange={(e) =>
                                                                  handleSpiceChange(
                                                                      item.id,
                                                                      e.target
                                                                          .value
                                                                  )
                                                              }
                                                              style={{
                                                                  border: "1px solid #ccc",
                                                                  background:
                                                                      "#f8f9fa",
                                                                  padding:
                                                                      "5px 10px",
                                                                  cursor: "pointer",
                                                              }}
                                                          >
                                                              {item.variance.options.map(
                                                                  (option) => (
                                                                      <option
                                                                          key={
                                                                              option.id
                                                                          }
                                                                          value={
                                                                              option.name
                                                                          }
                                                                      >
                                                                          {
                                                                              option.name
                                                                          }
                                                                      </option>
                                                                  )
                                                              )}
                                                          </select>
                                                      ) : (
                                                          <span>
                                                              No variance
                                                              available
                                                          </span>
                                                      )}
                                                  </td>
                                                  <td>
                                                      £{item.price.toFixed(2)}
                                                  </td>
                                                  <td>
                                                      <div className="d-flex align-items-center">
                                                          <button
                                                              onClick={() =>
                                                                  handleQuantityChange(
                                                                      item.id,
                                                                      -1
                                                                  )
                                                              }
                                                              style={{
                                                                  border: "1px solid #ccc",
                                                                  background:
                                                                      "#f8f9fa",
                                                                  padding:
                                                                      "5px 10px",
                                                                  cursor: "pointer",
                                                              }}
                                                          >
                                                              -
                                                          </button>
                                                          <span
                                                              style={{
                                                                  margin: "0 10px",
                                                                  fontWeight:
                                                                      "bold",
                                                              }}
                                                          >
                                                              {item.quantity}
                                                          </span>
                                                          <button
                                                              onClick={() =>
                                                                  handleQuantityChange(
                                                                      item.id,
                                                                      1
                                                                  )
                                                              }
                                                              style={{
                                                                  border: "1px solid #ccc",
                                                                  background:
                                                                      "#f8f9fa",
                                                                  padding:
                                                                      "5px 10px",
                                                                  cursor: "pointer",
                                                              }}
                                                          >
                                                              +
                                                          </button>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      £
                                                      {(
                                                          item.quantity *
                                                          item.price
                                                      ).toFixed(2)}
                                                      <span
                                                          style={{
                                                              marginLeft:
                                                                  "10px",
                                                              color: "red",
                                                              cursor: "pointer",
                                                              fontWeight:
                                                                  "bold",
                                                          }}
                                                          onClick={() =>
                                                              handleRemoveItem(
                                                                  item.id
                                                              )
                                                          }
                                                      >
                                                          X
                                                      </span>
                                                  </td>
                                              </tr>
                                          ))
                                        : "No Item Selected"}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="p-4">
                        <h1 className="mt-3 mb-5">CART TOTALS</h1>

                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">SUBTOTAL</h6>
                            <p className="col-md-9">£{calculateSubtotal()}</p>
                        </div>
                        <hr />

                        <div className="row" style={{ alignItems: "center" }}>
                            <h6 className="col-md-3">TOTAL</h6>
                            <p className="col-md-9">
                                <b>£{calculateTotal()}</b>
                            </p>
                        </div>
                        <hr />

                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <Link
                                className="text-white"
                                href="/checkout"
                                style={{
                                    background: COLOR_RED,
                                    color: "white",
                                    margin: "10px 0",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                }}
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                        <div className="col-md-4" style={{ margin: "0 auto" }}>
                            <button
                                style={{
                                    background: COLOR_BLACK,
                                    color: "white",
                                    margin: "20px 0",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                BUY WITH G-PAY
                            </button>
                        </div>
                    </section>
                </>
            )}
            <Footer />
        </div>
    );
}

export default Cart;
