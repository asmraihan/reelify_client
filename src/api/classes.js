// add a class in db

export const addClass = async classData=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`,{
        method: 'POST',
        headers:{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(classData)
    })
    const data = await response.json()
    return data
}

// get all approved class from db

export const getAllApprovedClasses = async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data
}