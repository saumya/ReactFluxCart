// Action Dispatcher
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
AppDispatcher.handleAction = function(action){
  var actionFromViewObj = {
    source: 'VIEW_ACTION',
    action: action
  };
  this.dispatch(actionFromViewObj);
};
module.exports = AppDispatcher;
