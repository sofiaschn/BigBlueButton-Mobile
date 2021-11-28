<p align="center">
  <img src="https://github.com/Matheuschn/big-blue-button-mobile/blob/main/src/assets/icon.png?raw=true" alt="BigBlueButton icon" class="center" width="200" height="200" > 
</p>
<h1 align="center">
  BigBlueButton Mobile
</h1>
BigBlueButton Mobile é uma versão móvel do ConferênciaWeb/BigBlueButton utilizado pelo Moodle,
permitindo que o usuário participe da conferência mesmo com o app minimizado, dentre outras funcionalidades.

# Instalação
Baixe o arquivo .apk aqui e instale o aplicativo.

# Utilização
Ao abrir o aplicativo pela primeira vez, ele solicitará permissões para o microfone e a câmera, usados durante a conferência.
Também será necessário fazer login no Moodle para poder ter acesso à reunião.

O aplicativo será aberto automaticamente ao clicar em um link de reunião no Moodle. Caso não abra, procure em seu navegador uma opção chamada "Abrir em aplicativo".
Também é possível inserir o link da reunião manualmente no aplicativo.

Ao contrário do ConferênciaWeb/BigBlueButton pelo navegador, o aplicativo permanece na conferência, mesmo quando minimizado ou quando o celular está bloqueado.

# Compilando o app
**Os seguintes passos são recomendados apenas para usuários avançados em situações específicas de teste. Se você não se encaixa nessa categoria, veja a seção [Instalação](#instalação)**

Para compilar o app do código-fonte, siga os passos:
  1. Execute o comando `npm install` no diretório.
  2. Execute o comando `npm start` no diretório.
  3. Em outro terminal, execute o comando `yarn run android` no diretório.
