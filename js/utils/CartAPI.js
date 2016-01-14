var FluxCartActions = ('../actions/FluxCartActions');
var api = {
  getProductData: fuction(){
    var localData = localStorage.getItem('product');
    var data = JSON.parse(localData);
    FluxCartActions.receiveProduct(data);
  }
};
module.exports = api;
