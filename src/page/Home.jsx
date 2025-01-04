import About from "../component/About";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Education from "../component/Education";
import Projects from "../component/Projects";
import Skill from "../component/Skill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Contact></Contact>
            <Projects></Projects>
        </div>
    );
};

export default Home;