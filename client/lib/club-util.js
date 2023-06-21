

export async function getAllClubs(){
    console.log("Hello world!");
    const response = await fetch("/api/bookclubs")
    console.log(response)
    .then(data=>{
        if(!data.ok){
            throw new Error('Failed to fetch clubs')
        }
        console.log(data.json())
        return data.json()
        
    })
    return await response
}