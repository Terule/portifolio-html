# Exercício: Recriando o Portfólio com HTML, CSS e JS Puro

Este arquivo documenta o exercício de recriar um portfólio moderno, originalmente desenvolvido com tecnologias como **Next.js**, **React** e **Tailwind CSS**, utilizando apenas as tecnologias fundamentais da web: **HTML5**, **CSS3** e **JavaScript (Vanilla)**.

## 🎯 Objetivo

O objetivo deste exercício é demonstrar a capacidade de construir interfaces modernas e funcionais sem a dependência de frameworks ou bibliotecas pesadas, reforçando o entendimento dos conceitos base do desenvolvimento web.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para toda a estilização, layout responsivo (Flexbox/Grid) e animações, substituindo o Tailwind CSS.
* **JavaScript (Vanilla):** Para a lógica de renderização dinâmica de dados (projetos e tech stack) e interatividade (carrossel), substituindo o React.

## 🚀 Funcionalidades Recriadas

Abaixo, uma comparação de como as funcionalidades do projeto original foram adaptadas para a versão Vanilla:

| Funcionalidade | Implementação Original (Next.js/React) | Implementação Vanilla (HTML/CSS/JS) |
| :--- | :--- | :--- |
| **Componentização** | Componentes React (`<ProjectCard />`, `<Badge />`) | Funções JavaScript que criam elementos DOM (`document.createElement`) e injetam no HTML. |
| **Estilização** | Classes utilitárias do Tailwind CSS | CSS puro com variáveis CSS (`var(--color-name)`) para manter o tema e consistência. |
| **Ícones** | Biblioteca `react-icons` (SVG via JS) | SVGs inline diretamente no HTML/CSS para otimização e zero dependências externas. |
| **Carrossel** | Biblioteca `embla-carousel-react` | CSS Scroll Snap (`scroll-snap-type`) nativo do navegador + JS simples para botões de navegação. |
| **Animações** | `framer-motion` ou classes `animate-` do Tailwind | CSS `@keyframes` e transições nativas (`transition: all 0.3s`). |
| **Dados** | Arrays de objetos no componente React | Arrays de objetos no arquivo `script.js` renderizados via loop. |

## 📂 Estrutura de Arquivos

* `index.html`: Estrutura principal da página.
* `style.css`: Folha de estilos contendo reset, variáveis de cores e regras de layout.
* `script.js`: Lógica para popular o conteúdo dinamicamente e controlar a interatividade.

## 🧠 Aprendizados Chave

Este exercício destaca:
1.  **Manipulação do DOM:** Como criar e inserir elementos na página via JavaScript.
2.  **CSS Moderno:** O poder das variáveis CSS e do Scroll Snap para criar layouts complexos sem plugins.
3.  **Performance:** A leveza de uma página sem o peso de frameworks JavaScript.
4.  **Fundamentos:** Entender como as abstrações (React, Tailwind) funcionam "por baixo do capô".