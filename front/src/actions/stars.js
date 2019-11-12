import axios from 'axios';

import {SET_STARS} from './action';

axios.defaults.headers.common['authorization'] = localStorage.getItem('accessToken');

export function setStars(star, _id) {
    
    return dispatch => {  
        axios.put("/set-star", {
            star:star,
            _id:_id
        })
        .then(res => {
            if(res.status === 200){
                dispatch({
                    type: SET_STARS,
                    payload: res.data
                })
            }
        })
    }
}
