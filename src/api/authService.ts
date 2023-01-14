import backendConnector from "./backendConnector"

interface Response {
    message: string | unknown
    status: number
}

const login = async (email: string, password: string): Promise<Response> => {
    try {
        
        const result = await backendConnector.post("auth/login", {
            email: email,
            password: password,
        })
        return {
            status: result.status,
            message: result.data.access_token,
        }
    } catch (error) {
        return {
            status: 500,
            message: error,
        }
    }
}

const register = async (email: string, password: string, last_name: string, first_name: string): Promise<Response> => {
    try {
        const result = await backendConnector.post("auth/register", {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name
          })
        return {
            status: result.status,
            message: result.data.access_token,
        }
    } catch (error) {
        return {
            status: 500,
            message: error,
        }
    }
}

export {
    login,
    register
}