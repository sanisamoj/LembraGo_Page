
import React from "react";
import { Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Lock className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Lembrago</span>
            </div>
            <p className="text-zinc-400">
              Gerenciador de senhas seguro com criptografia de ponta a ponta e proteção total da sua privacidade.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-zinc-400 hover:text-blue-400">Recursos</a></li>
              <li><a href="#technical" className="text-zinc-400 hover:text-blue-400">Arquitetura</a></li>
              <li><a href="#download" className="text-zinc-400 hover:text-blue-400">Download</a></li>
              <li><a href="#versions" className="text-zinc-400 hover:text-blue-400">Versões</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">suporte@lembrago.dev</li>
              <li className="text-zinc-400">GitHub: @lembrago</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Lembrago. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-zinc-400 hover:text-white">Termos</a>
            <a href="#" className="text-zinc-400 hover:text-white">Privacidade</a>
            <a href="#" className="text-zinc-400 hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
