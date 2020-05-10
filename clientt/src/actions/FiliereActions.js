export const getFilieres = (filieres) => {
    return {
        type : 'GET_FILIERES',
        payload : filieres
    }
}

export const addFiliere = (filiere) => {
    return {
        type : 'ADD_FILIERE',
        payload : filiere
    }
}
export const deleteFiliere = (id) => {
    return {
        type : 'DELETE_FILIERE',
        payload : id
    }
}