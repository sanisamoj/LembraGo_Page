# LBRAGO-PAGE 🔒

**Um gerenciador de senhas seguro, de código aberto, com arquitetura Zero-Knowledge e Criptografia de Ponta-a-Ponta (E2EE), no seu desktop.**

## Introdução

LBRAGO é a aplicação de desktop para o LemBraGO, projetada para oferecer uma maneira segura e privada de armazenar, gerenciar e compartilhar suas senhas e informações sensíveis. Construído sobre uma arquitetura Zero-Knowledge, garantimos que **nem mesmo nós** (os desenvolvedores do serviço) podemos acessar suas senhas descriptografadas. Seus dados são criptografados e descriptografados localmente no seu dispositivo usando sua Senha Mestra, que nunca sai do seu computador.

Esta aplicação sincroniza seus dados criptografados com nosso servidor seguro (Backend em Go), permitindo acesso em múltiplos dispositivos sem comprometer sua privacidade.

## ✨ Funcionalidades Principais

* **Segurança Zero-Knowledge:** Seus dados mais sensíveis são inacessíveis para o servidor.
* **Criptografia de Ponta-a-Ponta (E2EE):** Toda criptografia/descriptografia ocorre localmente no seu dispositivo.
* **Senha Mestra Forte:** Única chave que você precisa memorizar, usada para derivar suas chaves de criptografia (via Argon2id).
* **Cofres Seguros:** Organize suas senhas e segredos em cofres coletivos ou individuais.
* **Compartilhamento Seguro:** Compartilhe cofres com outros usuários da sua organização de forma segura, usando criptografia assimétrica (ECC/Curve25519).
* **Multiplataforma:** Disponível para Windows, e Linux (graças ao Tauri).
* **Gerador de Senhas Fortes:** Crie senhas complexas e únicas facilmente ( Caso tenha preguiça de criar algo forte ).
* **Acesso Offline:** Acesse seus dados armazenados localmente mesmo sem conexão com a internet (após o primeiro login/sincronização). // Vericando se será implementado
* **(Opcional) Preenchimento Automático:** Integração com navegadores para preenchimento automático (se implementado). // Vericando se será implementado
* **(Opcional) Suporte a Organizações:** Gerencie usuários e acessos dentro de uma estrutura organizacional (dependendo do plano). // Vericando se será implementado

## 🔐 Modelo de Segurança

A segurança e a privacidade são a base deste projeto.

* **Senha Mestra (MP):** Nunca transmitida ou armazenada no servidor. Usada localmente para derivar:
    * **Verificador de Senha (PV):** Um hash seguro (Argon2id) enviado ao servidor *apenas* para verificar o login, sem revelar a MP.
    * **Chave de Criptografia (EK):** Chave intermediária (não armazenada) usada para criptografar/descriptografar sua Chave Secreta (SK).
* **Chave Secreta (SK):** Sua chave principal de criptografia simétrica (AES-GCM), gerada localmente e armazenada no servidor de forma criptografada (`ESK`). Usada para proteger sua Chave Privada (`UserPrivK`).
* **Par de Chaves Assimétricas (`UserPubK`/`UserPrivK`):** Usadas para o compartilhamento seguro de cofres (RSA). Sua `UserPrivK` é criptografada com sua `SK` e armazenada no servidor (`EUserPrivK`).
* **Chave de Cofre Compartilhado (SVK):** Chave simétrica (AES-GCM) única para cada cofre, usada para criptografar os metadados e itens do cofre. Ao compartilhar, a SVK é criptografada com a `UserPubK` de cada membro.
* **Servidor:** Armazena apenas dados que não pode descriptografar: `PV`, `salts`, `ESK`, `EUserPrivK`, metadados e itens criptografados (`EncryptedVaultMetadata`, `EID`), e as chaves de cofre criptografadas para cada membro (`ESVK_PubKey_User`).

**Em resumo: Seus dados sensíveis só existem em formato legível no seu dispositivo, quando você está logado.**

## 🚀 Para testar no Docker 

    docker build -t lbrago-page .

    docker run -p 3000:3000 lbrago-page
