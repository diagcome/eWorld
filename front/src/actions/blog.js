import axios from 'axios';

import { FETCH_BLOG_FAILURE, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS,FETCH_BLOG_DETAILS_REQUEST,
    FETCH_BLOG_DETAILS_SUCCESS, FETCH_BLOG_DETAILS_FAILURE} from './action';

export const getBlog = () => dispatch => {
    dispatch({
        type: FETCH_BLOG_REQUEST,
    });

    axios.get("/articles/get").then(response => {

        dispatch({
            type: FETCH_BLOG_SUCCESS,
            payload: response.data.articles
    });

    })
    .catch((err) => {
        dispatch({
            type: FETCH_BLOG_FAILURE,
            payload: "NO DATA FROM SERVER"
        });
    })
};
export const getBlogArticle = (id) => dispatch => {
    dispatch({
        type: FETCH_BLOG_DETAILS_REQUEST,
    });

    axios.get(`/articles/get/${id}`).then(response => {

        dispatch({
            type: FETCH_BLOG_DETAILS_SUCCESS,
            payload: response.data.article
        });

    })
        .catch((err) => {
            dispatch({
                type: FETCH_BLOG_DETAILS_FAILURE,
                payload: "NO DATA FROM SERVER"
            });
        })
}