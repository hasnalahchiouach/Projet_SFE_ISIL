
const initialState = {
    infos:[]
};

export default function(state = initialState,action){
    switch(action.type){
               
        case 'GET_INFOS':
            return {
                ...state,
                infos : action.payload
            }
                case 'ADD_INFO':
                    return {
                        ...state,
                        infos : [action.payload, ...state.infos]
                    }
              
                default : {
                    return state;
                    }
    }
}