# Desafio 4 - Trilhas Inova 2B

Landing Page e Dashboard sobre a educação básica no Brasil.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Como Utilizar o Git no Projeto](#como-utilizar-o-git-no-projeto)
    - [1. Clonando o Repositório para sua Máquina](#1-clonando-o-repositório-para-sua-máquina)
    - [2. Adicionando Arquivos ao Stage](#2-adicionando-arquivos-ao-stage)
    - [3. Commitando as Alterações](#3-committing-as-alterações)
    - [4. Enviando as Alterações para o Repositório Remoto (Push)](#4-enviando-as-alterações-para-o-repositório-remoto-push)
    - [5. Obtendo as Alterações do Repositório Remoto (Pull)](#5-obtendo-as-alterações-do-repositório-remoto-pull)
- [Colaboradores](#colaboradores)

## Pré-requisitos

Antes de começar, certifique-se de ter o [Git](https://git-scm.com/) instalado em sua máquina. Você pode verificar a instalação abrindo o terminal ou prompt de comando e digitando:

```bash
git --version
```

## Como Utilizar o Git no Projeto

### 1. Clonando o repositório para sua máquina

Navegue até a pasta onde deseja clonar o repositório e abra o terminal no seu computador. Clone o repositório usando o comando git clone:

```bash
git clone https://github.com/KayroBrasil/desafio4_trilhas2B.git
```

### 2. Adicionando Arquivos ao Stage

Após fazer alterações nos seus arquivos (criar, modificar ou deletar), você precisa adicionar essas alterações ao "stage" do Git. O stage é como uma área de preparação para o seu próximo commit. Para adicionar todos os arquivos modificados e não rastreados, use o comando:

```bash
git add .
```

Se você quiser adicionar arquivos específicos, pode usar:

```bash
git add nome_do_arquivo.txt outro_arquivo.py
```

Para verificar quais arquivos estão no stage, você pode usar:

```bash
git status
```

### 3. Commitando as Alterações

Depois de adicionar os arquivos ao stage, o próximo passo é "commitar" essas alterações. Um commit é como um instantâneo do seu projeto em um determinado momento. É importante escrever mensagens de commit claras e concisas, descrevendo as alterações realizadas. Para commitar, use o comando:

```bash
git commit -m "Adicione uma mensagem clara sobre as suas alterações aqui"
```

### 4. Enviando as Alterações para o Repositório Remoto (Push)

Com o repositório local vinculado ao remoto, você pode enviar seus commits para o GitHub usando o comando git push:

```bash
git push origin main
```

### 5. Obtendo as Alterações do Repositório Remoto (Pull)

Antes de inciar qualquer alteração no projeto, você precisará trazer os dados do repositório remoto para o seu repositório local. Isso é feito com o comando git pull:

```bash
git pull origin main
```

## Colaboradores

<div>
    <a href="https://github.com/analuciamendonca">
        <img loading="lazy" src="https://avatars.githubusercontent.com/u/205576159?v=4" width="115"><br><sub>Ana Lúcia Mendonça</sub><br>
    </a>
</div>
<div>
    <a href="https://github.com/ayrtonantunes1">
        <br><img loading="lazy" src="https://avatars.githubusercontent.com/u/203921396?v=4" width="115"><br><sub>Ayrton Antunes</sub>
    </a>
</div>
<div>
    <a href="https://github.com/kayrobrasil">
        <br><img loading="lazy" src="https://avatars.githubusercontent.com/u/1686702?v=4" width="115"><br><sub>Kayro Brasil</sub>
    </a>
</div>
<div>
    <a href="https://github.com/monteirocristinny">
        <br><img loading="lazy" src="https://avatars.githubusercontent.com/u/198838121?v=4" width="115"><br><sub>Sarah Monteiro</sub>
    </a>
</div>
