function Contacts(){
    return (
        <>
            <div id="contact" class="row pt-5 d-flex justify-content-center">
                <div class="col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4">
                    <h2>Contact:</h2>
                </div>
                <div
                    class="col-lg-9 col-md-11 col-sm-10 col-8 py-1 px-2 d-flex flex-wrap flex-sm-row flex-column justify-content-between">
                    <div class="px-1 py-1 d-flex justify-content-sm-center align-items-center"><i
                            class="fa-solid fa-envelope p-2 bg-info rounded-circle mx-1"></i><a
                            class="text-decoration-none mx-1" href="mailto:jzleong@outlook.com"
                            target="_blank">jzleong@outlook.com</a></div>
                    <div class="px-1 py-1 d-flex justify-content-sm-center align-items-center"><i
                            class="fa fa-whatsapp p-2 bg-info rounded-circle mx-1" aria-hidden="true"></i><a
                            class="text-decoration-none mx-1" href="https://api.whatsapp.com/send?phone=60177655410"
                            target="_blank">+60 177655410</a></div>
                    <div class="px-1 py-1 d-flex justify-content-sm-center align-items-center"><i
                            class="fa-brands fa-github p-2 bg-info rounded-circle mx-1"></i><a
                            class="text-decoration-none mx-1" href="https://github.com/Zejakob123"
                            target="_blank">Zejakob123 (GitHub)</a></div>
                    <div class="px-1 py-1 d-flex justify-content-sm-center align-items-center"><i
                            class="fa-brands fa-linkedin p-2 bg-info rounded-circle mx-1"></i><a
                            class="text-decoration-none mx-1" href="https://www.linkedin.com/in/leong-wee-hong/"
                            target="_blank">Leong Wee Hong (LinkedIn)</a></div>
                </div>
            </div>
        </>
    );
}

export default Contacts;