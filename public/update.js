let button  = document.getElementById("generate_button")
let text  = document.getElementById("reponse_text")
let texthidden = document.getElementById("text_hidden")  

button.addEventListener("click",function(){
    
    axios.get("/generate").then(function(response){

        var result = ""
        for (var item of response.data) {
            result += item + " "
        }
        console.log(result)
        texthidden.style.visibility = "visible"       
        text.innerText = result

    })   


})