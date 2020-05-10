
const initialState = {
    annonces: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case 'GET_ANNONCES':
            return {
                ...state,
                annonces: action.payload
            }
        case 'ADD_ANNONCE':
            return {
                ...state,
                annonces: [action.payload, ...state.annonces]
            }
        case 'DELETE_ANNONCE':
            return {
                ...state,
                annonces: state.annonces.filter(annonce => annonce.ID_Annonce !== action.payload)
            }
        case 'UPDATE_ANNONCE':
            return {
                ...state,
                annonces: state.annonces.map(annonce => annonce.ID_Annonce !== action.payload.ID_Annonce ? annonce : action.payload)
            }
        default: {
            return state;
        }
    }
}