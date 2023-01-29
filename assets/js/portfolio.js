// ----------------------------------------------------------------------------------------------------
// About Me
// ----------------------------------------------------------------------------------------------------
// Add About Me.
function addAboutme(json){
    console.log(json.aboutme);
    //Get Section by ID
    let tempSection = document.getElementById("about");

    //2 subsection
    let tempElement, section1, section2;
    
    //section 1: pic
    section1 = document.createElement("div");
    section1.className = "col-lg-3 col-md-4 col-sm-6 col-7 py-2 px-4";
    
    tempElement = document.createElement("img");
    tempElement.className = "rounded-pill img-fluid w-100";
    tempElement.setAttribute("src", json.aboutme.image);
    tempElement.setAttribute("alt", "Wee Hong");
    section1.appendChild(tempElement);
    
    //section 2: About Me
    section2 = document.createElement("div");
    section2.className = "col-lg-6 col-md-7 col-sm-10 py-2 px-4";

    //Greeting
    tempElement = document.createElement("h1");
    tempElement.innerHTML = `Hi. I'm <strong>${ json.aboutme.fname } ${ json.aboutme.lname }</strong>.`;
    section2.appendChild(tempElement);

    //Title
    tempElement = document.createElement("h5");
    tempElement.innerHTML = `${ json.aboutme.title }`;
    section2.appendChild(tempElement);

    //Summary
    tempElement = document.createElement("p");
    tempElement.innerHTML = `${ json.aboutme.summary }`;
    section2.appendChild(tempElement);

    //Add section1 & section2 to main section (About)
    tempSection.appendChild(section1);
    tempSection.appendChild(section2);

    return;

}

// Fetch Contact Content.
fetch("./assets/js/info/aboutme.json")
    .then(response => response. json())
    .then(addAboutme);

// ----------------------------------------------------------------------------------------------------
// Project
// ----------------------------------------------------------------------------------------------------
// Add Project Content.
function addProject(json) {
    let tempSection = document.getElementById("project");

    // 2 subsections.
    let tempElement1, tempElement2, tempElement3, tempElement4, section1, section2, tempSubElement;

    //Section 1: Section Name
    section1 = document.createElement("div");
    section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";
    
    tempElement = document.createElement("h2");
    tempElement.textContent = "Project:";
    section1.appendChild(tempElement);

    // Add Section 1 to main section.
    tempSection.appendChild(section1);

    // ----------------------------------------------------------------------------------------------------
    // List of Project
    

    json.project.forEach((item, index)=>{
        
        //outer div
        //add to main section (project)
        section2 = document.createElement("div");
        section2.className = "col-md-4 col-sm-6 p-1 d-flex align-items-stretch";
        tempSection.appendChild(section2);
        //inner div (wrap carousel & card body)
        tempSubElement = document.createElement("div");
        tempSubElement.className = "card shadow-sm text-center w-100";
        section2.appendChild(tempSubElement);
        //Carousel
        tempElement1 = document.createElement("div");
        tempElement1.className = "carousel slide";
        tempElement1.id = `corousel-${ index }`;
        tempElement1.setAttribute("data-bs-ride", "false");
        tempSubElement.appendChild(tempElement1);

        //Carousel indicator
        tempElement2 = document.createElement("div");
        tempElement2.className = "carousel-indicators";
        tempElement1.appendChild(tempElement2);

        //Carousel inner
        tempElement4 = document.createElement("div");
        tempElement4.className = "carousel-inner";
        tempElement1.appendChild(tempElement4);
        item.image.forEach((img, i)=>{
            //Carousel indicator - button
            tempElement3 = document.createElement("button");
            tempElement3.setAttribute("type", "button");
            tempElement3.setAttribute("data-bs-target", `#corousel-${ index }`);
            tempElement3.setAttribute("data-bs-slide-to", `${ i }`);
            tempElement3.setAttribute("aria-label", `Slide ${ i+1 }`);
            if(i == 0){
                tempElement3.setAttribute("aria-current", "true");
                tempElement3.className = "active";   
            }

            tempElement2.appendChild(tempElement3);

            //Carousel inner - Carousel item
            let tempItem1, tempItem2, tempItem3
            tempItem1 = document.createElement("div");
            tempItem1.className = "carousel-item";
            if(i === 0){
                tempItem1.classList.add("active");
            }
            tempElement4.appendChild(tempItem1);

            //Carousel inner - Carousel item - img
            tempItem2 = document.createElement("img");
            tempItem2.className = "d-block w-100 img-thumbnail";
            tempItem2.setAttribute("src", img.src);
            tempItem2.setAttribute("alt", `img-${index}-${i}`);
            tempItem1.appendChild(tempItem2);

            //Carousel inner - Carousel item - Carousel caption
            tempItem2 = document.createElement("div");
            tempItem2.className = "carousel-caption d-none d-md-block";
            tempItem1.appendChild(tempItem2);

            //Carousel inner - Carousel item - Carousel caption - subject
            tempItem3 = document.createElement("h5");
            tempItem3.innerHTML = `${ img.subject }`;
            tempItem2.appendChild(tempItem3);

            //Carousel inner - Carousel item - Carousel caption - description
            tempItem3 = document.createElement("p");
            tempItem3.innerHTML = `${ img.description }`;
            tempItem2.appendChild(tempItem3);
            

        });
        
        //Carousel - button (prev)
        tempElement2 = document.createElement("button");
        tempElement2.className = "carousel-control-prev";
        tempElement2.setAttribute("type","button");
        tempElement2.setAttribute("data-bs-target", `#corousel-${ index }`);
        tempElement2.setAttribute("data-bs-slide", "prev");
        tempElement1.appendChild(tempElement2);

        //Carousel - button (prev) - icon
        tempElement3 = document.createElement("span");
        tempElement3.className = "carousel-control-prev-icon";
        tempElement3.setAttribute("aria-hidden", "true");
        tempElement2.appendChild(tempElement3);

        //Carousel - button (prev) - hidden-text
        tempElement3 = document.createElement("span");
        tempElement3.className = "visually-hidden";
        tempElement3.innerText = "Previous";
        tempElement2.appendChild(tempElement3);

        //Carousel - button (next)
        tempElement2 = document.createElement("button");
        tempElement2.className = "carousel-control-next";
        tempElement2.setAttribute("type","button");
        tempElement2.setAttribute("data-bs-target", `#corousel-${ index }`);
        tempElement2.setAttribute("data-bs-slide", "next");
        tempElement1.appendChild(tempElement2);

        //Carousel - button (next) - icon
        tempElement3 = document.createElement("span");
        tempElement3.className = "carousel-control-next-icon";
        tempElement3.setAttribute("aria-hidden", "true");
        tempElement2.appendChild(tempElement3);

        //Carousel - button (next) - hidden-text
        tempElement3 = document.createElement("span");
        tempElement3.className = "visually-hidden";
        tempElement3.innerText = "Next";
        tempElement2.appendChild(tempElement3);

        // --------------------------------------------
        //Card body
        //main card body
        tempElement1 = document.createElement("div");
        tempElement1.className = "card-body";
        tempSubElement.appendChild(tempElement1);

        //Card body - title
        tempElement2 = document.createElement("h5");
        tempElement2.className = "card-title d-flex justify-content-center";
        tempElement2.innerHTML = `${ item.title }`;
        tempElement1.appendChild(tempElement2);

        //Card body - Collapse (button)
        tempElement2 = document.createElement("div");
        tempElement2.className = "d-flex justify-content-center";
        tempElement1.appendChild(tempElement2);
        
        //Card body - Collapse (button) - a
        tempElement3 = document.createElement("a");
        tempElement3.className = "btn btn-primary w-100";
        tempElement3.innerText = "Description";
        tempElement3.setAttribute("data-bs-toggle", "collapse");
        tempElement3.setAttribute("href", `#collapse-${index}`);
        tempElement3.setAttribute("role", "button");
        tempElement3.setAttribute("aria-expanded", "false");
        tempElement3.setAttribute("aria-controls", `#collapse-${index}`);
        tempElement2.appendChild(tempElement3);

        //Card body - Collapse (button) - a - i
        tempElement4 = document.createElement("i");
        tempElement4.className = "fa-sharp fa-solid fa-caret-down px-1";
        tempElement3.appendChild(tempElement4);

        //Card body - Collapse (Text)
        tempElement2 = document.createElement("div");
        tempElement2.className = "collapse";
        tempElement2.id = `collapse-${index}`;
        tempElement1.appendChild(tempElement2);

        //Card body - Collapse (Text) - card body
        tempElement3 = document.createElement("div");
        tempElement3.className = "card card-body";
        tempElement2.appendChild(tempElement3);

        //Card body - Collapse (Text) - project date
        tempElement4 = document.createElement("p");
        tempElement4.className = "date-text";
        tempElement4.innerHTML = `${ item.sdate } - ${ item.edate }`;
        tempElement3.appendChild(tempElement4);

        //Card body - Collapse (Text) - project description
        tempElement4 = document.createElement("p");
        tempElement4.innerHTML = item.description;
        tempElement3.appendChild(tempElement4);

        //Card body - Collapse (Text) - project module
        tempElement4 = document.createElement("p");
        tempElement4.innerHTML = "The module I worked on:";
        tempElement3.appendChild(tempElement4);

        //Card body - Collapse (Text) - project responsible
        tempElement4 = document.createElement("p");
        tempElement4.textContent = item.responsible;
        tempElement3.appendChild(tempElement4);


    });

    return;
}

// Fetch Project Content.
fetch("./assets/js/info/project.json")
    .then(response => response.json())
    .then(addProject);

// ----------------------------------------------------------------------------------------------------
// Contact
// ----------------------------------------------------------------------------------------------------
// Add Contact Content.
function addContact(json) {
    // Get Section by ID.
    let tempSection = document.getElementById("contact");

    // 2 subsections.
    let tempElement, section1, section2;

    // ----------------------------------------------------------------------------------------------------
    // Section 1: Title.
    section1 = document.createElement("div");
    section1.className = "col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4";
    
    tempElement = document.createElement("h2");
    tempElement.textContent = "Contact:";
    section1.appendChild(tempElement);

    // Add Section 1 to main section.
    tempSection.appendChild(section1);

    // ----------------------------------------------------------------------------------------------------
    // Section 2: List of Contact.
    section2 = document.createElement("div");
    section2.className = "col-lg-9 col-md-11 col-sm-10 col-8 py-1 px-2 d-flex flex-wrap flex-sm-row flex-column justify-content-between";
    // Add Section 2 to main section.
    tempSection.appendChild(section2);

    // Extra Elements.
    let tempDiv;
    
    // Repeat Card Creation.
    json.contact.forEach((item) => {
        // Div for contact.
        tempDiv = document.createElement("div");
        tempDiv.className = "px-1 py-1 d-flex justify-content-sm-center align-items-center";
        section2.appendChild(tempDiv);

        // Icon.
        tempElement = document.createElement("i");
        tempElement.className = `${item.icon} p-2 bg-info rounded-circle mx-1`;
        tempDiv.appendChild(tempElement);

        // Detail with link.
        tempElement = document.createElement("a");
        tempElement.className = "text-decoration-none mx-1";
        tempElement.setAttribute("href", item.externalLink);
        tempElement.setAttribute("target", "_blank");
        tempElement.textContent = item.detail;
        tempDiv.appendChild(tempElement);
    });
    // console.log(`Added Contact Content!`);
    return;
}

// Fetch Contact Content.
fetch("./assets/js/info/contact.json")
    .then(response => response.json())
    .then(addContact);