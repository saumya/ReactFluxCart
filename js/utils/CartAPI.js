var FluxCartActions = require('../actions/FluxCartActions');
var api = {
  getProductData: function(){
    var localData = localStorage.getItem('product');
    var data = JSON.parse(localData);
    FluxCartActions.receiveProduct(data);
  }
};
module.exports = api;
