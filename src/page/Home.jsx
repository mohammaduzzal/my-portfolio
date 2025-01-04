import About from "../component/About";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Education from "../component/Education";
import Skill from "../component/Skill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;