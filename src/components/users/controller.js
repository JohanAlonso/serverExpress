function addUsers(params) {

    const {auth, email, password, displayName} = params;
    return auth.createUser({
        email,
        password,
        displayName
      })

}

function getUsers(params) {
    const { auth, email } = params;
    return auth.getUsersByEmail(email);
}

module.exports ={

    addUser,
    getUser

}