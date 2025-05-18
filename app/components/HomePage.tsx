
import React from "react"
import HeroSection from "./HeroSection"
import FeaturesSection from "./FeaturesSection"
import TechnicalSection from "./TechnicalSection"
import DownloadSection from "./DownloadSection"
import VersionHistorySection from "./VersionHistorySection"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Version } from "../Version"

export interface HomePageProps {
  actualVersion: Version
  allVerssions: Version[]
}

const HomePage = ({ actualVersion, allVerssions }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar actualVersion={actualVersion}/>
      <HeroSection actualVersion={actualVersion}/>
      <FeaturesSection />
      <TechnicalSection />
      <DownloadSection actualVersion={actualVersion}/>
      <VersionHistorySection actualVersion={actualVersion} allVersions={allVerssions}/>
      <Footer />
    </div>
  )
}

export default HomePage
