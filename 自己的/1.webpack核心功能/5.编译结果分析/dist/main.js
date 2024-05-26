(function (modules) {

  var installedModules = {};


  function __webpack_require__(moduleId) {


    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };


    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);


    module.l = true;


    return module.exports;
  }




  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/a.js": function (module, exports) {
    eval("console.log('a =====  webpack');\r\n\r\nmodule.exports.naisi = 'hello webpack!!!';\n\n//# sourceURL=webpack:///./src/a.js?");
  },
  "./src/index.js":
    function (module, exports, __webpack_require__) {
      eval("const mdua = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\r\n\r\nconsole.log(mdua,'hello 启动文件');\n\n//# sourceURL=webpack:///./src/index.js?");
    }

});