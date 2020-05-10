export const getAdmins = (admins) => {
    return {
        type : 'GET_ADMINS',
        payload : admins
    }
}

export const addAdmin = (admin) => {
    return {
        type : 'ADD_ADMIN',
        payload : admin
    }
}