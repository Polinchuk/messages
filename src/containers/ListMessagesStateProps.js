import { connect } from "react-redux";
import ListMessages from './ListMessages';

function mapStateToProps(state) {
    const { message } = state;
    return { message : message };
}

export default connect(
    mapStateToProps,
    null
)(ListMessages);