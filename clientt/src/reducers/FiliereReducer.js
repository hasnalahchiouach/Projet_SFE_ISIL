
const initialState = {
    filieres:[]
};

export default function(state = initialState,action){
    switch(action.type){
               
        case 'GET_FILIERES':
            return {
                ...state,
                filieres : action.payload
            }
                case 'ADD_FILIERE':
                    return {
                        ...state,
                        filieres : [action.payload, ...state.filieres]
                    }
                    case 'DELETE_FILIERE':
                        return {
                            ...state,
                            filieres: state.filieres.filter(filiere => filiere.ID_Filiere !== action.payload)
                        }
              
                default : {
                    return state;
                    }
    }
}