const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

module.exports = {
  async beforeCreate(event) {
    let { data } = await event.params

    let product = {
      name: data.systemTitle,
      sku: data.systemBarcode,
      regular_price: `${data.regularPrice}`,
      sale_price: `${data.salePrice}`,
      type: 'simple',
    }

    try {
      const WooCommerce = new WooCommerceRestApi({
        url: 'https://ss.kodes.agency',
        consumerKey: "ck_3e732e1dcb7ee97c6ceac9201803af6934ee1d09",
        consumerSecret: "cs_3cb8c1cb7db3a6eff1eb923b42a52974390e6eb2",
        version: 'wc/v3'
      });

      if(!data.productCode){
        await WooCommerce.post("products", product)
        .then((response) => {
          data.productCode = response.data.id
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      }
    } catch(err){
      console.log(err)
    }
  },

  async beforeUpdate(event) {
    let { data } = await event.params
    let product = {
      name: data.systemTitle,
      sku: data.systemBarcode,
      type: 'simple',
      regular_price: `${data.regularPrice}`,
      sale_price: `${data.salePrice}`
    }

    try {
      const WooCommerce = new WooCommerceRestApi({
        url: 'https://ss.kodes.agency',
        consumerKey: "ck_3e732e1dcb7ee97c6ceac9201803af6934ee1d09",
        consumerSecret: "cs_3cb8c1cb7db3a6eff1eb923b42a52974390e6eb2",
        version: 'wc/v3'
      });

      if(data.productCode){
        await WooCommerce.put(`products/${data.productCode}`, product)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      }

    } catch(err){
      console.log(err)
    }
  }
}