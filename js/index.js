const fn = () => {
    const options = document.getElementById("options");
    $(options).bind('click', (event) => {
        const target = event.target;
        const text = target.text();
    });
    
    const slotSelected = (slotName) => {
        switch (slotName) {
            case "Events" : window.location.href = "index.html";
                            break;
            case "Academy" : window.location.href = "academy.html";
                            break;
            case "Contact" : window.location.href = "contact.html";
                            break;
        }    
    }

    const icon = document.getElementById("icon");
    if (icon) {
        icon.style.cursor = "pointer";
        icon.onclick = () => {
            window.location.href = "index.html"
        }
    }

    const feesOption = document.getElementById("fees_option");
    if (feesOption) {
        let selected = "regular";
        fees_option.onclick = (event) => {
            const target = event.target;
            target.classList.remove("coaching");
            target.classList.add("regular");
            let details;
            let hideDetails;
            if (target.getAttribute("id") === "regularCamp") {
                details = document.getElementById("regularDetails");
                hideDetails = document.getElementById("oneToOneDetails");

                target.nextElementSibling.classList.add("coaching");
                target.nextElementSibling.classList.remove("regular");
            } else {
                details = document.getElementById("oneToOneDetails");
                hideDetails = document.getElementById("regularDetails");
                
                target.previousElementSibling.classList.add("coaching");
                target.previousElementSibling.classList.remove("regular");
            }

            details.classList.add("showDetails");
            details.classList.remove("hideDetails");

            hideDetails.classList.remove("showDetails");
            hideDetails.classList.add("hideDetails");
        }   
    }
}

function academyClick() {
    window.location.href = "academy.html";
}

function contactClick() {
    window.location.href = "contact.html";
}

$(document).ready(function() {
    fn();
 });