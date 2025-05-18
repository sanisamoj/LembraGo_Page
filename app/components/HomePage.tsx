
import React from "react"
import HeroSection from "./HeroSection"
import FeaturesSection from "./FeaturesSection"
import TechnicalSection from "./TechnicalSection"
import DownloadSection from "./DownloadSection"
import VersionHistorySection from "./VersionHistorySection"
import Footer from "./Footer"
import Navbar from "./Navbar"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechnicalSection />
      <DownloadSection />
      <VersionHistorySection />
      <Footer />
    </div>
  )
}

export default HomePage
