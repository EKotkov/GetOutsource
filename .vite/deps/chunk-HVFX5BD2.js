import {
  useEventCallback
} from "./chunk-EN3SHTSE.js";
import {
  require_jsx_runtime
} from "./chunk-CVWYDCK2.js";
import {
  require_react
} from "./chunk-YLDSBLSF.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@restart/ui/esm/Anchor.js
var React2 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react = __toESM(require_react());
function useCallbackRef() {
  return (0, import_react.useState)(null);
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js
var import_react2 = __toESM(require_react());
function useEventListener(eventTarget, event, listener, capture = false) {
  const handler = useEventCallback(listener);
  (0, import_react2.useEffect)(() => {
    const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return () => target.removeEventListener(event, handler, capture);
  }, [eventTarget]);
}

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react3 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js
var import_react4 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js
var import_react5 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js
var import_react6 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react8 = __toESM(require_react());

// node_modules/@restart/ui/esm/Button.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["as", "disabled"];
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = "a";
    } else {
      tagName = "button";
    }
  }
  const meta = {
    tagName
  };
  if (tagName === "button") {
    return [{
      type: type || "button",
      disabled
    }, meta];
  }
  const handleClick = (event) => {
    if (disabled || tagName === "a" && isTrivialHref(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === "a") {
    href || (href = "#");
    if (disabled) {
      href = void 0;
    }
  }
  return [{
    role: role != null ? role : "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: disabled ? void 0 : tabIndex,
    href,
    target: tagName === "a" ? target : void 0,
    "aria-disabled": !disabled ? void 0 : disabled,
    rel: tagName === "a" ? rel : void 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
var Button = React.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return (0, import_jsx_runtime.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref
  }));
});
Button.displayName = "Button";
var Button_default = Button;

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["onKeyDown"];
function _objectWithoutPropertiesLoose2(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function isTrivialHref2(href) {
  return !href || href.trim() === "#";
}
var Anchor = React2.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded2);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref2(props.href) || props.role === "button") {
    return (0, import_jsx_runtime2.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return (0, import_jsx_runtime2.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

export {
  useButtonProps,
  Button_default,
  useCallbackRef,
  useEventListener,
  Anchor_default
};
//# sourceMappingURL=chunk-HVFX5BD2.js.map
