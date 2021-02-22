export async function getAllData(url){
    return new Promise((resolve, reject) => {
        fetch (url)
        .then (res =>res.json())
        .then (data=> {
            resolve(data)
        })
    })
}


export function getPerson(url) {
    return new Promise((resolve, reject) => {
        fetch (url)
        .then (res =>res.json())
        .then (data=> {
            resolve(data)
        })
    })
  }