import { call, put, takeEvery } from "redux-saga/effects";
import {
  IInitialFormData,
  ProcessFile,
  ProcessFileSuccess,
  ProcessFileError
} from "../actions";
import axios from "axios";
// Watch for an upload request and then
// defer to another saga to perform the actual upload
export function* uploadRequestWatcherSaga() {
  yield takeEvery(ProcessFile, uploadFileSaga);
}
// Upload the specified file
export function* uploadFileSaga(action: { payload: IInitialFormData }) {
  const file = action.payload.file;
  const cedula = action.payload.cedula;

  try {
    const apiCall = () => {
      var formData = new FormData();

      formData.append("file", file);
      return axios
        .post(`http://localhost:8080/displacements/${cedula}`, formData)
        .then(response => response.data)
        .catch(err => {
          throw err;
        });
    };
    const response = yield call(apiCall);
    yield put(ProcessFileSuccess(cedula));
  } catch (error) {
    yield put(ProcessFileError(error));
  }
}
