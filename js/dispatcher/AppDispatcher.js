//
var Dispatcher = require('flux').dispatcher;
var AppDispatcher = new Dispatcher();
AppDispatcher.handleAction = function(action){
  var actionFromViewObj = {
    source: 'VIEW_ACTION',
    action: action
  };
  this.dispatch(actionFromViewObj);
};
module.exports = AppDispatcher;
