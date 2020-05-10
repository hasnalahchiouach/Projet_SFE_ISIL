export const getParcourUniv = (parcoursuniv) => {
    return {
        type : 'GET_PARCOURUNIV',
        payload : parcoursuniv
    }
}

export const addParcourUniv = (parcouruniv) => {
    return {
        type : 'ADD_PARCOURUNIV',
        payload : parcouruniv
    }
}