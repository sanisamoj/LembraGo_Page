
import React from "react"
import { Version } from "../Version";

export interface NavbarProps {
  actualVersion: Version
}

const Navbar = ( { actualVersion }: NavbarProps ) => {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Lembrago Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">Lembrago</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-zinc-300 hover:text-white transition-colors">Recursos</a>
          <a href="#technical" className="text-zinc-300 hover:text-white transition-colors">Arquitetura</a>
          <a href="#download" className="text-zinc-300 hover:text-white transition-colors">Download</a>
          <a href="#versions" className="text-zinc-300 hover:text-white transition-colors">Versões</a>
        </div>
        
        <div>
          <a href={actualVersion.platforms["windows-x86_64"].url} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
