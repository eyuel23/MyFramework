import { h } from "snabbdom/h";

// extract initial value with a template key, some other will appear next ;)
const initialState = {
  template: "",
};

// extract this outside the createElement function
const createReducer = (args) => (acc, currentString, index) => ({
  ...acc,
  template: acc.template + currentString + (args[index] || ""),
});

const createElement = (tagName) => (strings, ...args) => {
  const { template } = strings.reduce(createReducer(args), initialState);

  return {
    type: "element",
    template: h(tagName, {}, template),
  };
};

export const div = createElement("div");
export const p = createElement("p");
