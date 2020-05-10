export const getParcourBac = (parcoursbac) => {
    return {
        type : 'GET_PARCOURBAC',
        payload : parcoursbac
    }
}

export const addParcourBac = (parcourbac) => {
    return {
        type : 'ADD_PARCOURBAC',
        payload : parcourbac
    }
}