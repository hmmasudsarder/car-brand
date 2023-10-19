import ExtraSection from "../Components/ExtraSection/ExtraSection";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ExtraSection></ExtraSection>
            <Footer/>
        </div>
    );
};

export default Home;