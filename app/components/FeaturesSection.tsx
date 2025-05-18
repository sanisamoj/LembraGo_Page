
import React from "react";
import { 
  Lock, Key, Users, Vault, 
  Database, Globe, Laptop, Monitor 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ title, description, icon: Icon } : any) => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-900/5">
      <CardContent className="p-6">
        <div className="mb-4 p-3 bg-zinc-700/50 inline-flex rounded-lg">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Lock,
      title: "Criptografia E2EE",
      description: "Criptografia de ponta a ponta garante que apenas usuários autorizados possam acessar as senhas compartilhadas."
    },
    {
      icon: Key,
      title: "Zero-Knowledge",
      description: "Nossos servidores nunca têm acesso às suas senhas ou chaves mestras, garantindo total privacidade."
    },
    {
      icon: Users,
      title: "Gerenciamento de Equipes",
      description: "Organize usuários em equipes e defina permissões granulares de acesso a cofres compartilhados."
    },
    {
      icon: Vault,
      title: "Cofres Seguros",
      description: "Armazene senhas, chaves de API e outros dados sensíveis em cofres criptografados individuais e compartilhados."
    },
    {
      icon: Database,
      title: "Armazenamento Seguro",
      description: "Dados armazenados usando algoritmos modernos como AES-256 e Argon2id para máxima proteção."
    },
    {
      icon: Globe,
      title: "Acesso Multi-plataforma",
      description: "Acesse suas senhas de qualquer dispositivo com nossos aplicativos para Windows, Linux e navegadores."
    }
  ];

  return (
    <section id="features" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">Recursos</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Segurança completa para suas senhas
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Projetado com segurança em primeiro lugar, oferecemos as melhores práticas 
            de criptografia e proteção de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
