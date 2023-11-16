// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// require('dotenv').config()

module.exports = {
  async beforeCreate(event) {
    let product = {
      name: event.params.data.title,
      type: 'simple',
      regular_price: `${event.params.data.regularPrice}`,
      sale_price: `${event.params.data.salePrice}`
    }

    console.log(event.params.data.vinas.connect)
    // try {
    //   const WooCommerce = new WooCommerceRestApi({
    //     url: 'https://ss.kodes.agency',
    //     consumerKey: process.env.WOO_KEY,
    //     consumerSecret: process.env.WOO_SECRET,
    //     version: 'wc/v3'
    //   });


    //   await WooCommerce.post("products", product)
    //   .then((response) => {
    //     console.log(response.data);
    //     event.params.data.productCode = response?.data?.id
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });


    // } catch(err){
    //   console.log(err)
    // }
  }
}