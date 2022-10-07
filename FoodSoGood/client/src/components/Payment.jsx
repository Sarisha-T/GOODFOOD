import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";
export default function Payment(totalamt) {
  const dispatch = useDispatch();

  function generateToken(token) {
    console.log(token);
    dispatch(placeOrder(token, totalamt));
  }
  return (
    <div>
      <StripeCheckout
        amount={totalamt * 100}
        shippingAddress
        token={generateToken}
        currency="INR"
        stripeKey={
          "pk_test_51LqEUOSElQrpNwqzIMSByxqlUlJdWazKiEKAfJTfaZroUPOxz4O55tzBsfwJW3tZnRkrL42mxmUsj0o1PGR4LrGS00yysgdWKr"
        }
      >
        <button className="add my-2 py-2 justify-content-center">
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
}
