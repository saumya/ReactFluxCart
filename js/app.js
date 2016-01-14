//
var React = require ('react');
var ReactDOM = require ('react-dom');
var ProductData = require ('./ProductData');
var CartAPI = require ('./utils/CartAPI');
var FluxCartApp = require ('./components/FluxCartApp.react');
// store and get Data
ProductData.init();
CartAPI.getProductData();
// Render
ReactDOM.render(<FluxCartApp />,document.getElementById('flux-cart'));
