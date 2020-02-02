import { createAction, ActionCreatorWithPayload } from "@reduxjs/toolkit";

/**
 * Initializing actions
 */
export const ProcessFile: ActionCreatorWithPayload<
  IInitialFormData,
  string
> = createAction<IInitialFormData>("[Lazy loading] Process File");

export const ProcessFileSuccess: ActionCreatorWithPayload<
  string,
  string
> = createAction<string>("[Lazy loading] Process File success");

export const ProcessFileError: ActionCreatorWithPayload<
  string,
  string
> = createAction<string>("[Lazy loading] Process File error");

export interface IInitialFormData {
  cedula: string;
  file: any;
}
