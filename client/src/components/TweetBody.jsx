import React from 'react';
import moment from 'moment';
import Retweeted from './Retweeted';

const TweetBody = ({
                    created_at, 
                    text, 
                    retweeted_status, 
                    user: {
                        profile_image_url, 
                        name, 
                        screen_name
                    },
                    renderMedia
                }) => {

    const date = moment(new Date(created_at)).format('DD.MM.YYYY');   
    return (
        <>
            <div className="tweet__author-img">
                <img src={profile_image_url} alt=""/>
            </div>
            <div className="tweet__body">
                <div className="tweet__header">
                    <div className="tweet__name">
                        {name}
                    </div>  
                    <div className="tweet__screen-name">
                        @{screen_name}
                    </div>
                    <div className="tweet__date">
                        {date}
                    </div>
                </div>
                <div className="tweet__text">
                    {retweeted_status ? 
                        <Retweeted {...retweeted_status} renderMedia={renderMedia}/>
                        :text}
                </div>
                {(renderMedia && !retweeted_status) && renderMedia()}
            </div>
        </>
    );
};

export default TweetBody;