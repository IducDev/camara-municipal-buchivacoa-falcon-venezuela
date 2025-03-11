import Footer from "@/app/components/Footer";
import { NavBar } from "@/app/components/NavBar";
import TikTokIframeEmbed from "@/app/components/tiktok-iframe-embed";

export default function page() {
  const tikTokUsername = "camarabuchivacoa" // Official TikTok account as an example

  return (
    <>
        <NavBar/>
        <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">TikTok Live Stream</h1>
        <div className="max-w-3xl mx-auto">
            <TikTokIframeEmbed username={tikTokUsername} />
        </div>
        </main>
        <Footer/>
    </>
    
  )
}

