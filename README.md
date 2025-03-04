# Banco de Dados
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

* Script do Banco de Dados
* Informações de uso

## Guia de Instalação e Uso do MongoDB no Windows

Este guia descreve o processo de instalação e uso do MongoDB no Windows.

### Passo 1: Baixar o MongoDB

1. Acesse o site oficial do MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Escolha a versão mais recente do MongoDB (a versão mais recente está disponível para Windows).
3. Selecione o tipo de instalador adequado para sua versão do Windows (geralmente, o "MSI" é o recomendado).
4. Clique em **Download** para baixar o arquivo de instalação.

### Passo 2: Instalar o MongoDB

1. Após o download, execute o arquivo `.msi` para iniciar o processo de instalação.
2. Siga as instruções do instalador:
   - Escolha a opção **Complete** para instalar todos os recursos.
   - Durante o processo de instalação, será oferecida a opção de instalar o MongoDB como um **Serviço do Windows**. Isso permite que o MongoDB seja executado automaticamente quando o computador for iniciado.
   - Deixe marcada a opção "Install MongoDB Compass" para instalar a interface gráfica do MongoDB (opcional, mas recomendada).
3. Clique em **Next** e depois em **Install** para finalizar a instalação.

### Passo 3: Configurar o MongoDB (caso não tenha sido configurado automaticamente)

1. O MongoDB deve ser instalado por padrão em `C:\Program Files\MongoDB\Server\X.X\` (onde `X.X` é a versão).
2. Crie a pasta `data\db` no seu diretório raiz (`C:\data\db`) para armazenar os arquivos de dados do MongoDB.
   - Abra o **Explorador de Arquivos**.
   - Crie o diretório `C:\data\db` manualmente, caso ele não tenha sido criado automaticamente.

### Passo 4: Iniciar o MongoDB

1. Abra o **Prompt de Comando** (cmd) ou **PowerShell** como Administrador.
2. Digite o seguinte comando para iniciar o servidor do MongoDB:

   ```bash
   "C:\Program Files\MongoDB\Server\X.X\bin\mongod.exe"
