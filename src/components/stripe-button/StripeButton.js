import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IXMzUE9YnuI1vaQ8q9DS9bfwmPJkWRQ12r2u3Pa44L8HMafFltH3ljA0y8cAxHkNkPoT9zoBwB2UACpjjRfJrcY00X25h0RxJ";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount="priceForStripe"
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
