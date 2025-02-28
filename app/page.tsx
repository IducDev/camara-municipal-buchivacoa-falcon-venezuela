import Image from "next/image";
import WelcomeComponent from "./components/WelcomeComponent";
import AdoptaArbol from "./components/AdoptaArbol";

export default function Home() {
  return (
    <div className="w-full h-auto py-10 pb-20 px-4 bg-white dark:bg-gray-800 mt-20">

      <WelcomeComponent/>
      <AdoptaArbol/>
    </div>
  );
}
