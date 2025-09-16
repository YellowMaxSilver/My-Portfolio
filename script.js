const apiLink = "https://knife-api-production.up.railway.app/";
const password = "SuperFacaIsAmeazing12345.";

console.log("hello")
document.addEventListener("DOMContentLoaded",()=>{
    const button = document.getElementById("actionButton");
    button.addEventListener('click',()=>{
        sendContact()
    })
})

function scrollDown(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function openPopUp(action){
    const popUp = document.querySelector(".popUp");
    const blackFilter = document.querySelector(".blackFilter"); 
    const popUpContent = document.querySelector(".popUpContent");
    popUp.style.display = "flex";
    blackFilter.style.display = "block";
    popUpContent.style.display = "block";

     const linkedinContent = document.querySelector(".linkedinContent");
     const whatsaapContent = document.querySelector(".whatsaapContent");
     const emailContent = document.querySelector(".emailContent");
     const phoneContent = document.querySelector(".phoneContent");
    switch(action){
        case "linkedin":
            linkedinContent.style.display = "block";
            whatsaapContent.style.display = "none";
            break
        case "whatsaap":
            whatsaapContent.style.display = "block";
            linkedinContent.style.display = "none";
            break;
        case "email":
            emailContent.style.display = "block";
            whatsaapContent.style.display = "none";
            linkedinContent.style.display = "none";
            break;      
        case "phone":
            phoneContent.style.display = "block";
            whatsaapContent.style.display = "none";
            linkedinContent.style.display = "none";
            break;
        default:
            linkedinContent.style.display = "none";
            whatsaapContent.style.display = "none";
            linkedinContent.style.display = "none";
            break;
    }
}

function closePopUp(){
    const popUp = document.querySelector(".popUp");
    const blackFilter = document.querySelector(".blackFilter"); 
    popUp.style.display = "none";
    blackFilter.style.display = "none";
}



async function sendContact(){
    console.log("active")
    const name = document.getElementById("contactName");
    const contact = document.getElementById("contactEmailOrNumber");
    const description = document.getElementById("contactDescription");

    try{
        const res = await fetch(apiLink+"api/eduardosodre/contact",{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${password}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:name.value,
                contact:contact.value,
                description:description.value
            })
        });
        if(res.status == 200){
            console.log("success");
        }else{
            console.log("error",await res.json());
        }
        console.log("finished",res.status);
    }catch(e){
        console.log("error: "+e);
    }
}