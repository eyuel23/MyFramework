import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default,
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};

// Add the line concerning methods and initialState
export const createComponent = ({
  template,
  methods = {},
  initialState = {},
}) => (props) => template(props);
