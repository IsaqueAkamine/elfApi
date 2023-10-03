const orders = [
  {
    id: 1,
    user_id: 1,
    order_date: "2023-10-02",
    total_amount: 199.99,
    status: "pending",
    shipping_address: "123 Main St, Cityville",
    payment_method: "credit_card",
    created_at: "2023-10-02",
  },
  {
    id: 2,
    user_id: 2,
    order_date: "2023-10-01",
    total_amount: 799.99,
    status: "shipped",
    shipping_address: "456 Oak St, Townsville",
    payment_method: "paypal",
    created_at: "2023-10-01",
  },
];

module.exports = orders;
