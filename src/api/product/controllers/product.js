// "use strict";

// /**
//  * product controller
//  */

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::product.product");

"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async hotDiscount(ctx) {
    try {
      ctx.query = { ...ctx.query, local: "en" };

      // Calling the default core action
      const { data } = await super.find(ctx);

      // Filter and show those data which hot_discount = true
      const filteredData = data.filter(
        (item) => item.attributes.hot_discount === true
      );

      return { filteredData };
    } catch (err) {
      return ctx.send({ error: err.message });
    }
  },
}));
