export const getInformations = (infos) => {
    return {
        type : 'GET_INFOS',
        payload : infos
    }
}

export const addInformation = (info) => {
    return {
        type : 'ADD_INFO',
        payload : info
    }
}