const message = (state = [], action) => {

    switch (action.type) {
       
        case 'ADD_MESSAGE' :
            return [
                ...state,
                {
                    id: action.idMsg,
                    number: action.numberMsg,
                    date: action.dateMsg,
                    theme: action.themeMsg,
                    region: "",
                    group: action.groupMsg,
                    type: action.typeMsg,
                    description : action.textMsg,
                    status: action.statusMsg,
                    classStatus: action.classStatusMsg
                }
            ]
        case 'CHANGE_STATUS':
            const newState = Object.assign([], state);
            newState[action.idMsg].status = action.statusMsg;
            newState[action.idMsg].classStatus = action.classStatusMsg;
            return newState;

            default:
                return state;       
    }
    
}

export default message;