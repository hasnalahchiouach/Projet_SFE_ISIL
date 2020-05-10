
const initialState = {
    parcoursBac:[]
};

export default function(state = initialState,action){
    switch(action.type){
               
        case 'GET_PARCOURBAC':
            return {
                ...state,
                parcoursBac : action.payload
            }
                case 'ADD_PARCOURBAC':
                    return {
                        ...state,
                        parcoursBac : [action.payload, ...state.parcoursBac]
                    }
              
                default : {
                    return state;
                    }
    }
}