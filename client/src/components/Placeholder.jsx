import React from 'react';
import { connect } from 'react-redux';

const Placeholder = props => {
    if (props.loading) return null;
    return (
        <div className="placeholder">
            Please type something up there
        </div>
    );
};

const mapStateToProps = state => {      
    const {loading} = state;
    return {loading};
}

export default connect(mapStateToProps)(Placeholder);