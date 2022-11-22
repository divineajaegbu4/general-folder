// import React from "react";
// import "./Order.css";
// import moment from "moment";
// import CheckoutProduct from "./CheckoutProduct";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "./reducer";
// import { useStateValue } from "./StateProvider";

// function Order({ order }) {
//   const [{ basket }, dispatch] = useStateValue();
//   return (
//     <div className="order">
//       <h2>Order</h2>
//       <p className="order__date">
//         {moment(order?.date).format("MMMM Do YYYY, h:mma")}
//       </p>
//       <p className="order__id">
//         <small>{order?.id}</small>
//       </p>
//       {basket?.map((item) => (
//         <CheckoutProduct
//           id={item.id}
//           title={item.title}
//           image={item.image}
//           price={item.price}
//           rating={item.rating}
//           hideButton
//         />
//       ))}
//       <CurrencyFormat
//         renderText={(value) => (
//           <h3 className="order__total">Order Total: {value}</h3>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />
//     </div>
//   );
// }

// export default Order;

// import React from "react";
// import moment from "moment";
// import NumberFormat from "react-number-format";
// import CheckoutProduct from "./CheckoutProduct";
// import "./Order.css";
// import { v4 as uuidv4 } from "uuid";

// function Order({ order }) {
//   return (
//     <div className="order">
//       <h2>Order</h2>
//       <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
//       <p className="order__id">
//         <small>{order.id}</small>
//       </p>
//       {order.data.basket.map((item) => (
//         <CheckoutProduct
//           key={uuidv4()}
//           id={item.id}
//           title={item.title}
//           image={item.image}
//           price={item.price}
//           rating={item.rating}
//           hideButton={true}
//         />
//       ))}
//       <NumberFormat
//         value={order.data.amount / 100}
//         decimalScale={2}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//         renderText={(value) => (
//           <h3 className="order__total">Order Total: {value}</h3>
//         )}
//       />
//     </div>
//   );
// }

// export default Order;