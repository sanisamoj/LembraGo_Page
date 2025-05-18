
import React from "react";
import { Monitor, Laptop, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DownloadSection = () => {
  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      description: "Para Windows 10 e 11 (64-bits)",
      url: "http://217.196.60.110:7888/versions/windows/x86_64/0.8.1",
      badge: "Recomendado",
      variant: "blue",
      fileSize: "9.5 MB"
    },
  ]

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">Download</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Obtenha o Lembrago
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Baixe o aplicativo para o seu sistema operacional preferido e comece a usar agora mesmo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <Card key={platform.name} className="bg-zinc-800/70 border-zinc-700 overflow-hidden">
              <div className={`h-2 w-full bg-${platform.variant}-600`}></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className={`p-3 bg-${platform.variant}-600/20 rounded-lg mr-4`}>
                      <platform.icon className={`h-8 w-8 text-${platform.variant}-500`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                        {platform.badge && (
                          <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-700">
                            {platform.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-zinc-400 text-sm">{platform.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-zinc-500">Versão 0.8.1 Beta</span>
                    <span className="text-sm text-zinc-500">{platform.fileSize}</span>
                  </div>
                  <Button className={`w-full bg-${platform.variant}-600 hover:bg-${platform.variant}-700`}>
                    <ArrowDown className="mr-2 h-4 w-4" /> Download para {platform.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-400 text-sm">
            Ao baixar, você concorda com nossos <a href="#" className="text-blue-400 hover:underline">Termos de Uso</a> e
            <a href="#" className="text-blue-400 hover:underline"> Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
