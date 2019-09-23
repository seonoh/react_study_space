"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var Box = function (children) { return (<react_native_1.View style={styles_1["default"].box}>
    <react_native_1.Text style={styles_1["default"].boxText}>{children}</react_native_1.Text>
  </react_native_1.View>); };
Box.propTypes = {
    children: prop_types_1["default"].string.isRequired
};
exports["default"] = Box;
