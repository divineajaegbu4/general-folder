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
import React from "react";
import moment from "moment";
import CheckoutItem from "./CheckoutItem";
import "./Orders.css";

function Order(props) {
  return (
    <div className="order">
      <div className="order_time_date_order_id">
        <div className="order_order_time_date">
          <h2>Order</h2>
          <p>
            {moment
              .unix(props.order.data.created)
              .format("MMMM Do YYYY, h:mma")}
          </p>
        </div>
        <p className="order_id">
          <small>{props.order.id}</small>
        </p>
      </div>
      <div className="order_page_list">
        {props.order.data.basket?.map((item) => (
          <CheckoutItem
            key={item.id}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            id={item.id}
            stars={item.stars}
            hideBtn
          />
        ))}
      </div>
      <p className="order_page_total">
        Order Total : ${props.order.data.amount / 100}
      </p>
    </div>
  );
}

export default Order;
