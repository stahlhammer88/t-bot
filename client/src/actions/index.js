import { getData } from './../service';

export function getTweets(q, count) {        
    return dispatch => {                
        dispatch({type: 'LOADING', loading: true});
        return getData(q, count).then(res => {
            dispatch({
                type: 'GET', 
                payload: {
                    tweets: res,                    
                }, 
                loading: false
            })
        })
        .catch(error => dispatch({type: 'FAILED', payload:{ error: true, errorMessage: `${error}`}}))
    }
}

export function getTweetDetails(id) {        
    return dispatch => {                
        dispatch({type: 'GET_TWEET', payload: {id}});
    }
}