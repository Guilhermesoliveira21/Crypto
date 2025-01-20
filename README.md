# CryptoX

## Introdução

Este projeto é uma aplicação frontend focada no mercado de criptomoedas. Ele fornece uma experiência intuitiva para os usuários visualizarem as melhores criptomoedas do momento, analisarem seus gráficos e realizarem compras de forma simples e eficaz.

O sistema começa com uma landing page que direciona os usuários a criarem uma conta ou realizarem login. Uma vez autenticados, os usuários têm acesso a diversas funcionalidades relacionadas à visualização e compra de criptomoedas.

---

## Funcionalidades

### 1. **Landing Page**

- Uma interface moderna e atrativa para a página inicial.
- Opções para o usuário criar uma conta ou fazer login.

### 2. **Dashboard**

- Visualização das melhores criptomoedas do mercado.
- Gráficos interativos gerados com **Chart.js** que exibem o desempenho da moeda no dia.

### 3. **Compra de Criptomoedas**

- O usuário pode informar a moeda desejada e o valor que deseja comprar.
- Após a compra, o sistema calcula automaticamente as frações adquiridas da moeda.
- Possibilidade de comprar múltiplas moedas e gerenciar seu portfólio.

### 4. **Cálculo de Frações**

- Após a confirmação da compra, o sistema calcula as frações com base no valor investido e no preço atual da moeda.
- Exibição clara e detalhada das frações para cada moeda adquirida.

### 5. **Notificações e Feedback**

- Uso do **React Toastify** para exibir mensagens amigáveis ao usuário, como confirmações de ações e alertas de erro.

---

## Tecnologias Utilizadas

### **Bibliotecas Principais**

- **React.js**: Framework JavaScript para construção da interface do usuário.
- **React Router Dom**: Gerenciamento de rotas para navegação no sistema.
- **Context API**: Gerenciamento de estado global da aplicação.
- **Styled Components**: Estilização de componentes com suporte a temas dinâmicos.
- **Chart.js**: Renderização de gráficos dinâmicos e responsivos.
- **React Spinners**: Indicadores de carregamento.
- **Axios**: Consumo de APIs.
- **React Toastify**: Exibição de mensagens de feedback.

### **Página**

## **Landing Page**
![image](https://github.com/user-attachments/assets/97b19a96-66de-41df-972c-321ce9140ca9)

## **Dashboard**
![image](https://github.com/user-attachments/assets/11042a77-8b8a-408f-aef4-c6f0d69ff528)

## **Gráficos**
![crypto02](https://github.com/user-attachments/assets/65c1192f-7673-487f-a6bb-db628e133056)


### **API Consumida**

A API utilizada neste projeto foi desenvolvida em Node.js e fornece os dados de mercado das criptomoedas, como:

- Lista das melhores criptomoedas.
- Preços e variações diárias.
- Registro de compras realizadas pelos usuários.

Link Backend:  

# Como Rodar o Projeto

## npm install

## npm run dev
