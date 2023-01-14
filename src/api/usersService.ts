import backendConnector from "./backendConnector"
import { store } from "@/store"

interface Response {
  message: string | unknown
  status: number
}

const getUsers = async (): Promise<Response> => {
  const headerOptions = {
    headers: { Authorization: `Bearer ${store.state.authToken}` },
  }
  try {
    const result = await backendConnector.get(`users`, headerOptions)
    return {
      status: result.status,
      message: result.data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    }
  }
}

const getUser = async (user: string): Promise<Response> => {
  const headerOptions = {
    headers: { Authorization: `Bearer ${store.state.authToken}` },
  }
  try {
    const result = await backendConnector.get(`users/${user}`, headerOptions)
    return {
      status: result.status,
      message: result.data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    }
  }
}

const addUser = async (user: any): Promise<Response> => {
  const headerOptions = {
    headers: { Authorization: `Bearer ${store.state.authToken}` },
  }
  try {
    const result = await backendConnector.post(`users`, { user: user }, headerOptions)
    return {
      status: result.status,
      message: result.data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    }
  }
}

const deleteUser = async (user: string): Promise<Response> => {
  const headerOptions = {
    headers: { Authorization: `Bearer ${store.state.authToken}` },
  }
  try {
    const result = await backendConnector.delete(`users/${user}`, headerOptions)
    return {
      status: result.status,
      message: result.data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    }
  }
}

export {
  getUsers,
  getUser,
  addUser,
  deleteUser
}