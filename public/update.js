let button_generate  = document.getElementById("generate_button")
let text  = document.getElementById("reponse_text")
let texthidden = document.getElementById("text_hidden")  

button_generate.addEventListener("click",function(){
    
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

let button_copy  = document.getElementById("copy_button")

button_copy.addEventListener("click",function(){

 
        const el = document.createElement('textarea');
        el.value = texthidden.innerText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
  



})