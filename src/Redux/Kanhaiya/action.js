export const Add_User = "ADD_USER";
export const Remove_User = "REMOVE_USER";
export const is_Login = "IS_LOGIN";

export const addUser = (payload)=>({
    type: Add_User,
    payload
})

export const islogin = (payload)=>({
    type: is_Login,
    payload
})
export const removeUser = (payload)=>({
    type: Remove_User,
    payload
})