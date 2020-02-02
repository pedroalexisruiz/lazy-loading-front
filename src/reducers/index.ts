import { Reducer } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../actions";
import { defaultState, IState } from "../state";

export const lazyLoading: Reducer<IState> = createReducer(defaultState, {
  [Actions.ProcessFileSuccess.type]: processFileSuccess
});

function processFileSuccess(state: IState, action: Actions.IInitialFormData) {
  console.log(action.cedula);
  state.cedula = action.cedula;
}
