
import React from "react"
import { Shield, Key, Lock, FileKey } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Version } from "../Version"

interface HomePageProps {
  actualVersion: Version
}

const HeroSection = ({ actualVersion }: HomePageProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-zinc-900 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <div className="flex justify-start mb-3">
              <div className="p-3 bg-zinc-800/80 rounded-full border border-zinc-700">
                <img src="/favicon.ico" alt="Lembrago Logo" className="w-8 h-8" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 leading-tight sm:leading-snug md:leading-normal">
              Lembrago
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              Gerenciador de senhas com criptografia de ponta a ponta e
              privacidade zero-knowledge para seus dados mais sensíveis.
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href={actualVersion.platforms["windows-x86_64"].url} className="flex items-center" download>
                  <Key className="mr-2 h-5 w-5" />
                  Comece Agora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 bg-zinc-800 hover:bg-zinc-800 hover:text-white">
                Saiba Mais
              </Button>
            </div>

            <div className="mt-12 py-4 px-6 bg-zinc-800/50 border border-zinc-700 rounded-lg inline-flex items-center">
              <span className="text-zinc-400 text-sm">
                Versão Atual: <span className="text-blue-400 font-semibold">{actualVersion.version}</span>
              </span>
            </div>
          </div>

          {/* Animação com símbolos de criptografia */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-800/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 animate-float">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-600 p-4 rounded-2xl">
                    <Key className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl">
                    <Lock className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl">
                    <FileKey className="h-8 w-8 text-white" />
                  </div>
                  <div className="h-full w-full rounded-full border-4 border-blue-500/50 flex items-center justify-center">
                    <div className="h-4/5 w-4/5 rounded-full border-4 border-dashed border-blue-400/50 animate-spin-slow">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
