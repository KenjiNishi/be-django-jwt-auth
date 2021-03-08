import React from 'react';
import { withAlert, transitions, positions } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 2420,
    offset: '30px',
    transition: transitions.SCALE
}

export class Alerts extends React.Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired,
      };

    componentDidMount(){
        // this.showAlert('Hello there')
    };

    componentDidUpdate(prevProps){
        const { errors, messages, alert } = this.props;
        if (errors !== prevProps.errors) {
            alert.error(errors.message.detail);
        }
    }

    showAlert = (message) => {
        this.props.alert.show(message);
    };

    render (){
        return (
            <React.Fragment/>
    )}
}

const mapStateToProps = (state) => ({
    messages : state.messages,

    errors : state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));
