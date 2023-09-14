module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/hot-discount",
      handler: "product.hotDiscount",
      config: {
        auth: false,
      },
    },
  ],
};
