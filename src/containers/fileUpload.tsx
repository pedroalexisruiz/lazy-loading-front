import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProcessFile } from "../actions";
import { IFileUploadProps, FileUpload } from "../components/fileUpload";

function mapDispatchToProps(dispatch: any): Partial<IFileUploadProps> {
  return bindActionCreators(
    {
      onSubmit: ProcessFile
    },
    dispatch
  );
}

/**
 * Mix the actions into the component properties
 */
export default connect(null, mapDispatchToProps)(FileUpload);
