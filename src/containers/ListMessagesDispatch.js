import { connect } from "react-redux";
import { changeStatus } from '../action/';
import Admin from '../containers/Admin';

 function mapDispatchToProps(dispatch) {
     return {
        changeStatus: () => dispatch(changeStatus())
      }
}

export default connect(mapDispatchToProps)(Admin);