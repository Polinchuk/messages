const addNewMessage = (idMsg, numberMsg, dateMsg, themeMsg, groupMsg, typeMsg, textMsg, statusMsg, classStatusMsg) => ({

    type: 'ADD_MESSAGE',
    idMsg,
    numberMsg,
    dateMsg,
    themeMsg,
    groupMsg,
    typeMsg,
    textMsg,
    statusMsg,
    classStatusMsg

});

const changeStatus = (idMsg, statusMsg, classStatusMsg) => ({

    type: 'CHANGE_STATUS',
    idMsg,
    statusMsg,
    classStatusMsg

});

export { addNewMessage,  changeStatus};