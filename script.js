const apiLink = "https://knife-api-production.up.railway.app/";
const password = "SuperFacaIsAmeazing12345.";

console.log("hello")
document.addEventListener("DOMContentLoaded",()=>{
    const button = document.getElementById("actionButton");
    button.addEventListener('click',()=>{
        sendContact()
    })
})

function scrollDown(section){
    let topValue = 0;
    switch(section){
        case "aboutMe":
            topValue = 600;
            break;
        case "services":
            topValue = 1100;
            break;
        case "projects":
            topValue = 1700;
            break;
        case "lenguages":
            topValue = 2300;
            break;
        case "contact":
            topValue = 3100;
            break;
    }
    window.scrollTo({
        top: topValue,
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

function openLanguageOptions(){
    const languageOptions = document.querySelector(".languageOptions");
    languageOptions.style.display = "block";
    
    document.addEventListener('click',function handleClickOutsideBox(event) {
        const box = document.querySelector(".navBar");
        if (!box.contains(event.target)) {
            languageOptions.style.display = "none";
            document.removeEventListener('click', handleClickOutsideBox);
        }   
    });
}

function turnLanguage(language){
    console.log(language);
    const lenguageMode = document.getElementById("lenguageMode");
    const languageOptions = document.querySelector(".languageOptions");
    languageOptions.style.display = "none";

    const welcome = document.getElementById("welcome");
    const hello = document.getElementById("hello");
    const fullStrackText = document.getElementById("fullStrackText");
    const aboutMe = document.getElementById("aboutMe");
    const services = document.getElementById("services");
    const languages = document.getElementById("languages");
    const contact = document.getElementById("contact");
    const actionButton = document.getElementById("actionButton");

    switch(language){
        case "english":
            welcome.innerText = "Welcome";
            hello.innerText = "Hi, I'm Eduardo Sodré";
            fullStrackText.innerText = "Full-strack Developer and Designer";
            aboutMe.innerText = "About me";
            services.innerText = "Services";
            languages.innerText = "Languages";
            contact.innerText = "Contact";
            actionButton.innerText = "Send";

            lenguageMode.innerText = "English(en)";
            break;
        case "spanish":
            welcome.innerText = "Bienvenido";
            hello.innerText = "Hola, soy Eduardo Sodré";
            fullStrackText.innerText = "Desarrollador Full-strack y Diseñador";
            aboutMe.innerText = "Sobre mí";
            services.innerText = "Servicios";
            languages.innerText = "Lenguajes";
            contact.innerText = "Contacto";
            actionButton.innerText = "Enviar";

            lenguageMode.innerText = "Español(es)";
            break;
        default:
            welcome.innerText = "Bem-Vindo";
            hello.innerText = "Olá, eu sou Eduardo Sodré";
            fullStrackText.innerText = "Desenvolvedor Full-strack e Designer";
            aboutMe.innerText = "Sobre mim";
            services.innerText = "Serviços";
            languages.innerText = "Linguagens";
            contact.innerText = "Contato";
            actionButton.innerText = "Enviar";

            lenguageMode.innerText = "Portugês(br)";
            break;
    }
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