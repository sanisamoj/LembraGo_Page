
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TechnicalSection = () => {
  return (
    <section id="technical" className="py-20 bg-zinc-900/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">Segurança Avançada</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Arquitetura Técnica
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Entenda como nossa arquitetura de segurança garante a proteção dos seus dados
          </p>
        </div>

        <Tabs defaultValue="concepts" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-800 border border-zinc-700">
            <TabsTrigger value="concepts" className="data-[state=active]:bg-zinc-700 text-zinc-300 data-[state=active]:text-white">Conceitos Fundamentais</TabsTrigger>
            <TabsTrigger value="keys" className="data-[state=active]:bg-zinc-700 text-zinc-300 data-[state=active]:text-white">Chaves e Criptografia</TabsTrigger>
            <TabsTrigger value="flow" className="data-[state=active]:bg-zinc-700 text-zinc-300 data-[state=active]:text-white">Fluxo de Dados</TabsTrigger>
          </TabsList>
          
          <TabsContent value="concepts">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">E2EE (End-to-End Encryption)</h3>
                  <p className="text-zinc-400">
                    Conceito de segurança onde os dados são criptografados no dispositivo de origem (cliente) 
                    e só podem ser descriptografados no dispositivo do destinatário autorizado (cliente), 
                    sem que intermediários possam acessar o conteúdo original.
                  </p>
                </div>
                
                <Separator className="bg-zinc-700" />
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Zero-Knowledge</h3>
                  <p className="text-zinc-400">
                    Princípio de arquitetura onde o provedor do serviço é projetado para não ter acesso 
                    ou conhecimento das informações mais sensíveis do usuário, como a Senha Mestra 
                    ou o conteúdo das senhas armazenadas.
                  </p>
                </div>
                
                <Separator className="bg-zinc-700" />
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">KDF (Key Derivation Function)</h3>
                  <p className="text-zinc-400">
                    Uma categoria de algoritmo criptográfico (como o Argon2id) projetado para derivar 
                    uma ou mais chaves secretas fortes a partir de um segredo inicial (como uma senha), 
                    de forma segura e resistente a ataques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="keys">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6 space-y-4 divide-y divide-zinc-700">
                <div className="pb-4">
                  <h3 className="text-lg font-bold mb-1 text-white">MP (Master Password)</h3>
                  <p className="text-sm text-zinc-400">
                    A única senha que o usuário final cria, memoriza e digita para fazer login. 
                    Ela nunca sai do dispositivo cliente e é a raiz de segurança para derivar outras chaves.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="text-lg font-bold mb-1 text-white">EK (Encryption Key)</h3>
                  <p className="text-sm text-zinc-400">
                    Chave intermediária derivada da MP (+ salt) no cliente. 
                    Usada para criptografar/descriptografar a SK. Nunca armazenada.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="text-lg font-bold mb-1 text-white">SK (Secret Key)</h3>
                  <p className="text-sm text-zinc-400">
                    Chave simétrica forte (AES-256), gerada aleatoriamente no cliente. 
                    Responsável por criptografar itens do cofre pessoal e a UserPrivK.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="text-lg font-bold mb-1 text-white">SVK (Shared Vault Key)</h3>
                  <p className="text-sm text-zinc-400">
                    Chave simétrica forte (AES-256), gerada aleatoriamente no cliente, única para cada cofre. 
                    Criptografa/descriptografa os metadados e itens do cofre.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="text-lg font-bold mb-1 text-white">UserPubK/UserPrivK (Chaves de Usuário)</h3>
                  <p className="text-sm text-zinc-400">
                    Par de chaves assimétricas (ECC/Curve25519) do usuário. A pública é usada por outros 
                    para criptografar a SVK, a privada é usada para descriptografar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="flow">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">Registro de Usuário</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-400">
                      <li>Usuário cria uma Senha Mestra (MP) que nunca sai do cliente</li>
                      <li>Cliente deriva chaves usando Argon2id e gera pares de chaves</li>
                      <li>Apenas dados criptografados e hashes são enviados ao servidor</li>
                    </ol>
                  </div>
                  
                  <Separator className="bg-zinc-700" />
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">Autenticação</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-400">
                      <li>Cliente solicita salts para o email fornecido</li>
                      <li>Cliente deriva PV localmente para autenticação</li>
                      <li>Servidor verifica o hash sem conhecer a senha original</li>
                      <li>Cliente deriva chaves para descriptografar dados</li>
                    </ol>
                  </div>
                  
                  <Separator className="bg-zinc-700" />
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">Compartilhamento de Cofre</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-400">
                      <li>Usuário A obtém chave pública de Usuário B</li>
                      <li>Usuário A criptografa SVK com UserPubK de B</li>
                      <li>Servidor armazena ESVK_PubKey_UserB na tabela vault_members</li>
                      <li>Usuário B usa sua UserPrivK para descriptografar a chave do cofre</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnicalSection;
