import Feature from "./components/Feature";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Document Upload On Block Chain",
  };

  return (
    <>
    
      <HeroSection myData={data} />
      {/* <Feature/> */}
      <Services />
      {/* <Trusted /> */}
      
    </>
  );
};

export default Home;
