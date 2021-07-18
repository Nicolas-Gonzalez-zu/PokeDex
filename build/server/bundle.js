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

/***/ "./client/components/App/index.js":
/*!****************************************!*\
  !*** ./client/components/App/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/state */ \"./client/context/state.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/context */ \"./client/context/context.js\");\n/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SearchBar/SearchBar */ \"./client/components/SearchBar/SearchBar.js\");\n/* harmony import */ var _Cards_Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cards/Cards */ \"./client/components/Cards/Cards.js\");\n/* harmony import */ var _PokemonInfo_PokemonInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PokemonInfo/PokemonInfo */ \"./client/components/PokemonInfo/PokemonInfo.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ \"./client/components/App/style.less\");\n //Import react-router\n\n //Import context\n\n\n //Import components\n\n\n\n //Import styles\n\n\n\nfunction App() {\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.TestContext);\n  console.log(\"render app\");\n  console.log(context);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_state__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_7__.default.Layout\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_7__.default.Navbar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_7__.default.Cards\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cards_Cards__WEBPACK_IMPORTED_MODULE_5__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_7__.default.Space\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/pokemon/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PokemonInfo_PokemonInfo__WEBPACK_IMPORTED_MODULE_6__.default, null))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://pokedex/./client/components/App/index.js?");

/***/ }),

/***/ "./client/components/Cards/Card.js":
/*!*****************************************!*\
  !*** ./client/components/Cards/Card.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./client/components/Cards/style.less\");\n //Import react router\n\n //Import styles\n\n\nfunction Card(_ref) {\n  var name = _ref.name,\n      img = _ref.img,\n      id = _ref.id,\n      click = _ref.click;\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n\n  function handleClick(e) {\n    e.preventDefault();\n    history.push(\"/pokemon/\".concat(click));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: handleClick,\n    className: _style__WEBPACK_IMPORTED_MODULE_2__.default.LayoutCard\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_2__.default.ImgCnt\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_2__.default.PokemonImg,\n    src: img,\n    alt: \"PokemonImg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_2__.default.InfoCnt\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_2__.default.Name\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_2__.default.Id\n  }, id)));\n}\n\n//# sourceURL=webpack://pokedex/./client/components/Cards/Card.js?");

/***/ }),

/***/ "./client/components/Cards/Cards.js":
/*!******************************************!*\
  !*** ./client/components/Cards/Cards.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cards)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./client/components/Cards/style.less\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./client/components/Cards/Card.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/context */ \"./client/context/context.js\");\n/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/functions */ \"./client/helpers/functions.js\");\n //Import styles\n\n //Import component\n\n //import context\n\n //Import function\n\n\nfunction Cards() {\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.default);\n  var pokemons = context.pokemons;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style__WEBPACK_IMPORTED_MODULE_1__.default.Layout\n  }, pokemons === null || pokemons === void 0 ? void 0 : pokemons.map(function (c, index) {\n    var name = (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_4__.capitalizeFirstLetter)(c.name);\n    var id = (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_4__.changeId)(c.id);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n      click: c.id,\n      id: id,\n      key: index,\n      name: name,\n      img: c.sprites.other[\"official-artwork\"].front_default\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: \"100em\",\n      height: \"1em\"\n    }\n  }, \" \"));\n}\n\n//# sourceURL=webpack://pokedex/./client/components/Cards/Cards.js?");

/***/ }),

/***/ "./client/components/PokemonInfo/PokemonInfo.js":
/*!******************************************************!*\
  !*** ./client/components/PokemonInfo/PokemonInfo.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PokemonInfo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/functions */ \"./client/helpers/functions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/context */ \"./client/context/context.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./client/components/PokemonInfo/style.less\");\n //Import function\n\n //Import react router\n\n //import context\n\n //Import styles\n\n\nfunction PokemonInfo() {\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),\n      id = _useParams.id;\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.default);\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();\n  var pokemons = context.pokemons;\n  var pokemon = pokemons.find(function (p) {\n    return p.id == id;\n  });\n\n  function handleClick(e) {\n    e.preventDefault();\n    history.push(\"/\");\n  }\n\n  if (pokemons.find(function (p) {\n    return p.id == id;\n  })) {\n    var name = (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(pokemon.name);\n\n    var _id = (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.changeId)(pokemon.id);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Layout\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Card\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.ImgCnt\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      alt: \"PokemonImg\",\n      src: pokemon.sprites.other[\"official-artwork\"].front_default\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.InfoCnt\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.NameCnt\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Name\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, _id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, pokemon.id > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Link,\n      to: \"/pokemon/\".concat(pokemon.id - 1)\n    }, (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.changeId)(pokemon.id - 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      type: \"button\",\n      onClick: handleClick,\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Link\n    }, \"Close\"), pokemons[pokemons.length - 1].id >= pokemon.id + 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Link,\n      to: \"/pokemon/\".concat(pokemon.id + 1)\n    }, (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.changeId)(pokemon.id + 1)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: _style__WEBPACK_IMPORTED_MODULE_4__.default.InfoInnerCnt\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, \"Height\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.changeHeight)(pokemon.height))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, \"Type\"), pokemon.types.map(function (e, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n        className: _style__WEBPACK_IMPORTED_MODULE_4__.default.Type,\n        target: \"\".concat((0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(e.type.name)),\n        key: index + 'Ability'\n      }, (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(e.type.name));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, \"Weight\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.changeWeight)(pokemon.weight))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, \"Abilities\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(pokemon.abilities[0].ability.name)))))));\n  }\n}\n\n//# sourceURL=webpack://pokedex/./client/components/PokemonInfo/PokemonInfo.js?");

/***/ }),

/***/ "./client/components/SearchBar/SearchBar.js":
/*!**************************************************!*\
  !*** ./client/components/SearchBar/SearchBar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchBar)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/context */ \"./client/context/context.js\");\n/* harmony import */ var _searchbar_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar.less */ \"./client/components/SearchBar/searchbar.less\");\n\n //import context\n\n //Import styles\n\n\nfunction SearchBar() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.default);\n\n  function handleChange(e) {\n    setName(e.target.value);\n  }\n\n  function onClick() {\n    context.getPokemons(name);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Search...\",\n    onChange: handleChange,\n    value: name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: onClick\n  }, \"Add\"));\n}\n\n//# sourceURL=webpack://pokedex/./client/components/SearchBar/SearchBar.js?");

/***/ }),

/***/ "./client/context/context.js":
/*!***********************************!*\
  !*** ./client/context/context.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestContext\": () => (/* binding */ TestContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nvar TestContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  hello: \"Server context initialize\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n\n//# sourceURL=webpack://pokedex/./client/context/context.js?");

/***/ }),

/***/ "./client/context/reducer.js":
/*!***********************************!*\
  !*** ./client/context/reducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar Reducer = function Reducer(state, action) {\n  switch (action.type) {\n    case \"GET_POKEMONS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        pokemons: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reducer);\n\n//# sourceURL=webpack://pokedex/./client/context/reducer.js?");

/***/ }),

/***/ "./client/context/state.js":
/*!*********************************!*\
  !*** ./client/context/state.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ \"./client/context/context.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ \"./client/context/reducer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\nvar StateProvider = function StateProvider(props) {\n  var initialState = {\n    pokemons: []\n  };\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_5__.default, initialState),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  var getPokemons = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(name) {\n      var response, data, array;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"http://localhost:3001/pokemons/searchPokemon?name=\".concat(name));\n\n            case 2:\n              response = _context2.sent;\n              data = response.data;\n\n              if (data.results) {\n                _context2.next = 10;\n                break;\n              }\n\n              array = [];\n              array.push(data);\n              dispatch({\n                type: \"GET_POKEMONS\",\n                payload: array\n              });\n              _context2.next = 11;\n              break;\n\n            case 10:\n              return _context2.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n                var array2, _iterator, _step, element;\n\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        array2 = [];\n                        console.log(\"estoy aca\");\n                        _iterator = _createForOfIteratorHelper(data.results);\n                        _context.prev = 3;\n\n                        _iterator.s();\n\n                      case 5:\n                        if ((_step = _iterator.n()).done) {\n                          _context.next = 12;\n                          break;\n                        }\n\n                        element = _step.value;\n                        console.log(element);\n                        _context.next = 10;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"http://localhost:3001/pokemons/pokemon?url=\".concat(element.url)).then(function (r) {\n                          array2.push(r.data);\n                        })[\"catch\"](function (e) {\n                          console.log(e);\n                        });\n\n                      case 10:\n                        _context.next = 5;\n                        break;\n\n                      case 12:\n                        _context.next = 17;\n                        break;\n\n                      case 14:\n                        _context.prev = 14;\n                        _context.t0 = _context[\"catch\"](3);\n\n                        _iterator.e(_context.t0);\n\n                      case 17:\n                        _context.prev = 17;\n\n                        _iterator.f();\n\n                        return _context.finish(17);\n\n                      case 20:\n                        if (array2.length === data.results.length) {\n                          dispatch({\n                            type: \"GET_POKEMONS\",\n                            payload: array2\n                          });\n                        }\n\n                      case 21:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, null, [[3, 14, 17, 20]]);\n              })(), \"t0\", 11);\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getPokemons(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_context__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {\n    value: {\n      pokemons: state.pokemons,\n      getPokemons: getPokemons\n    }\n  }, props.children);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateProvider);\n\n//# sourceURL=webpack://pokedex/./client/context/state.js?");

/***/ }),

/***/ "./client/helpers/functions.js":
/*!*************************************!*\
  !*** ./client/helpers/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalizeFirstLetter\": () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   \"changeId\": () => (/* binding */ changeId),\n/* harmony export */   \"changeHeight\": () => (/* binding */ changeHeight),\n/* harmony export */   \"changeWeight\": () => (/* binding */ changeWeight)\n/* harmony export */ });\nfunction capitalizeFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\nfunction changeId(id) {\n  if (id <= 9) {\n    return \"#00\".concat(id);\n  } else if (id <= 99) {\n    return \"#0\".concat(id);\n  } else if (id > 99) {\n    return \"#\".concat(id);\n  }\n}\nfunction changeHeight(height) {\n  var newHeight;\n  var heightMeters = height / 10;\n  var heightFt = heightMeters / 0.3048;\n  var unity = \"\".concat(heightFt).slice(0, 1);\n  var dec = \"\".concat(heightFt).slice(2, 3);\n  return newHeight = \"\".concat(unity, \"'\").concat(dec, \"'' (\").concat(heightMeters, \"m)\");\n}\nfunction changeWeight(weight) {\n  var weightKg = weight / 10;\n  var weightLbs = weightKg * 2.20462;\n  var index = \"\".concat(weightLbs).indexOf(\".\", 0);\n  var newWeight = \"\".concat(weightLbs).slice(0, index + 3);\n  return \"\".concat(newWeight, \" lbs (\").concat(weightKg, \"kg)\");\n}\n\n//# sourceURL=webpack://pokedex/./client/helpers/functions.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App */ \"./client/components/App/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\n\nvar _require = __webpack_require__(/*! ../client/context/context */ \"./client/context/context.js\"),\n    TestContext = _require.TestContext;\n\napp.get('/', function (req, res) {\n  var context = {};\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TestContext.Provider, {\n    value: {\n      hello: \"Server context initialize\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_3__.default, null))));\n  var clientBundleScript = \"<script src=\\\"http://localhost:8080/scripts/bundle.js\\\"></script>\";\n  var clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"http://localhost:8080/styles/bundle.css\\\">\";\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                <title>Pokedex</title>\\n                \".concat(clientBundleStyle, \" \\n            </head>\\n            <body>\\n                <div id='ssr-app'>\").concat(jsx, \"</div> \\n                \").concat(clientBundleScript, \" \\n            </body>\\n        </html>\\n    \"));\n});\napp.listen(port, function () {\n  console.log(\"App listening on http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://pokedex/./server/index.js?");

/***/ }),

/***/ "./client/components/App/style.less":
/*!******************************************!*\
  !*** ./client/components/App/style.less ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"Layout\": \"Layout_E3dA_\",\n\t\"layout\": \"Layout_E3dA_\",\n\t\"Navbar\": \"Navbar_msZRd\",\n\t\"navbar\": \"Navbar_msZRd\",\n\t\"Cards\": \"Cards_bDV1J\",\n\t\"cards\": \"Cards_bDV1J\",\n\t\"Space\": \"Space__fGL7\",\n\t\"space\": \"Space__fGL7\"\n});\n\n\n//# sourceURL=webpack://pokedex/./client/components/App/style.less?");

/***/ }),

/***/ "./client/components/Cards/style.less":
/*!********************************************!*\
  !*** ./client/components/Cards/style.less ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"Layout\": \"Layout_Ae7dK\",\n\t\"layout\": \"Layout_Ae7dK\",\n\t\"LayoutCard\": \"LayoutCard_DqE9B\",\n\t\"layoutCard\": \"LayoutCard_DqE9B\",\n\t\"ImgCnt\": \"ImgCnt_Sr3_c\",\n\t\"imgCnt\": \"ImgCnt_Sr3_c\",\n\t\"PokemonImg\": \"PokemonImg_SVZxF\",\n\t\"pokemonImg\": \"PokemonImg_SVZxF\",\n\t\"InfoCnt\": \"InfoCnt_MNWya\",\n\t\"infoCnt\": \"InfoCnt_MNWya\",\n\t\"Name\": \"Name_nhcNk\",\n\t\"name\": \"Name_nhcNk\",\n\t\"Id\": \"Id_GulPB\",\n\t\"id\": \"Id_GulPB\"\n});\n\n\n//# sourceURL=webpack://pokedex/./client/components/Cards/style.less?");

/***/ }),

/***/ "./client/components/PokemonInfo/style.less":
/*!**************************************************!*\
  !*** ./client/components/PokemonInfo/style.less ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"Layout\": \"Layout_rY0j1\",\n\t\"layout\": \"Layout_rY0j1\",\n\t\"Card\": \"Card_XI6U0\",\n\t\"card\": \"Card_XI6U0\",\n\t\"ImgCnt\": \"ImgCnt_uNQwu\",\n\t\"imgCnt\": \"ImgCnt_uNQwu\",\n\t\"InfoCnt\": \"InfoCnt_PXvlj\",\n\t\"infoCnt\": \"InfoCnt_PXvlj\",\n\t\"NameCnt\": \"NameCnt_iJLNx\",\n\t\"nameCnt\": \"NameCnt_iJLNx\",\n\t\"Link\": \"Link_MvF7q\",\n\t\"link\": \"Link_MvF7q\",\n\t\"Name\": \"Name_auDJ7\",\n\t\"name\": \"Name_auDJ7\",\n\t\"InfoInnerCnt\": \"InfoInnerCnt_G61oa\",\n\t\"infoInnerCnt\": \"InfoInnerCnt_G61oa\",\n\t\"Type\": \"Type_O_zUr\",\n\t\"type\": \"Type_O_zUr\"\n});\n\n\n//# sourceURL=webpack://pokedex/./client/components/PokemonInfo/style.less?");

/***/ }),

/***/ "./client/components/SearchBar/searchbar.less":
/*!****************************************************!*\
  !*** ./client/components/SearchBar/searchbar.less ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n});\n\n\n//# sourceURL=webpack://pokedex/./client/components/SearchBar/searchbar.less?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;