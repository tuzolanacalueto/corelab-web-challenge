#Descrição
Este Pull Request implementa uma aplicação web completa de gerenciamento de listas de tarefas (to-do lists) utilizando NestJS no backend e React no frontend. A aplicação permite a criação, leitura, atualização e exclusão de tarefas, bem como a marcação de tarefas como favoritas, definição de cores para cada tarefa, e exibição responsiva e visualmente atraente no frontend. O projeto é contêinerizado utilizando Docker para facilitar a implantação e o gerenciamento de dependências.

#Backend - NestJS
O que é NestJS?
NestJS é um framework para a construção de aplicativos do lado do servidor Node.js eficientes e escaláveis. Ele é construído com TypeScript e utiliza conceitos do Angular, como injeção de dependência, para promover um desenvolvimento modular e testável. Ele é projetado para ser altamente extensível e incorpora vários padrões como Model-View-Controller (MVC).

#Estrutura do Backend
O backend foi implementado utilizando NestJS, com o seguinte fluxo básico:

Controller: Os controllers recebem as requisições HTTP e delegam a lógica de negócios para os serviços. No projeto, temos controllers que gerenciam as tarefas (to-dos) e lidam com as operações CRUD.

Service: Os serviços contêm a lógica de negócios e comunicam-se com os repositórios para persistência dos dados. Eles são responsáveis por processar as requisições recebidas pelos controllers.

DTO (Data Transfer Object): DTOs são utilizados para definir a estrutura dos dados que são enviados e recebidos pelo backend. Eles são usados para garantir a validação e a tipagem dos dados, facilitando a manutenção e a escalabilidade do código.

Prisma ORM: Prisma foi utilizado para interagir com o banco de dados MySQL, fornecendo uma interface de alto nível para manipulação dos dados. Ele permite definir o esquema do banco de dados e realizar operações CRUD de forma simples e eficiente.

CORS (Cross-Origin Resource Sharing): CORS foi configurado para permitir que o frontend, hospedado em uma origem diferente, possa se comunicar com o backend sem problemas. Isso é essencial para o funcionamento da aplicação em ambientes onde o frontend e o backend estão em servidores distintos.

#Frontend - React
O que é React?
React é uma biblioteca JavaScript para a construção de interfaces de usuário. Ele é baseado em componentes, permitindo a criação de interfaces complexas através da composição de componentes simples e reutilizáveis. React também é conhecido por seu uso eficiente do DOM virtual, o que melhora o desempenho das aplicações.

#Estrutura do Frontend
O frontend foi desenvolvido em React, seguindo os princípios da componentização e separação de preocupações:

Componentes: A interface de usuário foi dividida em componentes reutilizáveis, como Header, Note, ColorPicker, entre outros. Cada componente é responsável por uma parte específica da UI, tornando o código mais modular e fácil de manter.

State Management: O gerenciamento de estado foi feito utilizando o hook useState do React, permitindo que os componentes atualizem e compartilhem o estado da aplicação.

Axios: Axios foi utilizado para realizar requisições HTTP ao backend. Ele é uma biblioteca baseada em Promises que simplifica o processo de comunicação com APIs, tornando as requisições mais legíveis e fáceis de manipular.

Responsividade: A aplicação foi projetada para ser totalmente responsiva, utilizando CSS puro para garantir que funcione bem em dispositivos de diferentes tamanhos.

#Docker
O que é Docker?
Docker é uma plataforma que permite a criação, implantação e execução de aplicações em contêineres. Um contêiner é uma unidade de software que empacota o código da aplicação junto com todas as suas dependências, garantindo que ela funcione de forma consistente em qualquer ambiente.

#Docker no Projeto
No projeto, Docker foi utilizado para criar contêineres tanto para o backend quanto para o frontend. Os contêineres são definidos em arquivos Dockerfile, que especificam as dependências necessárias, comandos de construção e portas a serem expostas.

Backend: Um contêiner Docker foi configurado para rodar a aplicação NestJS, expondo as portas necessárias para a comunicação com o frontend.

Frontend: Outro contêiner Docker foi configurado para rodar a aplicação React, garantindo que a UI seja servida em um ambiente isolado e consistente.

#Resumo Técnico
DTO (Data Transfer Object): Utilizado para definir e validar a estrutura dos dados que trafegam entre o cliente e o servidor.
Axios: Biblioteca para realizar requisições HTTP de forma simplificada, utilizada no frontend para comunicação com o backend.
CORS: Configurado no backend para permitir que o frontend, hospedado em uma origem diferente, se comunique com o servidor.
Prisma ORM: Ferramenta para interagir com o banco de dados MySQL, simplificando as operações de persistência de dados.
Docker: Utilizado para contêinerizar a aplicação, facilitando a implantação e o gerenciamento de dependências.

#Como Testar

1. Clone os Repositórios dentro do mesmo diretorio:

Front: git clone https://github.com/tuzolanacalueto/corelab-web-challenge
Back:  git clone https://github.com/tuzolanacalueto/corelab-api-challenge

2. Dentro do diretorio em que se clonou, deve colar o file docker-compose.yml(se encontra dentro do diretorio do frontend)  

3. Build e Start dos Contêineres:
docker-compose up --build

4. Acesso:

Frontend: Acesse http://localhost:3000
Backend: Acesse http://localhost:3333

