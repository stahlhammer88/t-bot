import React from 'react';

const Retweeted = ({text, user: {name, screen_name, renderMedia}}) => {
    return (
        <div className="retweeted">            
            <div className="retweeted__name">{name}</div>
            <div className="retweeted__screen-name">@{screen_name}</div>
            <div className="retweeted__text">{text}</div>
            {renderMedia && renderMedia()}
        </div>
    );
};

export default Retweeted;