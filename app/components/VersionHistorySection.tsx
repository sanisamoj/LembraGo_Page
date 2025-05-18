
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const VersionHistorySection = () => {
  const versionData = {
    "version": "0.8.1",
    "notes": "Versão Beta",
    "pub_date": "2025-05-18T00:54:50.961Z",
    "platforms": {
      "linux-x86_64": {
        "signature": "abc123siglinux",
        "url": "http://217.196.60.110:7888/versions/windows/x86_64/0.1.0"
      },
      "windows-x86_64": {
        "signature": "dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVRSjNRTUhJbFBQNzVWZGxIYWRlMm14TmVzVVBOaGNmaHBwWnBKOVp4cmhPZ0pHTW9IaUsxeEZJem1KeE9ZRjlaNVJ5UG9LWG5RZ0dvdFJUcmkwc2FueWcwMHBYZkRnTlFnPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzQ3NTI5NTg4CWZpbGU6bGVtYnJhZ29fMC44LjFfeDY0X2VuLVVTLm1zaQpZVVJiOWZXcTI3ZzZjRG1CamZMK1FEWXV3TXVtSE1mMUk3ME5sd1diM2pRb1hidHZHcjNBRko4TE9aYWhFajJNbGZsazF0ZzlVd1lHNjBWK0NVMkhEZz09Cg==",
        "url": "http://217.196.60.110:7888/versions/windows/x86_64/0.8.1"
      }
    }
  };

  const releaseNotes = [
    {
      version: "0.8.1",
      date: "18 de Maio, 2025",
      type: "Beta",
      changes: [
        "Primeira versão beta pública",
        "Implementação completa de cofres compartilhados",
        "Suporte para autenticação de dois fatores",
        "Correções de bugs menores na interface"
      ]
    },
    {
      version: "0.7.4",
      date: "30 de Abril, 2025",
      type: "Alpha",
      changes: [
        "Melhoria no desempenho da busca de senhas",
        "Nova interface para gerenciamento de equipes",
        "Correção de vazamento de memória ao fechar a aplicação"
      ]
    },
    {
      version: "0.6.2",
      date: "15 de Março, 2025",
      type: "Alpha",
      changes: [
        "Implementação da criptografia E2EE",
        "Adição de exportação segura de senhas",
        "Nova arquitetura zero-knowledge"
      ]
    }
  ];

  // Format the date from the version data
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="versions" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">Atualizações</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórico de Versões
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Acompanhe o desenvolvimento e as melhorias mais recentes do Lembrago
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-zinc-800/70 border-zinc-700">
            <CardHeader className="border-b border-zinc-700 bg-zinc-800/50">
              <CardTitle className="text-2xl text-zinc-100">Versões Recentes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-zinc-700 hover:bg-zinc-800">
                    <TableHead className="w-1/4 text-zinc-300">Versão</TableHead>
                    <TableHead className="w-1/4 text-zinc-300">Data</TableHead>
                    <TableHead className="text-zinc-300">Alterações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {releaseNotes.map((release) => (
                    <TableRow key={release.version} className="border-zinc-700 hover:bg-zinc-800/70">
                      <TableCell className="font-medium text-zinc-200">
                        <div className="flex items-center gap-2">
                          {release.version}
                          <Badge 
                            className={release.type === "Beta" ? "bg-blue-600/20 text-blue-400" : "bg-purple-600/20 text-purple-400"}
                          >
                            {release.type}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-zinc-400">{release.date}</TableCell>
                      <TableCell>
                        <ul className="list-disc pl-5 text-zinc-400 marker:text-blue-500 space-y-1">
                          {release.changes.map((change, index) => (
                            <li key={index}>{change}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Card className="bg-blue-900/10 border-blue-800/30">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-white">Atual</Badge>
                  <span className="text-zinc-300">Versão {versionData.version} lançada em {formatDate(versionData.pub_date)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionHistorySection;
