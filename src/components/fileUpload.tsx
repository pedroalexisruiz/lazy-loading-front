import React, { useState, FormEvent } from "react";
import { findDOMNode } from "react-dom";

export const FileUpload = (props: IFileUploadProps): JSX.Element => {
  const [valid, setValid] = useState(false);
  let refInputFile: any;
  let refInputCedula: any;

  const onFileChange = (e: any) => {
    if (e.target.files[0]) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myFile = (findDOMNode(refInputFile) as any).files[0];
    const cedula = refInputCedula.value;
    props.onSubmit && props.onSubmit({ cedula, file: myFile });
  };
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <form className="add-product" onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            ref={ref => (refInputCedula = ref)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            ref={ref => (refInputFile = ref)}
            onChange={onFileChange}
            className="form-control"
          />
        </div>
        <button type="submit" disabled={!valid} className="btn btn-success">
          Cargar
        </button>
      </form>
    </div>
  );
};

export interface IFileUploadProps {
  onSubmit?: (...args: any) => void;
}
