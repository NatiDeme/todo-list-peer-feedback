"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".list-container {\\r\\n  gap: 17%;\\r\\n  border: 0.5px solid black;\\r\\n  background-color: white;\\r\\n  box-shadow: 5px 5px 15px grey;\\r\\n}\\r\\n\\r\\n#main {\\r\\n  margin-left: 30%;\\r\\n  width: 18%;\\r\\n}\\r\\n\\r\\n.lists {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.task-holder {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.task-holder p {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  padding-left: 8px;\\r\\n}\\r\\n\\r\\n.lists li {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.each-tasks {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding-right: 14px;\\r\\n  height: 45px;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\n.deleted {\\r\\n  all: unset;\\r\\n}\\r\\n\\r\\n.edited {\\r\\n  all: unset;\\r\\n}\\r\\n\\r\\n.list-header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  margin: 0 5%;\\r\\n}\\r\\n\\r\\n.task-input input {\\r\\n  width: 96%;\\r\\n  border: none;\\r\\n  height: 25px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  background-color: rgb(240, 237, 237);\\r\\n}\\r\\n\\r\\n.footer:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.clearButton {\\r\\n  all: unset;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/container.js */ \"./src/modules/container.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addTasks.js */ \"./src/modules/addTasks.js\");\n/* harmony import */ var _modules_completedChecker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/completedChecker.js */ \"./src/modules/completedChecker.js\");\n\n\n\n\n\nconst app = () => {\n  const main = document.getElementById('main');\n  main.append((0,_modules_container_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n\napp();\n(0,_modules_addTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_completedChecker_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTasks.js":
/*!*********************************!*\
  !*** ./src/modules/addTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\r\n\r\nconst addTask = () => {\r\n  const prevTasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n  const inputForm = document.getElementById('input-form');\r\n  const input = document.getElementById('input-field');\r\n  const checkBox = document.querySelectorAll('.checkbox');\r\n  const allDeleteIcons = document.querySelectorAll('.deleted');\r\n  const allEditIcons = document.querySelectorAll('.edited');\r\n  inputForm.addEventListener('submit', () => {\r\n    const taskInput = {\r\n      description: input.value,\r\n      completed: false,\r\n      index: prevTasks.length,\r\n    };\r\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(taskInput);\r\n    prevTasks.push(taskInput);\r\n    localStorage.setItem('tasks', JSON.stringify(prevTasks));\r\n    window.location.reload();\r\n  });\r\n\r\n  const changeStyle = (id) => {\r\n    const me = document.getElementById(`task${id}`);\r\n    const editIcon = document.getElementById(`edit${id}`);\r\n    const deleteIcon = document.getElementById(`delete${id}`);\r\n    if (prevTasks[id].completed === false) {\r\n      me.style.textDecoration = 'none';\r\n      deleteIcon.style.display = 'none';\r\n      editIcon.style.display = 'block';\r\n    } else {\r\n      me.style.textDecoration = 'line-through';\r\n      editIcon.style.display = 'none';\r\n      deleteIcon.style.display = 'block';\r\n    }\r\n    localStorage.setItem('tasks', JSON.stringify(prevTasks));\r\n  };\r\n\r\n  const changeTaskStat = (id) => {\r\n    if (prevTasks[id].completed === false) {\r\n      prevTasks[id].completed = true;\r\n    } else {\r\n      prevTasks[id].completed = false;\r\n    }\r\n    changeStyle(id);\r\n  };\r\n\r\n  if (checkBox.length) {\r\n    checkBox.forEach((i) => {\r\n      i.addEventListener('click', () => {\r\n        changeTaskStat(i.id);\r\n      });\r\n    });\r\n  }\r\n\r\n  if (allEditIcons.length) {\r\n    allEditIcons.forEach((z) => {\r\n      z.addEventListener('click', () => {\r\n        const idArray = z.id.split('');\r\n        const id = idArray[idArray.length - 1];\r\n        const listEdit = document.getElementById(`task${id}`);\r\n        listEdit.contentEditable = true;\r\n        listEdit.style.border = '1px solid black';\r\n        listEdit.addEventListener('keypress', (e) => {\r\n          if (e.key === 'Enter') {\r\n            prevTasks[id].description = e.target.innerText;\r\n            localStorage.setItem('tasks', JSON.stringify(prevTasks));\r\n            window.location.reload();\r\n          }\r\n        });\r\n      });\r\n    });\r\n  }\r\n\r\n  if (allDeleteIcons.length) {\r\n    allDeleteIcons.forEach((d) => {\r\n      d.addEventListener('click', () => {\r\n        const idArray = d.id.split('');\r\n        const id = idArray[idArray.length - 1];\r\n        const newTasks = prevTasks.filter((task) => task.index.toString() !== id);\r\n        for (let m = 0; m < newTasks.length; m += 1) {\r\n          newTasks[m].index = m;\r\n        }\r\n        localStorage.setItem('tasks', JSON.stringify(newTasks));\r\n        window.location.reload();\r\n      });\r\n    });\r\n  }\r\n\r\n  if (prevTasks !== null) {\r\n    for (let j = 0; j < prevTasks.length; j += 1) {\r\n      if (prevTasks[j].completed === true) {\r\n        const me = document.getElementById(`task${prevTasks[j].index}`);\r\n        const checkedInput = document.getElementById(`${prevTasks[j].index}`);\r\n        const editIcon = document.getElementById(`edit${prevTasks[j].index}`);\r\n        editIcon.style.display = 'none';\r\n        checkedInput.checked = true;\r\n        me.style.textDecoration = 'line-through';\r\n      } else {\r\n        const deleteIcon = document.getElementById(`delete${prevTasks[j].index}`);\r\n        deleteIcon.style.display = 'none';\r\n      }\r\n    }\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addTasks.js?");

/***/ }),

/***/ "./src/modules/completedChecker.js":
/*!*****************************************!*\
  !*** ./src/modules/completedChecker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completedChecker = () => {\n  const clearButton = document.getElementById('clear');\n  clearButton.addEventListener('click', () => {\n    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n    const newTasks = tasks.filter((tasks) => tasks.completed === false);\n    for (let i = 0; i < newTasks.length; i += 1) {\n      newTasks[i].index = i;\n    }\n    console.log(newTasks);\n    localStorage.setItem('tasks', JSON.stringify(newTasks));\n    window.location.reload();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completedChecker);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/completedChecker.js?");

/***/ }),

/***/ "./src/modules/container.js":
/*!**********************************!*\
  !*** ./src/modules/container.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ \"./src/modules/footer.js\");\n/* harmony import */ var _listOfTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listOfTasks.js */ \"./src/modules/listOfTasks.js\");\n/* harmony import */ var _tasksHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksHeader.js */ \"./src/modules/tasksHeader.js\");\n/* harmony import */ var _tasksInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasksInput.js */ \"./src/modules/tasksInput.js\");\n\r\n\r\n\r\n\r\n\r\nconst container = () => {\r\n  const container = document.createElement('div');\r\n  container.classList.add('list-container');\r\n\r\n  container.append((0,_tasksHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  container.append((0,_tasksInput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n  container.append((0,_listOfTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  container.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n  return container;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/container.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\r\n  const footer = document.createElement('div');\r\n  footer.innerHTML += `\r\n    <button class=\"clearButton\" id=\"clear\"><p>clear all completed</p></button>\r\n    \r\n    `;\r\n  footer.classList.add('footer');\r\n  return footer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/listOfTasks.js":
/*!************************************!*\
  !*** ./src/modules/listOfTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import tasks from './tasks.js';\r\nconst tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n\r\nconst listOfTasks = () => {\r\n  const listOfTasks = document.createElement('div');\r\n  const tasksUl = document.createElement('ul');\r\n  let tasksElement = '';\r\n  if (tasks !== null) {\r\n    for (let i = 0; i < tasks.length; i += 1) {\r\n      tasksElement += `\r\n            <li class=\"each-tasks\" id=\"list${tasks[i].index}\" class=\"taskContainer${tasks[i].index}\">\r\n              <div class=\"task-holder\">\r\n                <input type=\"checkbox\" id=\"${tasks[i].index}\" class=\"checkbox\">\r\n               <p id=\"task${tasks[i].index}\" class=\"tasks\"> ${tasks[i].description} </p>\r\n              </div>\r\n              <div>\r\n              <button class=\"edited\" id=\"edit${tasks[i].index}\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></button>\r\n              <button class=\"deleted\" id=\"delete${tasks[i].index}\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\r\n              </div>\r\n            </li>\r\n        `;\r\n    }\r\n  }\r\n  tasksUl.innerHTML = tasksElement;\r\n  listOfTasks.classList.add('list');\r\n  tasksUl.className = 'lists';\r\n  listOfTasks.append(tasksUl);\r\n\r\n  return listOfTasks;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listOfTasks);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/listOfTasks.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasks = [];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/modules/tasksHeader.js":
/*!************************************!*\
  !*** ./src/modules/tasksHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasksHeader = () => {\r\n  const tasksHeader = document.createElement('div');\r\n  tasksHeader.innerHTML += `\r\n    <p>Today's to dos</p>\r\n    <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\r\n    `;\r\n  tasksHeader.classList.add('list-header');\r\n  return tasksHeader;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksHeader);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/tasksHeader.js?");

/***/ }),

/***/ "./src/modules/tasksInput.js":
/*!***********************************!*\
  !*** ./src/modules/tasksInput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasksInput = () => {\r\n  const tasksInput = document.createElement('div');\r\n  tasksInput.innerHTML += `\r\n    <form id=\"input-form\" onsubmit=\"return false\">\r\n    <input type=\"text\" placeholder=\"Add to your list...\" id=\"input-field\">\r\n    </form>\r\n    `;\r\n  tasksInput.classList.add('task-input');\r\n  return tasksInput;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksInput);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/tasksInput.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);