import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

const Loading = props => {
    if (!props.loading) return null;
    return (
        <div className="loading">
            <ReactLoading type="spin" color="#e4e4e2" width="60px" height="60px"/>
        </div>        
    );
};

const mapStateToProps = state => {      
    const {loading} = state;
    return {loading};
}

export default connect(mapStateToProps)(Loading);