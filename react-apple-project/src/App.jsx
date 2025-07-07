import "./App.css";
import Alert from "./componenets/Alert/Alert";
import FifthSection from "./componenets/FifthSection/FifthSection";
import FirstSection from "./componenets/FirstSection/FirstSection";
import Footer from "./componenets/Footer/Footer";
import FourthSection from "./componenets/FourthSection/FourthSection";
import Header from "./componenets/Header/Header";
import SecondSection from "./componenets/SecondSection/SecondSection";
import SixthSection from "./componenets/SixthSection/SixthSection";
import ThirdSection from "./componenets/ThirdSection/ThirdSection";

function App() {
  return (
    <>
      <Header />
    <Alert/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
      <Footer />
    </>
  );
}

export default App;
