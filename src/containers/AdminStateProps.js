import { connect } from "react-redux";
import Admin from './Admin';

function mapStateToProps(state) {
    const { message } = state;
    return { message : message };
}

export default connect(
    mapStateToProps,
    null
)(Admin);