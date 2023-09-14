"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  // Hot discount function
  async hotDiscount(ctx) {
    try {
      ctx.query = { ...ctx.query, local: "en" };

      // Calling the default core action
      const { data } = await strapi.controllers["api::product.product"].find(
        ctx
      );

      // Filter and show those data which hot_discount will be true
      const filteredData = data.filter(
        (item) => item.attributes.hot_discount === true
      );

      return { filteredData };
    } catch (err) {
      return ctx.send({ error: err.message });
    }
  },
}));
