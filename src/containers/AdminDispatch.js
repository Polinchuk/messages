import { connect } from "react-redux";
import { addNewMessage } from '../action';
import CreateMessage from './CreateMessage';

 function mapDispatchToProps(dispatch) {
     return {
        addNewMessage: () => dispatch(addNewMessage())
      }
}

export default connect(mapDispatchToProps)(CreateMessage);