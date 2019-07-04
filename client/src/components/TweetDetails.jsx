import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getTweetDetails } from '../actions';
import {Link} from 'react-router-dom';
import TweetBody from './TweetBody';

const TweetDetails = props => {    
    const id = props.match.params.id;
    
    useEffect(() => {  
        if (!props.tweets)
            props.history.push('/');
        else    
            props.dispatch(getTweetDetails(id));

        return () => {
            props.dispatch(getTweetDetails(null))
        }
    }, []);    

    const {tweet} = props;
    if (!tweet) return null;   

    const {entities: {hashtags}, extended_entities, retweet_count, favorite_count} = tweet;

    const renderMedia = () => {
        if (extended_entities && extended_entities.media)
            return (
                <div className="tweet__media">
                    {extended_entities.media.map((t,i) => (                                
                        <div 
                            key={i} 
                            className="tweet__media-img" 
                            style={{backgroundImage: `url(${t.media_url})`}}>
                        </div>
                    ))}
                </div>
            )
    }
    
    return (
        <div className="wrapper">
            <Link to="/" className="go-back">Back</Link>
            <div className="tweet tweet--details">
                <TweetBody {...tweet} renderMedia={renderMedia}/>
                <div className="tweet__hash">
                    {hashtags.map((h,i) =>{
                        return <span key={i}>#{h.text}</span>
                    })}
                </div>                
                <div className="tweet__footer">
                    <div className="tweet__likes">Likes: {favorite_count}</div>
                    <div className="tweet__retweets">Retweeted: {retweet_count}</div>
                </div>                
            </div>
        </div>
    );
};

const mapStateToProps = state => {      
    const {tweet, tweets} = state;
    return {tweet, tweets};
}

export default connect(mapStateToProps)(withRouter(TweetDetails));