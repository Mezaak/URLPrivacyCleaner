const delete_button = document.getElementById("delete_button");
const result = document.getElementById("result_area");
const copy_button = document.getElementById("copy_button");
const sweep_input = document.getElementById("sweep_input");

delete_button.addEventListener("click",()=>{
    const text_input = document.getElementById("url_area");
    const text_input_value = text_input.value;
    const seperate = text_input_value.split('?');
    const clean_url = seperate[0];
    result.innerHTML = clean_url;
    console.log(clean_url);  
});

copy_button.addEventListener("click",()=>{
    const copyText = document.getElementById("result_area").innerHTML;
    navigator.clipboard.writeText(copyText);
});

sweep_input.addEventListener("click",() => {
    const text_input = document.getElementById("url_area");
    text_input.value = "";
    
})
