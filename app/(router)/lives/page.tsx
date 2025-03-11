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

            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
                <strong>Note:</strong> This iframe approach may be subject to TikTok's cross-origin policies. Some browsers
                or TikTok settings might block embedding in iframes.
            </p>
            </div>
        </div>
        </main>
        <Footer/>
    </>
    
  )
}

