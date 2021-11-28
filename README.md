<p align="center">
  <img src="https://github.com/Matheuschn/big-blue-button-mobile/blob/main/src/assets/icon.png?raw=true" alt="BigBlueButton icon" class="center" width="200" height="200" > 
</p>
<h1 align="center">
  BigBlueButton Mobile
</h1>
BigBlueButton Mobile é uma versão móvel do ConferênciaWeb/BigBlueButton utilizado pelo Moodle,
permitindo que o usuário participe da conferência mesmo com o app minimizado, dentre outras funcionalidades.

# Instalação
Para usuários de Android, baixe o arquivo APK clicando [aqui](https://github.com/Matheuschn/BigBlueButton-Mobile/releases/latest/download/BigBlueButtonMobile-v1.0.0.apk) e instale-o após terminar o download. Para informações sobre como instalar um aplicativo por um arquivo APK, clique [aqui](https://www.techtudo.com.br/dicas-e-tutoriais/2018/10/como-instalar-apk-no-android.ghtml).

Para usuários de iOS, não há download disponível do aplicativo no momento. Caso você seja um desenvolvedor de aplicativos iOS e queira contribuir no projeto,
entre em contato comigo [por aqui](#contato).

# Utilização
Ao abrir o aplicativo pela primeira vez, ele solicitará permissões para o microfone e a câmera, usados durante a conferência.
Também será necessário fazer login no Moodle para poder ter acesso à reunião.

O aplicativo será aberto automaticamente ao clicar em um link de reunião no Moodle. Caso não abra, procure em seu navegador uma opção chamada "Abrir em aplicativo".
Também é possível inserir o link da reunião manualmente no aplicativo.

Ao contrário do ConferênciaWeb/BigBlueButton pelo navegador, o aplicativo permanece na conferência, mesmo quando minimizado ou quando o celular está bloqueado.

Ao detectar que uma grande quantidade de usuários saíram da conferência, o aplicativo
irá enviar uma notificação avisando essa informação. Isso ajuda a evitar o constrangimento
de ficar sozinho na sala com o professor.

# Perguntas frequentes
- [Onde encontro o link da reunião no Moodle?](#onde-encontro-o-link-da-reunião-no-moodle)
- [Por que preciso fazer login no Moodle pelo app? É seguro?](#por-que-preciso-fazer-login-no-moodle-pelo-app-é-seguro)
- ["Instalação bloqueada pelo Play Protect" ao instalar o APK.](#instalação-bloqueada-pelo-play-protect-ao-instalar-o-apk)
- ["Enviar o app para verificação?" ao abrir pela primeira vez.](#enviar-o-app-para-verificação-ao-abrir-pela-primeira-vez)
- [Meu aplicativo não abriu sozinho ao clicar no link da reunião.](#meu-aplicativo-não-abriu-sozinho-ao-clicar-no-link-da-reunião)

### Onde encontro o link da reunião no Moodle?

O link que o aplicativo usa para se conectar na reunião **não é o da reunião em si**, e sim
o da página da reunião no **Moodle**, que tem um ícone azulzinho ao lado. Ele é sempre do tipo ``https://moodle.ufsc.br/mod/bigbluebuttonbn/view.php?id=XXXXXXX``, onde os X's representam um código exclusivo para cada disciplina.

### Por que preciso fazer login no Moodle pelo app? É seguro?

Para o aplicativo conseguir acessar a página da reunião no ConferênciaWeb, ele precisa
estar logado no Moodle. Infelizmente, não é possível usar a informação já salva no celular,
sendo necessário assim um novo login.
Mas fique tranquilo! O aplicativo não utiliza e nem tem acesso à sua informação de login.

### "Instalação bloqueada pelo Play Protect" ao instalar o APK.

Já que o aplicativo ainda não foi publicado oficialmente na Google Play Store, essa mensagem aparece como forma de segurança para o usuário.
Selecione "Instalar assim mesmo" para continuar a instalação.

### "Enviar o app para verificação?" ao abrir pela primeira vez.

Conforme explicado na questão acima, o aplicativo ainda não está na Google Play Store, por isso a mensagem. Você pode selecionar qualquer uma das opções,
mas recomendo selecionar "Enviar".

### Meu aplicativo não abriu sozinho ao clicar no link da reunião.

Se você utilizar o navegador Mozilla Firefox, o aplicativo não irá abrir sozinho ao clicar no link: é necessário ir nos três pontinhos (no navegador) e clicar na opção "Abrir em aplicativo".
Se mesmo assim o app não abrir, favor utilizar o modo manual de inserção do link e, se possível, entre em [contato comigo](#contato).

# Compilando o app
**Os seguintes passos são recomendados apenas para usuários avançados em situações específicas de teste. Se você não se encaixa nessa categoria, veja a seção [Instalação](#instalação).**

Para compilar o app do código-fonte, siga os passos:
  1. Execute o comando `npm install` no diretório.
  2. Execute o comando `npm start` no diretório.
  3. Em outro terminal, execute o comando `npm run android` no diretório.

# Contato
Qualquer erro, dúvida, ou sugestão, entrar em contato pelo e-mail [matheus.schneider.camilo@gmail.com](mailto:matheus.schneider.camilo@gmail.com) ou pela página do projeto no GitHub, disponível [aqui](https://github.com/Matheuschn/BigBlueButton-Mobile).
