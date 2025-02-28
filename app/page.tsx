import WelcomeComponent from "./components/WelcomeComponent";
import AdoptaArbol from "./components/AdoptaArbol";
import Directiva from "./components/Directiva";
import Videoplayer from "./components/Videoplayer";
import CarteleraInformativa from "./components/CarteleraInformativa";
import SomosBuchivacoa from "./components/SomosBuchivacoa";

export default function Home() {
  return (
    <div className="w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20">

      <WelcomeComponent/>
      <AdoptaArbol/>
      <Directiva/>
      <Videoplayer/>
      <CarteleraInformativa/>
      <SomosBuchivacoa/>
    </div>
  );
}
