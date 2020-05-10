
const initialState = {
    candidats:[]
};

export default function(state = initialState,action){
    switch(action.type){
               
        case 'GET_CANDIDATS':
            return {
                ...state,
                candidats : action.payload
            }
                case 'ADD_CANDIDAT':
                    return {
                        ...state,
                        candidats : [action.payload, ...state.candidats]
                    }
              
                default : {
                    return state;
                    }
    }
}