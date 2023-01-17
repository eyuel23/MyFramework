import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

// initial state of the User component
const initialState = { firstName: "Marvin", lastName: "Frachet" };

// state mutating actions
const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
};

// component template
const template = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;

// create a real world component
export const User = createComponent({ template, methods, initialState });
