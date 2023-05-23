function ContactMethods(){
    let avatar = `p-2 bg-info rounded-circle mx-1`;
    const flexItems = "px-1 py-1 d-flex justify-content-sm-center align-items-center";
    const textFormat = "text-decoration-none mx-1";
    const contactsContainerFormat = "col-lg-9 col-md-11 col-sm-10 col-8 py-1 px-2 d-flex flex-wrap flex-sm-row flex-column justify-content-between";
    const Contacts = [
        {icon: "fa-solid fa-envelope", link: "mailto:jzleong@outlook.com", text: "jzleong@outlook.com"},
        {icon: "fa fa-whatsapp", link: "https://api.whatsapp.com/send?phone=60177655410", text: "+60 177655410"},
        {icon: "fa-brands fa-github", link: "https://github.com/Zejakob123", text: "Zejakob123 (GitHub)"},
        {icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/leong-wee-hong/", text: "Leong Wee Hong (LinkedIn)"}
    ];
    const ContactItems = Contacts.map(contacts =>{
        <div className={flexItems}>
            <i className={ contacts + ' ' + avatar }></i>
            <a className={textFormat} href={contacts.link} target="_blank">{contacts.text}</a>
        </div>
    });
    
    return (
        <div id="contact" className={contactsContainerFormat}>
            {ContactItems}
        </ div>
    );

}

function Contacts(){
    return (
        <>
            <div id="contact" class="row pt-5 d-flex justify-content-center">
                <div class="col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4">
                    <h2>Contact:</h2>
                </div>
                <ContactMethods />
            </div>
        </>
    );
}

export default Contacts;