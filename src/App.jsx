import "./index.css";
import { Header } from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Skill from "./components/Skill.jsx";
import { Product } from "./components/Product.jsx";

function App() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Skill></Skill>
            <Product></Product>
            <Contact></Contact>
        </>
    );
}

export default App;
