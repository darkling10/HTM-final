export const BaseUrl ="https://htm-project.herokuapp.com"

export const config = (token)=>{
   return {
        headers: { 'x-access-token': `Bearer ${token}` }
    }
}