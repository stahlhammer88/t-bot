export const Reducer = (state={}, action) => {
    const {type, payload} = action;
    switch (type) {    
        case 'LOADING':            
            return {...state, loading: true};
        case 'GET': 
            return {
                ...state, 
                tweets: payload.tweets,
                loading: false, 
                error: false, 
                errorMessage: ''
            };            
        case 'GET_TWEET':  
            const {tweets} = state;
            const tweet = tweets ? state.tweets.filter(t => t.id_str === payload.id)[0] : null;
            return {
                ...state, 
                tweet
            };    
        case 'FAILED': 
            return {
                ...state, 
                error: payload.error, 
                errorMessage: payload.errorMessage, 
                loading: false
            };
        default:
            return state;
    }
}