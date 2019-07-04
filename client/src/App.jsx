import React from 'react';
import { connect } from 'react-redux';
import './main.scss';
import SearchBar from './components/SearchBar';
import Tweet from './components/Tweet';
import Loading from './components/Loading';
import Placeholder from './components/Placeholder';

const App = props => {
    const {tweets} = props;            
    return (
        <div className="wrapper">
            <SearchBar/>
            <Loading/>              
            { tweets ? (
                    tweets.map(t => {
                        return (
                            <Tweet key={t.id} {...t}/>
                        )
                    })
                ):
                <Placeholder/>
            }
        </div>
    );
};

const mapStateToProps = state => {      
    const {tweet, tweets} = state;
    return {tweet, tweets};
}

export default connect(mapStateToProps)(App);