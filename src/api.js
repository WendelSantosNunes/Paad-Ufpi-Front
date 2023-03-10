// export const API_URL = 'https://api-paadupfi.onrender.com/'
export const API_URL = 'http://localhost:3000/'

// Nós adicionamos aqui as configurações
export function TOKEN_POST(body) {
    return{ 
        url: API_URL + 'auth/',
        options: {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(
                body
            )
        }
    }
}


export function USER_GET(token) {
    return{ 
        url: API_URL + 'auth/',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    }
}

export function PASSWORD_LOST(body) {
    return{ 
        url: API_URL + 'auth/recovery',
        options: {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(
                body
            )
        }
    }
}

export function PASSWORD_RESET(body, key) {
    return{ 
        url: API_URL + 'auth/recoverypass/' + key,
        options: {
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(
                body
            )
        }
    }
}

export function NEWS_GET() {
    return{ 
        url: API_URL + 'news/',
        options: {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
            },
        }
    }
}


export function NEWS_GET_ID(Key) {
    return{ 
        url: API_URL + 'news/' + Key,
        options: {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
            },
        }
    }
}

export function NEWS_POST(formData,token){
    return{
        url: API_URL + 'news/',
        options: {
            method: 'POST',
            headers: {
                'content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + token,
            },
            body:formData,
        }
    }
}

export function NEWS_DELETE_ID(key,token){
    return{
        url: API_URL + 'news/' + key,
        options: {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
                'content-Type': 'application/json',
            },
        }
    }
}

export function NEWS_UPDATE_ID(key,token){
    return{
        url: API_URL + 'news/' + key,
        options: {
            method: 'UPDATE',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(
                body
            )
        }
    }
}