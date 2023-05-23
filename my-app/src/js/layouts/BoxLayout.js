function BoxLayout({ children }){
    return (
        <>
            <div id="page-content" class="d-flex flex-column w-100 min-vh-100">
                { children }
            </div>
        </>
    );
}

export default BoxLayout;