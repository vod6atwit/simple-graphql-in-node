const orders = [
  {
    date: '2021-02-02',
    subtotal: 90.22,
    items: [
      {
        product: {
          id: 'redshoes',
          description: 'Old red shoe',
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
