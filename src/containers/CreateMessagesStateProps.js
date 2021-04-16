import { connect } from "react-redux";
import CreateMessage from './CreateMessage';

function mapStateToProps(state) {
    const { message } = state;
    return { message : message };
}

export default connect(
    mapStateToProps,
    null
)(CreateMessage);