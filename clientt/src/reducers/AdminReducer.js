
const initialState = {
    admins:[]
};

export default function(state = initialState,action){
    switch(action.type){
               
        case 'GET_ADMINS':
            return {
                ...state,
                admins : action.payload
            }
                case 'ADD_ADMIN':
                    return {
                        ...state,
                        admins : [action.payload, ...state.admins]
                    }
              
                default : {
                    return state;
                    }
    }
}