"use client";
import {
  require_classnames
} from "./chunk-4AAW2YZX.js";
import {
  useBootstrapPrefix
} from "./chunk-V3ZNFYFA.js";
import {
  require_jsx_runtime
} from "./chunk-CVWYDCK2.js";
import {
  require_react
} from "./chunk-YLDSBLSF.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/react-bootstrap/esm/CardGroup.js
var React = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var CardGroup = React.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-group");
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    className: (0, import_classnames.default)(className, bsPrefix),
    ...props
  });
});
CardGroup.displayName = "CardGroup";
var CardGroup_default = CardGroup;
export {
  CardGroup_default as default
};
//# sourceMappingURL=react-bootstrap_CardGroup.js.map
