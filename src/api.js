export const API_URL = 'https://api-paadupfi.onrender.com/'

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