function AboutMe(){
    return (
        <>
            <div id="about" className="row pt-5 d-flex justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 col-7 py-2 px-4"><img className="rounded-pill img-fluid w-100"
                        src={window.location.origin+"/pic_wh.jpg"} alt="Wee Hong" /></div>
                <div className="col-lg-6 col-md-7 col-sm-10 py-2 px-4">
                    <h1>Hi. I'm <strong>Leong Wee Hong</strong>.</h1>
                    <h5>Software Engineering Student | Web Development | Penultimate Study Year@UNIMAS</h5>
                    <p>And this is my <strong>Portfolio</strong>.</p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;