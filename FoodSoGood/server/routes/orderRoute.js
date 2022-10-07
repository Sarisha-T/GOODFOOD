const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51LqEUOSElQrpNwqzBckYplrjwmH84A8G2LcGspqNViJ7MhFXc5FCcxbJxlbxIEHpUgRzKo1gjVn2b1s0uaATrjx000zxJbvPwI"
);
const Order = require("../model/orderModel");

router.post("/order", async (req, res) => {
  const { token, totalamt, currUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const pay = await stripe.charges.create(
      {
        amount: totalamt * 100,
        currency: "inr",
        customer: customer.id,
        reciept_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (pay) {
      const neworder = new Order({
        name: currUser.name,
        email: currUser.email,
        userid: currUser.userid,
        orderItems: cartItems,
        orderAmount: totalamt,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          coutry: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: pay.source.id,
      });
      neworder.save(); //saves to mongodb

      res.send("payment done");
    } else {
      res.send("payment failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

module.exports = router;
