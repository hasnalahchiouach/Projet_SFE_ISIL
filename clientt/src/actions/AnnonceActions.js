export const getAnnonces = (annonces) => {
    return {
        type : 'GET_ANNONCES',
        payload : annonces
    }
}

export const addAnnonce = (annonce) => {
    return {
        type : 'ADD_ANNONCE',
        payload : annonce
    }
}
export const deleteAnnonce = (id) => {
    return {
        type : 'DELETE_ANNONCE',
        payload : id
    }
}
export const editAnnonce = (annonce) => {
    return {
        type : 'UPDATE_ANNONCE',
        payload : annonce
    }
}
