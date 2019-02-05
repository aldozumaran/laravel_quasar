export const setUser = (state, user) => {
    state.User = user
    state.loggedIn = true
}
export const setName = (state, name) => {
    state.User.first_name = name
}
