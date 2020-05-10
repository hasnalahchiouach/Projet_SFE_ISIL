
const initialState = {
    parcoursUniv:[]
};

export default function(state = initialState,action){
    switch(action.type){
               
        case 'GET_PARCOURUNIV':
            return {
                ...state,
                parcoursUniv : action.payload
            }
                case 'ADD_PARCOURUNIV':
                    return {
                        ...state,
                        parcoursUniv : [action.payload, ...state.parcoursUniv]
                    }
              
                default : {
                    return state;
                    }
    }
}