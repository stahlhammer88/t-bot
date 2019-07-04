import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getTweets } from './../actions/index';

const SearchBar = props => {
    const [value, setValue] = useState('');
    const [count, setCount] = useState(20);
    const pageSizes = [5,10,20,30];

    const onInputChange = e => {        
        const value = e.target.value;
        setValue(value);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        props.dispatch(getTweets(value, parseInt(count)));
    }

    const onSelectChange = e => {        
        const value = parseInt(e.target.value);
        setCount(value);
    }
    
    return (        
        <div className="search-bar">
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Enter your text here" value={value} onChange={onInputChange}/>
                <select value={count || 20} onChange={onSelectChange}>
                    {pageSizes.map((sz,i) => {
                        return <option key={i} value={sz}>{sz}</option>
                    })}
                </select>
                <input type="submit" value="Get tweets"/>                
            </form>            
        </div>
    );
};

export default connect()(SearchBar);