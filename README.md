<div align="center">

  ![Escaneou! Logo](https://img.shields.io/badge/Escaneou!-QR%20Code%20Generator-blue?style=for-the-badge)
  
  # 🎯 Escaneou! - Gerador de QR Code Online

  [![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  **Crie QR Codes personalizados de forma rápida e fácil**

  [Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Sobre o Projeto

O **Escaneou!** é uma aplicação web moderna para geração e compartilhamento de QR Codes. Desenvolvido com as mais recentes tecnologias do ecossistema React, oferece uma experiência de usuário fluida e intuitiva com design contemporâneo.

### ✨ Funcionalidades Principais

- 🎨 **Design Moderno**: Glassmorphism, gradientes sutis e animações fluidas
- 🌓 **Dark/Light Mode**: Toggle de tema com persistência no localStorage
- 📱 **100% Responsivo**: Funciona perfeitamente em qualquer dispositivo
- 🔄 **Histórico**: Últimos 5 QR Codes gerados salvos automaticamente
- 🎯 **Compartilhamento**: Telegram, WhatsApp, Facebook e Twitter
- 💾 **Download**: QR Codes em alta qualidade (500x500px)
- ⚡ **Feedback Visual**: Loading states animados e micro-interações
- 🔍 **SEO Otimizado**: Metadados completos para indexação no Google

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15.1.7](https://nextjs.org/)** - React Framework com App Router e Turbopack
- **[React 19](https://react.dev/)** - Biblioteca UI com Hooks e Suspense
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion 12.4.7](https://www.framer.com/motion/)** - Animações declarativas
- **[React Hook Form 7.54.2](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[React Rewards 2.1.0](https://github.com/miukimiu/react-rewards)** - Efeitos de confete

### APIs Externas
- **[GoQR.me API](https://goqr.me/api/)** - Geração de QR Codes

---

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Clonar o Repositório

```bash
git clone https://github.com/miguelito/escaneou.git
cd escaneou
```

### Instalar Dependências

```bash
npm install
# ou
yarn install
```

### Rodar em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

---

## 📂 Estrutura do Projeto

```
escaneou/
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   ├── components/
│   │   │   │   ├── Form.tsx          # Formulário de geração
│   │   │   │   ├── Hero.tsx          # Hero section com logo
│   │   │   │   ├── Header.tsx        # Header fixo com navegação
│   │   │   │   ├── Footer.tsx        # Footer minimalista
│   │   │   │   └── ShareQRCode.tsx  # Botões de compartilhamento
│   │   │   └── page.tsx             # Página principal
│   │   ├── layout.tsx                # Layout raiz com SEO
│   │   └── globals.css               # Estilos globais e customizações
│   └── ...
├── tailwind.config.ts                # Configuração do Tailwind
├── next.config.ts                    # Configuração do Next.js
├── tsconfig.json                     # Configuração do TypeScript
└── package.json                      # Dependências e scripts
```

---

## 🎨 Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#0ea5e9` → `#d946ef` | Gradiente principal |
| Success | `#22c55e` | Ações de sucesso |
| Dark BG | `#0a0a0a` | Fundo dark mode |
| Light BG | `#f8fafc` | Fundo light mode |

### Tipografia

- **Montserrat**: Headings e logo
- **Outfit**: Textos descritivos e labels
- **Inter**: Corpo de texto

### Componentes Customizados

#### `.glass-card`
Cards com efeito glassmorphism:
```tsx
<div className="glass-card rounded-3xl p-8">
  {/* conteúdo */}
</div>
```

#### `.btn-primary`
Botão principal com gradiente:
```tsx
<button className="btn-primary">
  <FaSearch />
  <span>Gerar</span>
</button>
```

#### `.input-modern`
Input moderno com focus effects:
```tsx
<input className="input-modern" placeholder="Digite seu texto..." />
```

---

## 🔧 Funcionalidades Implementadas

### 1. **Dark/Light Mode** 
- Toggle persistente no localStorage
- Transições suaves entre temas
- Adaptação automática de todos os componentes

### 2. **Histórico de QR Codes**
- Últimos 5 QR Codes salvos
- Clique rápido para reutilizar
- Persistência no localStorage

### 3. **Compartilhamento Social**
- Telegram, WhatsApp, Facebook, Twitter
- URLs otimizadas para cada plataforma
- Animações de hover e tap

### 4. **Download de QR Code**
- Alta qualidade (500x500px)
- Nome único com timestamp
- Download direto sem preview

### 5. **SEO Otimizado**
- Metadata completa (title, description, keywords)
- Open Graph para redes sociais
- Twitter Cards
- Robots configurados
- Sitemap e canonical URLs

---

## 🎯 Roadmap

- [ ] Customização de cores do QR Code
- [ ] Diferentes tamanhos de QR Code
- [ ] Templates (vCard, WiFi, Email, etc.)
- [ ] Upload de logo para centro do QR Code
- [ ] Download em SVG e PDF
- [ ] Scan de QR Code (upload de imagem)
- [ ] PWA para instalação mobile
- [ ] Analytics de uso
- [ ] Testes E2E com Playwright

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Commit Conventions

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, ponto e vírgula, etc.
- `refactor:` refatoração de código
- `test:` adicionando testes
- `chore:` atualização de build, configs, etc.

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Miguel Riquelme**

- GitHub: [@miguelito](https://github.com/miguelito)
- Portfólio: [miguelito.dev](https://miguelito.dev)

---

<div align="center">

  ⭐ Se este projeto foi útil, considere dar uma estrela!

  Feito com ❤️ por Miguel Riquelme

</div>