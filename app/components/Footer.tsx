import React from "react"
import { Lock, Link as LinkIcon, Mail, Github, ArrowRight, FileText, ShieldCheck, HelpCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seção da Marca */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.ico" alt="Lembrago Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">Lembrago</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Gerenciador de senhas seguro com criptografia de ponta a ponta e proteção total da sua privacidade.
            </p>
          </div>
          
          {/* Seção de Links Rápidos */}
          <div>
            <div className="flex items-center mb-4">
              <LinkIcon className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="text-white font-bold text-lg">Links Rápidos</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="flex items-center text-zinc-400 hover:text-blue-400 transition-colors duration-200 group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Recursos
                </a>
              </li>
              <li>
                <a href="#technical" className="flex items-center text-zinc-400 hover:text-blue-400 transition-colors duration-200 group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Arquitetura
                </a>
              </li>
              <li>
                <a href="#download" className="flex items-center text-zinc-400 hover:text-blue-400 transition-colors duration-200 group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Download
                </a>
              </li>
              <li>
                <a href="#versions" className="flex items-center text-zinc-400 hover:text-blue-400 transition-colors duration-200 group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Versões
                </a>
              </li>
            </ul>
          </div>
          
          {/* Seção de Contato */}
          <div>
            <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-white font-bold text-lg">Contato</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-zinc-400">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:sanisamoj33@gmail.com" className="hover:text-blue-400 break-all transition-colors duration-200">
                  sanisamoj33@gmail.com
                </a>
              </li>
              <li className="flex items-center text-zinc-400">
                <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                <a 
                  href="https://github.com/sanisamoj/LBRAGO" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 break-all transition-colors duration-200"
                >
                  github.com/sanisamoj/LBRAGO
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Seção de Copyright e Links Inferiores */}
        <div className="mt-10 pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lembrago. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 items-center">
            <a href="#" className="flex items-center text-zinc-400 hover:text-white transition-colors duration-200 text-sm">
              <FileText className="h-4 w-4 mr-1 text-zinc-500" /> Termos
            </a>
            <a href="#" className="flex items-center text-zinc-400 hover:text-white transition-colors duration-200 text-sm">
              <ShieldCheck className="h-4 w-4 mr-1 text-zinc-500" /> Privacidade
            </a>
            <a href="#" className="flex items-center text-zinc-400 hover:text-white transition-colors duration-200 text-sm">
              <HelpCircle className="h-4 w-4 mr-1 text-zinc-500" /> FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer