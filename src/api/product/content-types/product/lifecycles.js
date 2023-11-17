const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// require('dotenv').config()

module.exports = {
  async beforeCreate(event) {
    let product = {
      name: event.params.data.systemTitle,
      sku: event.params.data.systemBarcode,
      regular_price: `${event.params.data.regularPrice}`,
      sale_price: `${event.params.data.salePrice}`,
      type: 'simple',
    }

    try {
      const WooCommerce = new WooCommerceRestApi({
        url: 'https://ss.kodes.agency',
        consumerKey: "ck_3e732e1dcb7ee97c6ceac9201803af6934ee1d09",
        consumerSecret: "cs_3cb8c1cb7db3a6eff1eb923b42a52974390e6eb2",
        version: 'wc/v3'
      });


      await WooCommerce.post("products", product)
      .then((response) => {
        console.log(response.data);
        event.params.data.productCode = response?.data?.id
      })
      .catch((error) => {
        console.log(error.response.data);
      });


    } catch(err){
      console.log(err)
    }
  },

  async beforeUpdate(event) {
    let product = {
      name: event.params.data.systemTitle,
      sku: event.params.data.systemBarcode,
      type: 'simple',
      regular_price: `${event.params.data.regularPrice}`,
      sale_price: `${event.params.data.salePrice}`
    }

    console.log(event.params.data)

    try {
      const WooCommerce = new WooCommerceRestApi({
        url: 'https://ss.kodes.agency',
        consumerKey: "ck_3e732e1dcb7ee97c6ceac9201803af6934ee1d09",
        consumerSecret: "cs_3cb8c1cb7db3a6eff1eb923b42a52974390e6eb2",
        version: 'wc/v3'
      });




      await WooCommerce.put(`products/${event.params.data.productCode}`, product)
      .then((response) => {
        console.log(response.data);
        event.params.data.productCode = response?.data?.id;
        event.params.data.regularPrice = Number(response?.data?.regular_price),
        event.params.data.systemTitle = response?.data?.name
        event.params.data.salePrice = Number(response.data.sale_price) || "";
      })
      .catch((error) => {
        console.log(error.response.data);
      });


    } catch(err){
      console.log(err)
    }
  },

  async beforeDelete(event) {
    try {
      const WooCommerce = new WooCommerceRestApi({
        url: 'https://ss.kodes.agency',
        consumerKey: "ck_3e732e1dcb7ee97c6ceac9201803af6934ee1d09",
        consumerSecret: "cs_3cb8c1cb7db3a6eff1eb923b42a52974390e6eb2",
        version: 'wc/v3'
      });


      await WooCommerce.post(`products/${event.params.data.productCode}`, {
        force: true
      })
      .then((response) => {
        console.log(response.data);
        event.params.data.productCode = response?.data?.id
      })
      .catch((error) => {
        console.log(error.response.data);
      });


    } catch(err){
      console.log(err)
    }
  }
}