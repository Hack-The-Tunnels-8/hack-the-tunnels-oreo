export const createOrderWithOneItem = async (name, email, number, productId, title) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/orders`,
    {
      method: "POST",
      body: JSON.stringify({
        customer: {
          name: name,
          email: email,
          number: number,
        },
        lineItems: [
          {
            productId: productId,
            quantity: 1,
            productTitle: title
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const json = await response.json();
  return json;
};
