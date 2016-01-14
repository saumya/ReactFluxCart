// All 'Action Creator methods' are here
// These methods :
//   - tell Dispatcher to dispatch actions
//   - are called from components
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');
var FluxCartActions = {
  receiveProduct:function(data){
    var action = {
      actionType:FluxCartConstants.RECEIVE_DATA,
      data:data
    };
    AppDispatcher.handleAction(action);
  },
  selectProduct:function(index){
    var action = {
      actionType:FluxCartConstants.SELECT_PRODUCT,
      data:index
    };
    AppDispatcher.handleAction(action);
  },
  addToCart:function(sku,update){
    var action = {
      actionType:FluxCartConstants.CART_ADD,
      sku:sku,
      update:update
    };
    AppDispatcher.handleAction(action);
  },
  removeFromCart:function(sku){
    var action = {
      actionType:FluxCartConstants.CART_REMOVE,
      sku:sku
    };
    AppDispatcher.handleAction(action);
  },
  updateCartVisible:function(cartVisible){
    var action = {
      actionType:FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    };
    AppDispatcher.handleAction(action);
  }
};
//
module.exports = FluxCartActions;
