# 📚 Repositório Dedicado aos Estudos: Cypress, do Zero à Nuvem

Aqui eu registro uma parte minha jornada de aprendizado em Automação de Testes com Cypress.

Com o objetivo  de construir uma base sólida para a transição de carreira para a área de QA, seguindo as melhores práticas e conceitos do mercado.

---

## Progresso atual: Lição 2 - Interagindo com Elementos

Até o momento, os seguintes conceitos foram aprendidos e aplicados em testes reais no projeto:

### ✅ Módulo 1 & 2: Fundamentos e Interação (Concluído)

| Conceito Abordado | Status | Implementação Prática |
| :--- | :--- | :--- |
| **Organização (Hooks)** | ✅ | Uso do **`beforeEach()`** para garantir o isolamento e reset do ambiente (`cy.visit()`) antes de cada teste. |
| **Comandos Essenciais** | ✅ | Utilização de `cy.get()`, `.type()`, `.click()`, e refatoração com **`cy.contains()`**. |
| **Validação Negativa** | ✅ | Criação de testes para rejeitar dados inválidos (e-mail, campo numérico) e validar mensagens de erro (`.error`). |
| **Validação de Estado** | ✅ | Uso de **`.check()`**, **`.uncheck()`**, **`.clear()`** e `.should('have.value', '')` para verificação de campos. |
| **Reutilização de Código** | ✅ | **Criação de Comandos Customizados** via **`Cypress.Commands.add`** para encapsular e reutilizar o preenchimento de formulário. |
| **Otimização de Testes** | ✅ | Aplicação do objeto `{ delay: 0 }` no `.type()` e uso de `Cypress._.repeat()` para performance. |
| **Fluxo Git Completo** | ✅ | Domínio da sequência `add -> commit -> push` e `pull` para sincronização em múltiplos dispositivos. |

---


---

## ⚙️ Execução dos Testes (Demonstração)

Para executar os testes implementados (Lição 2), use os comandos na pasta raiz do projeto:

1.  **Instalar Dependências:** `npm install`
2.  **Abrir o Test Runner:** `npm run cy:open`
3.  **Rodar em Terminal (Headless):** `npm test`

### Contato

* [linkedin.com/in/gustavosmaniottodeoliveira ](https://www.linkedin.com/in/gustavosmaniottodeoliveira)
* gustavosmaniotto@outlook.com