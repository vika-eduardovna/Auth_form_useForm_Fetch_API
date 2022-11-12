
export const fetching_data = async (body, callback, err_callback) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    response.status === 200 ? callback(data) : err_callback(data);

}


export const createCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
}


