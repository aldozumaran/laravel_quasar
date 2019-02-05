export const getUser = (state) => {
    return state.User
}
export const getName = (state) => {
    return state.User.first_name + ' ' + state.User.last_name
}
