# Repositório de Estudos: Cypress, do Zero à Nuvem

Neste repositório esta registrado uma parte da minha evolução em Automação de Testes End-to-End (E2E) com Cypress.
O objetivo é consolidar conceitos fundamentais e avançados de QA, focando em boas práticas de arquitetura de testes e cenários reais de uso.

---

## Stack Tecnológica

* **Cypress:** Framework de automação
* **JavaScript:** Linguagem de script
* **Node.js:** Ambiente de execução
* **Git/GitHub:** Versionamento e CI/CD

---

## Competências Técnicas Desenvolvidas

O que já fiz:

| Domínio | Implementação Prática |
| :--- | :--- |
| **Interação com Elementos** | Manipulação de inputs textuais, botões e validação de estados (mensagens de erro, campos obrigatórios). |
| **Seleção de Opções** | Automação de listas suspensas (Select), botões de rádio e caixas de seleção (Checkboxes), utilizando iterações em listas de elementos. |
| **Upload de Arquivos** | Testes de upload via input e simulação de Drag-and-Drop, utilizando Fixtures e Aliases para gerenciamento de massa de dados. |
| **Manipulação de DOM** | Tratamento de links externos (target="_blank") através da remoção de atributos HTML via invoke, permitindo testes de navegação na mesma aba. |
| **Arquitetura de Testes** | Criação de Comandos Customizados (Cypress.Commands) para encapsulamento de lógica repetitiva e uso de Hooks (beforeEach) para pré-condições. |
| **Responsividade** | Configuração de scripts para execução de testes simulando Viewports Mobile (410x860). |

---

## Instruções de Execução

Pré-requisito: Node.js instalado.

### 1. Instalação das dependências
```bash
npm install
```

### 2. Execução (Desktop)
Abre o Test Runner padrão do Cypress.
```bash
npm run cy:open
```

### 3. Execução (Mobile Viewport)
Abre o Test Runner simulando um dispositivo móvel.
```bash
npm run cy:open:mobile
```

### 4. Execução Headless
Executa a suíte de testes completa via terminal, sem interface gráfica.
```bash
npm run test
nom run test:mobile
```

---

## Contato

* **LinkedIn:** [gustavosmaniottodeoliveira](https://www.linkedin.com/in/gustavosmaniottodeoliveira)
* **Email:** gustavosmaniotto@outlook.com