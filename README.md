# Portfólio Estático - Raphael Silveira e Silva

Este é um site de portfólio estático, pronto para ser hospedado gratuitamente no GitHub Pages.

## 🚀 Como Publicar no GitHub Pages

Siga estes passos para colocar seu site no ar.

### 1. Crie um Repositório no GitHub

- Vá para o [GitHub](https://github.com) e crie um **novo repositório público**.
- Nomeie o repositório como `seu-username.github.io`. Por exemplo, se seu nome de usuário for `raphael-silva`, o nome do repositório deve ser `raphael-silva.github.io`.
- **Não** inicialize com um README, .gitignore ou licença.

### 2. Envie os Arquivos do Projeto

Agora, vamos enviar os arquivos desta pasta (`RAPHAEL-SITE-PUBLIC`) para o repositório que você acabou de criar.

Abra um terminal ou Git Bash **dentro desta pasta** (`RAPHAEL-SITE-PUBLIC`) e execute os seguintes comandos, substituindo `seu-username` pelo seu nome de usuário do GitHub:

```bash
# Inicialize o git
git init

# Adicione todos os arquivos ao staging
git add .

# Crie o primeiro commit
git commit -m "🎉 Versão inicial do portfólio"

# Adicione o repositório remoto que você criou no GitHub
git remote add origin https://github.com/seu-username/seu-username.github.io.git

# Renomeie o branch principal para 'main'
git branch -M main

# Envie os arquivos para o GitHub
git push -u origin main
```

### 3. Aguarde a Publicação

É isso! O GitHub Pages ativará automaticamente o site para você.

- Aguarde alguns minutos.
- Seu site estará disponível em `https://seu-username.github.io`.

### Fazendo Alterações no Futuro

Se você quiser atualizar o site:
1.  Faça as alterações nos arquivos (`index.html`, `style.css`, etc.) nesta pasta.
2.  Abra o terminal na pasta `RAPHAEL-SITE-PUBLIC` e rode os comandos:
    ```bash
    git add .
    git commit -m "Descreva suas alterações aqui"
    git push origin main
    ```
As atualizações aparecerão no seu site em alguns instantes. 