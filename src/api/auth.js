
// save user to db
export const saveUser = (user) => {
    const currentUser = {

            email: user.email,
            name: user.displayName,
            photo: user.photoURL
            
        // more user details goes here
        // ===========================

    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// get user role
export const getRole = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json()
    console.log(user)
    return user?.role || 'user'
}

// get all instructors by role
// export const getAllInstructors = async () => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/instructors`)
//     const instructors = await response.json()
//     console.log(instructors)
//     return instructors
// }
