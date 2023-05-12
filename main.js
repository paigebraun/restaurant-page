/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/Oswald-Regular.ttf */ \"./src/fonts/Oswald-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/HeatherOliver-Regular.otf */ \"./src/fonts/HeatherOliver-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Oswald';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'HeatherOliver';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('opentype');\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\nbody {\\n    margin: 0px;\\n}\\n\\n/*navBar styling*/\\n#navBar {\\n    display: flex;\\n    height: 60px;\\n    margin: 0px;\\n    background-color: #311413;\\n    justify-content: space-between;\\n    padding: 0 5%;\\n}\\n\\n#navLeft {\\n    padding: 5px;\\n}\\n\\n#navRight {\\n    display: flex;\\n    gap: 30px;\\n    font-size: 130%;\\n    align-items: center;\\n}\\n\\n.logo {\\n    height: 100%;\\n    width: 100%;\\n}\\n\\nbutton {\\n    all: unset;\\n    cursor: pointer;\\n}\\n\\n.tab {\\n    color: white;\\n    font-family: 'Oswald';\\n}\\n\\n.selected {\\n    background: #ED2131;\\n    border-radius: 25px;\\n    padding: 2px 23px;\\n}\\n\\n/*home page hero styling*/\\n.heroContainer {\\n    height: 700px;\\n    width: auto;\\n    overflow: hidden;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n\\n.heroBck {\\n    height: auto;\\n    width: 100%;\\n    filter: brightness(70%);\\n}\\n\\n.heroImg {\\n    height: 30em;\\n    top: 20%;\\n}\\n\\n.heroContent {\\n    display: flex;\\n    position: absolute;\\n    justify-content: center;\\n    flex-direction: column;\\n    gap: 45px;\\n}\\n\\n\\n.aboutUs {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    margin-bottom: -80px;\\n}\\n\\nh3 {\\n    color: white;\\n    font-family: 'Oswald';\\n    margin: -8px;\\n    font-size: 1.5em;\\n}\\n\\n/*home page section 1 styling*/\\n.section1 {\\n    display: flex;\\n    height: 600px;\\n    width: auto;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: #FEF3CA;\\n    padding: 0 5%;\\n    gap: 60px;\\n}\\n\\nh1 {\\n    font-family: 'HeatherOliver';\\n    color: #ED2131;\\n    font-size: 3.5em;\\n    margin-bottom: 5px;\\n}\\n\\np {\\n    color: #311413;\\n    font-family: 'Oswald';\\n    font-size: 1.2em;\\n}\\n\\n/*home page section 2 styling*/\\n.section1Img,\\n.section2Img {\\n    height: auto;\\n    width: 50%;\\n    border-radius: 30px;\\n    max-height: 70%;\\n}\\n\\n.section2 {\\n    display: flex;\\n    height: 600px;\\n    width: auto;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: white;\\n    padding: 0 5%;\\n    gap: 60px;\\n}\\n\\n/*footer styling*/\\n.footer {\\n    height: 51px;\\n    width: auto;\\n    display: flex;\\n    gap: 20px;\\n    background-color: #311413;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.social {\\n    background-color: #ED2131;\\n    border-radius: 14px;\\n    padding: 3px;\\n    margin: 2px;\\n    height: 70%;\\n}\\n\\n/*menu page styling*/\\n\\n.title {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.gallery {\\n    display: flex;\\n    justify-content: center;\\n    gap: 20px;\\n    margin: 20px;\\n}\\n\\n.menuGallery {\\n    height: auto;\\n    width: 30%;\\n    border-radius: 30px;\\n    max-height: 70%;\\n    border: 2px solid #311413;\\n}\\n\\n.menuContainer {\\n    display: flex;\\n    justify-content: center;\\n    margin-bottom: 60px;\\n}\\n\\n.menuImg {\\n    max-width: 100%;\\n    height: auto;\\n}\\n\\n/* locations page styling*/\\n\\n.cardContainer {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    margin: 40px;\\n    gap: 40px;\\n}\\n\\n.card {\\n    background: #FFFFFF;\\n    border-radius: 25px;\\n    filter: drop-shadow(1px 1px 4px #B6B6B6);\\n    padding: 40px 20px;\\n}\\n\\n.locationTitle {\\n    font-family: 'HeatherOliver';\\n    color: #ED2131;\\n    font-size: 2em;\\n    margin-top: 0px;\\n    margin-bottom: 20px;\\n}\\n\\n.locationInfo {\\n    display: grid;\\n    grid-template-columns: 1.5fr 1fr;\\n    gap: 20px;\\n}\\n\\n.locationInfo > p {\\n    margin: 0px;\\n}\\n\\n.phone {\\n    font-weight: bolder;\\n}\\n\\n.phone,\\n.number {\\n    margin: 0px;\\n}\\n\\n.locationInfo > p {\\n    text-decoration: underline;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"homepageLoad\": () => (/* binding */ homepageLoad)\n/* harmony export */ });\n/* harmony import */ var _images_R4_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/R4.png */ \"./src/images/R4.png\");\n/* harmony import */ var _images_roscoe_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/roscoe-hero.png */ \"./src/images/roscoe-hero.png\");\n/* harmony import */ var _images_roscoes_chicken_waffles_pico_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/roscoes-chicken-waffles-pico.jpg */ \"./src/images/roscoes-chicken-waffles-pico.jpg\");\n/* harmony import */ var _images_Stevie_Wonder_Roscoe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Stevie_Wonder_Roscoe.png */ \"./src/images/Stevie_Wonder_Roscoe.png\");\n/* harmony import */ var _images_ig_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ig-logo.png */ \"./src/images/ig-logo.png\");\n/* harmony import */ var _images_fb_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/fb-logo.png */ \"./src/images/fb-logo.png\");\n\n\n\n\n\n\n\nconst container = document.getElementById('content');\n\nfunction homepageLoad() {\n    createHero();\n    createSection1();\n    createSection2();\n    createFooter();\n}\n\nfunction createHero() {\n    //create hero section\n    const heroContainer = document.createElement(\"div\");\n    heroContainer.className = 'heroContainer';\n    const heroBackground = new Image();\n    heroBackground.src = _images_R4_png__WEBPACK_IMPORTED_MODULE_0__;\n    heroBackground.className = 'heroBck';\n    heroContainer.appendChild(heroBackground);\n\n    const heroContent = document.createElement(\"div\");\n    heroContent.className = 'heroContent';\n\n    const hero = new Image();\n    hero.src = _images_roscoe_hero_png__WEBPACK_IMPORTED_MODULE_1__;\n    hero.className = 'heroImg'\n    heroContent.appendChild(hero);\n\n    const aboutUs = document.createElement(\"div\");\n    aboutUs.className = 'aboutUs';\n    const aboutText = document.createElement(\"h3\");\n    aboutText.innerText = 'About Us';\n    const carret = document.createElement(\"h3\");\n    carret.innerText = '⌄'\n    aboutUs.appendChild(aboutText);\n    aboutUs.appendChild(carret);\n    heroContent.appendChild(aboutUs);\n\n    heroContainer.appendChild(heroContent);\n\n    container.appendChild(heroContainer);\n}\n\nfunction createSection1() {\n    //create section 1 (our founder)\n    const section1 = document.createElement(\"div\");\n    section1.className = 'section1';\n    const section1Left = document.createElement(\"div\");\n    section1Left.className = 'section1Left';\n    const section1Title = document.createElement(\"h1\");\n    section1Title.innerText = 'Our Founder';\n    section1Left.appendChild(section1Title);\n    const section1Text = document.createElement(\"p\");\n    section1Text.innerText = \"Roscoe's House of Chicken and Waffles is a Hollywood, California-based soul food restaurant chain founded by Herb Hudson, a Harlem native, in 1975. It is best known, as the name states, for serving chicken and waffles, both together and separately, although they do offer more traditional menu items as well.\";\n    section1Left.appendChild(section1Text);\n    const section1Img = new Image();\n    section1Img.src = _images_roscoes_chicken_waffles_pico_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    section1Img.className = 'section1Img';\n    section1.appendChild(section1Left);\n    section1.appendChild(section1Img);\n\n    container.appendChild(section1);\n}\n\nfunction createSection2() {\n    //create section 2 (our story)\n    const section2 = document.createElement(\"div\");\n    section2.className = 'section2';\n    const section2Right = document.createElement(\"div\");\n    section2Right.className = 'section2Right';\n    const section2Title = document.createElement(\"h1\");\n    section2Title.innerText = 'Our Story';\n    section2Right.appendChild(section2Title);\n    const section2Text = document.createElement(\"p\");\n    section2Text.innerText = \"Soon after Roscoe's was opened, Mr. Hudson's friends in Motown and television, such as Stevie Wonder and Natalie Cole, would spread the word to other celebrities including Redd Foxx who would go on to tell their audiences about Roscoe's incredible soul food menu offerings. Other celebrities, like Snoop Dogg, Shaquille O'Neil, and even global leaders including President Obama have enjoyed Roscoe's House of Chicken and Waffles making it a timeless L.A classic.\";\n    section2Right.appendChild(section2Text);\n    const section2Img = new Image();\n    section2Img.src = _images_Stevie_Wonder_Roscoe_png__WEBPACK_IMPORTED_MODULE_3__;\n    section2Img.className = 'section2Img';\n    section2.appendChild(section2Img);\n    section2.appendChild(section2Right);\n\n    container.appendChild(section2);\n}\n\nfunction createFooter() {\n    //create footer\n    const footer = document.createElement(\"div\");\n    footer.className = 'footer';\n    const igContainer = document.createElement(\"a\");\n    igContainer.setAttribute('href', 'https://www.instagram.com/roscoesofficial');\n    const ig = new Image();\n    igContainer.className = 'social';\n    ig.src = _images_ig_logo_png__WEBPACK_IMPORTED_MODULE_4__;\n    igContainer.appendChild(ig);\n    const fbContainer = document.createElement(\"a\");\n    fbContainer.setAttribute('href', 'https://www.facebook.com/RoscoesOfficial/');\n    const fb = new Image();\n    fbContainer.className = 'social';\n    fb.src = _images_fb_logo_png__WEBPACK_IMPORTED_MODULE_5__;\n    fbContainer.appendChild(fb);\n    footer.appendChild(igContainer);\n    footer.appendChild(fbContainer);\n\n    container.appendChild(footer);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations */ \"./src/locations.js\");\n/* harmony import */ var _images_rosco_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/rosco-logo.png */ \"./src/images/rosco-logo.png\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\ncreateNavBar();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homepageLoad)();\n\nconst homeBtn = document.querySelector('.home');\nconst menuBtn = document.querySelector('.menu');\nconst locationBtn = document.querySelector('.locations')\n\nhomeBtn.addEventListener('click', ()=> {\n    while (content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n    menuBtn.classList.remove(\"selected\");\n    locationBtn.classList.remove(\"selected\");\n    homeBtn.classList.add(\"selected\");\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homepageLoad)();\n})\n\nmenuBtn.addEventListener('click', ()=> {\n    while (content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n    homeBtn.classList.remove(\"selected\");\n    locationBtn.classList.remove(\"selected\");\n    menuBtn.classList.add(\"selected\");\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\nlocationBtn.addEventListener('click', ()=> {\n    while (content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n    homeBtn.classList.remove(\"selected\");\n    menuBtn.classList.remove(\"selected\");\n    locationBtn.classList.add(\"selected\");\n    (0,_locations__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\nfunction createNavBar() {\n    //create navigation bar\n    const navBar = document.createElement(\"div\");\n    navBar.id = 'navBar';\n    const navLeft = document.createElement(\"div\");\n    navLeft.id = 'navLeft';\n    const logo = new Image();\n    logo.src = _images_rosco_logo_png__WEBPACK_IMPORTED_MODULE_3__;\n    logo.className = 'logo';\n\n    const navRight = document.createElement(\"div\");\n    navRight.id = 'navRight';\n    const home = document.createElement(\"button\");\n    home.classList.add('tab', 'selected', 'home');\n    home.innerText = 'Home';\n    const menu = document.createElement(\"button\");\n    menu.classList.add('tab', 'menu');\n    menu.innerText = 'Menu';\n    const locations = document.createElement(\"button\");\n    locations.classList.add('tab', 'locations');\n    locations.innerText = 'Locations';\n    \n    document.body.prepend(navBar);\n    navBar.appendChild(navLeft);\n    navBar.appendChild(navRight);\n    navLeft.appendChild(logo);\n    navRight.appendChild(home);\n    navRight.appendChild(menu);\n    navRight.appendChild(locations);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\nconst container = document.getElementById('content');\n\nconst cardContainer = document.createElement(\"div\");\ncardContainer.className = \"cardContainer\";\n\nfunction locationLoad() {\n    createTitle();\n    while (cardContainer.firstChild) {\n        cardContainer.removeChild(cardContainer.lastChild);\n    }\n    createCard(\"Hollywood\", \"1514 N Gower St, Los Angeles, CA 90028\", \"(323) 466-7453\");\n    createCard(\"South Los Angeles\", \"106 W Manchester Blvd, Los Angeles, CA 90003\", \"(323) 752-6211\");\n    createCard(\"Long Beach\", \"730 East Broadway, Long Beach, CA 90802\", \"(562) 437-8355\");\n    createCard(\"Pasadena\", \"830 North Lake Ave, Pasadena, CA 91104\", \"(626) 791-4890\");\n    createCard(\"Inglewood\", \"621 West Manchester Blvd, Inglewood, CA 90301\", \"(310) 981-4141\");\n    createCard(\"Anaheim\", \"2110 South Harbor Blvd, Anaheim, CA 92802\", \"(714) 823-4130\");\n    createCard(\"La Brea\", \"1865 S La Brea Ave, Los Angeles, CA 90019\", \"(323) 847-5027\");\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n}\n\nfunction createTitle() {\n    const title = document.createElement(\"div\");\n    title.className = \"title\";\n    const ourLocations = document.createElement(\"h1\");\n    ourLocations.innerText = \"Our Locations\";\n    title.appendChild(ourLocations);\n\n    container.appendChild(title);\n}\n\nfunction createCard (locationTitle, address, phone) {\n    const locationCard = document.createElement(\"div\");\n    locationCard.className = \"card\";\n    const locationText = document.createElement(\"h4\");\n    locationText.innerText = locationTitle;\n    locationText.className = \"locationTitle\";\n    const locationInfo = document.createElement(\"div\");\n    locationInfo.className = \"locationInfo\";\n    const locationAddress = document.createElement(\"p\");\n    locationAddress.innerText = address;\n    const phoneDiv = document.createElement(\"div\");\n    const locationPhone = document.createElement(\"p\");\n    locationPhone.innerText = \"Phone:\";\n    locationPhone.className = \"phone\";\n    const locationNumber = document.createElement(\"p\");\n    locationNumber.innerText = phone;\n    locationNumber.className = \"number\";\n\n    cardContainer.appendChild(locationCard);\n    locationCard.appendChild(locationText);\n    locationCard.appendChild(locationInfo);\n\n    locationInfo.appendChild(locationAddress);\n    locationInfo.appendChild(phoneDiv);\n    phoneDiv.appendChild(locationPhone);\n    phoneDiv.appendChild(locationNumber);\n\n    container.appendChild(cardContainer);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/locations.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _images_R1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/R1.png */ \"./src/images/R1.png\");\n/* harmony import */ var _images_R2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/R2.png */ \"./src/images/R2.png\");\n/* harmony import */ var _images_R3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/R3.png */ \"./src/images/R3.png\");\n/* harmony import */ var _images_Menu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Menu.png */ \"./src/images/Menu.png\");\n\n\n\n\n\n\nconst container = document.getElementById('content');\n\nfunction menuLoad() {\n    createTitle();\n    createGallery();\n    createMenuPDF();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n}\n\nfunction createTitle() {\n    const title = document.createElement(\"div\");\n    title.className = \"title\";\n    const ourMenu = document.createElement(\"h1\");\n    ourMenu.innerText = \"Our Menu\";\n    title.appendChild(ourMenu);\n    container.appendChild(title);\n}\n\nfunction createGallery() {\n    const gallery = document.createElement(\"div\");\n    gallery.className = \"gallery\";\n    const image1 = new Image();\n    image1.src = _images_R1_png__WEBPACK_IMPORTED_MODULE_1__;\n    image1.className = \"menuGallery\";\n    const image2 = new Image();\n    image2.src = _images_R2_png__WEBPACK_IMPORTED_MODULE_2__;\n    image2.className = \"menuGallery\";\n    const image3 = new Image();\n    image3.src = _images_R3_png__WEBPACK_IMPORTED_MODULE_3__;\n    image3.className = \"menuGallery\";\n    gallery.appendChild(image1);\n    gallery.appendChild(image2);\n    gallery.appendChild(image3);\n\n    container.appendChild(gallery);\n}\n\nfunction createMenuPDF() {\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.className = \"menuContainer\";\n    const menuImg = new Image();\n    menuImg.src = _images_Menu_png__WEBPACK_IMPORTED_MODULE_4__;\n    menuImg.className = \"menuImg\";\n    menuContainer.appendChild(menuImg);\n\n    container.appendChild(menuContainer);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/HeatherOliver-Regular.otf":
/*!*********************************************!*\
  !*** ./src/fonts/HeatherOliver-Regular.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf8493b3268eab9ea626.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/HeatherOliver-Regular.otf?");

/***/ }),

/***/ "./src/fonts/Oswald-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Oswald-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3e9d7ac183b7ebdb8e7.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Oswald-Regular.ttf?");

/***/ }),

/***/ "./src/images/Menu.png":
/*!*****************************!*\
  !*** ./src/images/Menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29e4cd00b89fd36e89b1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Menu.png?");

/***/ }),

/***/ "./src/images/R1.png":
/*!***************************!*\
  !*** ./src/images/R1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cb518b0e70e10069772.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/R1.png?");

/***/ }),

/***/ "./src/images/R2.png":
/*!***************************!*\
  !*** ./src/images/R2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a349af94f37da5627b8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/R2.png?");

/***/ }),

/***/ "./src/images/R3.png":
/*!***************************!*\
  !*** ./src/images/R3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ae03dc713f8637109a2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/R3.png?");

/***/ }),

/***/ "./src/images/R4.png":
/*!***************************!*\
  !*** ./src/images/R4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e970f2682afb63b5256.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/R4.png?");

/***/ }),

/***/ "./src/images/Stevie_Wonder_Roscoe.png":
/*!*********************************************!*\
  !*** ./src/images/Stevie_Wonder_Roscoe.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d1a3d69b441d32b634c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Stevie_Wonder_Roscoe.png?");

/***/ }),

/***/ "./src/images/fb-logo.png":
/*!********************************!*\
  !*** ./src/images/fb-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"521f3c3f48489074be84.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fb-logo.png?");

/***/ }),

/***/ "./src/images/ig-logo.png":
/*!********************************!*\
  !*** ./src/images/ig-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8d1700ef990d62a6013.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ig-logo.png?");

/***/ }),

/***/ "./src/images/rosco-logo.png":
/*!***********************************!*\
  !*** ./src/images/rosco-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e43b363a9e02c434c71.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/rosco-logo.png?");

/***/ }),

/***/ "./src/images/roscoe-hero.png":
/*!************************************!*\
  !*** ./src/images/roscoe-hero.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3409f974b058122e7814.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/roscoe-hero.png?");

/***/ }),

/***/ "./src/images/roscoes-chicken-waffles-pico.jpg":
/*!*****************************************************!*\
  !*** ./src/images/roscoes-chicken-waffles-pico.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f47e5265856ff7e82e3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/roscoes-chicken-waffles-pico.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "restaurant-page";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;