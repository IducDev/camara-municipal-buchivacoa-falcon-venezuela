import WelcomeComponent from "./components/WelcomeComponent";
import AdoptaArbol from "./components/AdoptaArbol";
import Directiva from "./components/Directiva";
import Videoplayer from "./components/Videoplayer";
import CarteleraInformativa from "./components/CarteleraInformativa";
import { NavBar } from "./components/NavBar";
import SomosBuchivacoa from "./components/SomosBuchivacoa";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <NavBar/>
    <SomosBuchivacoa showDownArrow={true} message="Bienvenidos" />
    {/*aqui va el cuerpo de la pagina*/}

    <div className="w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20">
      <WelcomeComponent/>
      <AdoptaArbol/>
      <Directiva/>
      <Videoplayer/>
      <CarteleraInformativa/>
    </div>

    <SomosBuchivacoa showDownArrow={false}/>
    <Footer/>

    </>
  );
}
