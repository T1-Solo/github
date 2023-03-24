let BASE_URL = "https://api.github.com/users/"
let form = renderElement("form")
let cards = renderElement(".cards")
let template =renderElement("template").content
let result = []



;(async function(){
    let jsons = await fetch(`${BASE_URL}, + Shohijahon Musinkulov`)
    let response =  await jsons.data
    if(response){
        result = [...result ,response]
        renders(result)
    }
}())
const renders = (arr) =>{
    cards.innerHTMl = null
    console.log(arr)
    for(let i =0 ; i<arr.length; i++){
        // let clone = template.cloneNode(true)
        // let img =clone.querySelector("img")
        // img.src = arr[i].avatar_url
        // cards.appendChild(clone)
    }
}

const handleSub = (event) => {
    event.preventDefault()
    let data  = new FormData(event.target)

}
