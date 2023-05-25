function BoxLayout({ children }){
    return (
        <>
            <div id="page-content" className="d-flex flex-column w-100 min-vh-100">
                { children }
            </div>
        </>
    );
}

export default BoxLayout;