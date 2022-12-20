import {$authHost, $host} from "./index";

export const registration = async (email, password, name, last_name) => {
    const response = await $host.post('api/user/registration', {email, password, name, last_name, role: 'ADMIN'})
    return response
}

export const login = async (email, password, name, last_name) => {
    const response = await $host.post('api/user/login', {email, password, name, last_name})
    return response
}

export const check = async (email, password, name, last_name) => {
    const response = await $host.post('api/auth/registration', {email, password, name, last_name, role: 'ADMIN'})
    return response
}