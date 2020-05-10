export const getCandidats = (candidats) => {
    return {
        type : 'GET_CANDIDATS',
        payload : candidats
    }
}

export const addCandidat = (candidat) => {
    return {
        type : 'ADD_CANDIDAT',
        payload : candidat
    }
}