# Portal de Informática — Negócios Imobiliários

Portal estático preparado para o GitHub Pages, com as apresentações HTML da disciplina de Informática Básica do curso superior de Negócios Imobiliários do IFPB.

## Publicar no GitHub Pages

1. Crie um repositório chamado `informatica-basica-negocios-imobiliarios`.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch **main**, pasta **/(root)** e clique em **Save**.
6. Aguarde o endereço do portal aparecer na própria tela do GitHub Pages.

## Adicionar uma nova aula

1. Copie o novo slide HTML para a pasta `slides/`.
2. Abra `dados/aulas.js`.
3. Copie um dos blocos existentes e altere número, título, resumo, tópicos, data, quantidade de slides e nome do arquivo.
4. Use `status: "disponivel"` para publicar ou `status: "em-breve"` para manter o cartão visível sem link.
5. Deixe `destaque: true` somente na aula que deve aparecer como a mais recente.

Não é necessário alterar o `index.html` para acrescentar novas aulas.
