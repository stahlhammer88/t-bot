import React from 'react';
import {withRouter} from 'react-router-dom';
import TweetBody from './TweetBody';

const Tweet = props => {

    const onTweetClick = () => {
        props.history.push(`/tweet/${props.id_str}`);
    }

    return (        
        <div className="tweet" onClick={onTweetClick}>
            <TweetBody {...props}/>                  
        </div>        
    );
};

export default withRouter(Tweet);