import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
};

const initialState = { firstName: "eyuel", lastName: "muler" };

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("mulugeta")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
