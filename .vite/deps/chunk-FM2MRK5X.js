import {
  canUseDOM_default
} from "./chunk-5LHJ7AZA.js";
import {
  require_react
} from "./chunk-YLDSBLSF.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react.useLayoutEffect : import_react.useEffect;

// node_modules/@restart/ui/esm/useWindow.js
var import_react2 = __toESM(require_react());
var Context = (0, import_react2.createContext)(canUseDOM_default ? window : void 0);
var WindowProvider = Context.Provider;
function useWindow() {
  return (0, import_react2.useContext)(Context);
}

// node_modules/dom-helpers/esm/contains.js
function contains(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

export {
  useIsomorphicEffect_default,
  contains,
  useWindow
};
//# sourceMappingURL=chunk-FM2MRK5X.js.map
