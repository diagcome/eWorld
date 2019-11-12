const checkAccessExpHelper = () => {
   
    const dataNow =  Math.floor(Date.now() / 1000)
    const expTime = localStorage.getItem('expires_in');

    return (expTime === null || !expTime)?false:dataNow >= expTime;
}

export default checkAccessExpHelper;