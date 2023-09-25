export const API = 'https://api.punkapi.com/v2/beers';

export const fetchAPI =  (API, setData)=> {

    fetch(API)
        .then(response => {
            return response.json()
        })

        .then(data=>{
            return setData(data)
        })
        
        .catch(()=>{
            return [{name: "error"}]
        })

}