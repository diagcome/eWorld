import axios from 'axios';

const updateAccessTokenHelper = (href) => {
    const refreshTokeninLocalStorage = localStorage.getItem('refreshToken');

    axios.post("/authentication/refresh-token", {
        headers:{
            'Authorization': 'Bearer ' + refreshTokeninLocalStorage,
        }
    })
    .then((res) => {
        if(res.status = 200){
            localStorage.setItem("accessToken", res.data.newTokensData.accessToken);
            localStorage.setItem("refreshToken", res.data.newTokensData.refreshToken);
            localStorage.setItem("expires_in", res.data.newTokensData.expires_in);

        } else if(res.status != 200){
            console.log("Can't refresh token: ", res.data.message);
        }
    })
    .then(() =>{
        window.location.href = href;
    })
    .catch((error) => {
        console.log("can refresh token: ", error.message); 
    })
    return;
}

export default updateAccessTokenHelper;
