import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactMethods(){
    let avatar = `p-2 bg-info rounded-circle mx-1`;
    const flexItems = "px-1 py-1 d-flex justify-content-sm-center align-items-center";
    const textFormat = "text-decoration-none mx-1";
    const contactsContainerFormat = "col-lg-9 col-md-11 col-sm-10 col-8 py-1 px-2 d-flex flex-wrap flex-sm-row flex-column justify-content-between";
    const Contacts = [
        {icon: faEnvelope, link: "mailto:jzleong@outlook.com", text: "jzleong@outlook.com"},
        {icon: faWhatsapp, link: "https://api.whatsapp.com/send?phone=60177655410", text: "+60 177655410"},
        {icon: faGithub, link: "https://github.com/Zejakob123", text: "Zejakob123 (GitHub)"},
        {icon: faLinkedin, link: "https://www.linkedin.com/in/leong-wee-hong/", text: "Leong Wee Hong (LinkedIn)"}
    ];
    const ContactItems = Contacts.map(contact =>{
        
        return (
            <div className={flexItems}>
                <FontAwesomeIcon icon={contact.icon} className={avatar}/>
                <a className={textFormat} href={contact.link} target="_blank" rel="noreferrer">{contact.text}</a>
            </div>
        );
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
            <div id="contact" className="row pt-5 d-flex justify-content-center">
                <div className="col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4">
                    <h2>Contact:</h2>
                </div>
                <ContactMethods />
            </div>
        </>
    );
}

export default Contacts;