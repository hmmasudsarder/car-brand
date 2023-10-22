import { useLoaderData } from "react-router-dom";
import ExtraSection from "../Components/ExtraSection/ExtraSection";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import BrandCard from "./BrandCard/BrandCard";
import Banner from "../Components/Navbar/Banner";
import TwoExtraSection from "../Components/ExtraSection/TwoExtraSection";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-24">
            {
                brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
            </div>
            <ExtraSection></ExtraSection>
            <TwoExtraSection></TwoExtraSection>
            <Footer/>
        </div>
    );
};

export default Home;