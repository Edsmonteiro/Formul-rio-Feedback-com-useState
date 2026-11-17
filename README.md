# Voz — Formulário de Feedback com React

Atividade 3: formulário de feedback com **React**, gerenciamento de estados usando **useState** e atualização em tempo real.

## Funcionalidades

- Nome, e-mail e comentário controlados por estados individuais iniciados com strings vazias.
- Avaliação de 1 a 5 estrelas, pré-visualização instantânea e contador de caracteres.
- Validações de campos obrigatórios e formato de e-mail.
- Envio demonstrativo com `window.alert()` exibindo os dados informados.
- Layout adaptado para computador e celular.

## Como executar

Requer Node.js 20+.

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite (normalmente http://localhost:5173).

## Organização

- `src/App.jsx`: estrutura da aplicação
- `src/components/FeedbackForm.jsx`: formulário e lógica com `useState`
- `src/App.css`: estilos responsivos

**Nota:** projeto didático, sem backend. Não são enviados e-mails nem armazenados dados em servidor.
