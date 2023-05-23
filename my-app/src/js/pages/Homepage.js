import BoxLayout from '../layouts/BoxLayout';
import NavBar from '../layouts/NavBar';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';

function Homepage(){
    return (
        <BoxLayout>
            <NavBar />
            <Main />
            <Footer />
        </BoxLayout>
    );
}

export default Homepage;