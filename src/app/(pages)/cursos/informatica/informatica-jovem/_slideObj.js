const slideObj = [
  {
    nome: 'Introdução',

    imgUrl: 'modulo-introducao.png',

    resumo: `
   <p>
  Informática é um termo abrangente; por isso, criamos um módulo que proporciona ao aluno uma visão ampla sobre terminologias, a história do computador e conceitos fundamentais, como a estrutura dos computadores, peças básicas e sua disposição, além de noções sobre: componentes eletrônicos, sistema binário e a transmissão de dados.
</p>

        `,
    c_pragmatico: `
            <li>Origem da Informática</li>
            <li>Definição de um Computador</li>
            <li>O Uso da Tecnologia</li>
            <li>Tipos de Computadores</li>
            <li>Nomenclaturas e Terminologias</li>
            <li>Sistema Computacional</li>
            <li>Hardwares e Softwares</li>
            <li>Nomenclaturas e Terminologias</li>

        `

  },
  {
    nome: 'Windows 10',
    imgUrl: 'modulo-windows.png',

    resumo: `
       <p>
        Neste módulo, desenvolveremos habilidades essenciais para um uso ágil do Windows 10, explorando ferramentas, atalhos práticos,  
        instalação e desinstalação de programas, além de gerenciamento e manutenção do sistema.
        </p>
        <p>Abordamos desde conceitos fundamentais até a personalização e otimização de desempenho, incluindo PowerShell, 
        configuração de rede e do sistema.
    </p>
        `,
    c_pragmatico: `
           
        <li>Introdução ao Windows 10</li>
        <li>Área de Trabalho</li>
        <li>Explorador de Arquivos</li>
        <li>Menu Iniciar</li>
        <li>Uso de Pastas e Arquivos</li>
        <li>Armazenamento</li>
        <li>Configurações</li>
        <li>Arquivos e Pastas</li>
        <li>Uso da Lixeira</li>
        <li>Restauração</li>
        <li>Aplicativos e Programas</li>
        <li>Atualização e Segurança</li>
        <li>Personalização</li>
        <li>Configuração</li>
        <li>Ferramentas do Sistema</li>
        <li>Painel de Controle</li>
        <li>Manutenção do Sistema</li>
        <li>Gerenciamento de Programas</li>
        <li>Instalação e Formatação</li>
        <li>Múltiplas Áreas de Trabalho</li>
        <li>Extensões de Arquivos</li>
        <li>Arquivos e Pastas Ocultas</li>
        <li>Prompt de Comando (CMD)</li>
        <li>Explorador Avançado</li>
        <li>Editor de Registro</li>
        <li>Acesso Remoto</li>
        <li>Máquinas Virtuais</li>
       
        `

  },

  {
    nome: 'Pacote Office',
    resumo: `
            <p>
            Direcionamos uma atenção especial ao pacote Office, que é considerado um dos requisitos essenciais do mercado de trabalho. 
            Neste módulo, os alunos aprendem de maneira simples e direta, por meio de exemplos práticos e aplicáveis, 
            os aplicativos Microsoft: Word, Excel, PowerPoint e Outlook. Abordamos técnicas avançadas de formatação, automação, 
            análise de dados, criação de apresentações e gerenciamento avançado de e-mails.
            </p>
        `,
    imgUrl: 'modulo-office-avancado.png',
    c_pragmatico: `
                    
                    <span className="span_office">
                    
                    <h4>Word</h4>
                   <li>Introdução</li>
                    <li>Interface</li>
                    <li>Cabeçalho e Rodapé</li>
                    <li>Formatação de Texto</li>
                    <li>Orientação de Página</li>
                    <li>Layout de Página</li>
                    <li>Inserção de Imagens</li>
                    <li>Área de Transferência</li>
                    <li>Armazenamento de Arquivos</li>
                    <li>Templates de Documento</li>
                    <li>Formatação de Currículos</li>
                    <li>Listas</li>
                    <li>Tabulação de Mala Direta</li>
                    <li>Sumário Automático</li>
                    <li>Normas ABNT</li>
                    <li>Design de Página</li>
                    <li>Formatação com Estilo</li>
                    <li>Teclado de Atalho</li>
                    <li>Inserindo Objetos</li>
                    <li>Formas 3D</li>
                    <li>Trabalhando com Documentos</li>
                    <li>Corretor Ortográfico</li>
                    <li>Modo de Exibição</li>
                    <li>Recurso Diga-me</li>
                  </span>


                  <span className="span_office">
                
                    <h4>Excel</h4>
                
                    <li>Interface</li>
                    <li>Área de Transferência</li>
                    <li>Modo de Exibição</li>
                    <li>Layout de Página</li>
                    <li>Pastas de Trabalho</li>
                    <li>Conceito de Planilhas</li>
                    <li>Conceitos de Tabelas</li>
                    <li>Navegação</li>
                    <li>Inserção de Informações</li>
                    <li>Operações Aritméticas</li>
                    <li>Personalização de Tabelas</li>
                    <li>Formatar como Tabela</li>
                    <li>Formatações Condicionais</li>
                    <li>Manipulação de Gráficos</li>
                    <li>Mini Gráficos</li>
                    <li>Trabalhando com Planilhas</li>
                    <li>Trabalhando com Tabelas</li>
                    <li>Tabela Dinâmica</li>
                    <li>Funções Condicionais</li>
                    <li>Fórmulas e Funções</li>
                    <li>Hyperlinks</li>
                    <li>Funções Financeiras</li>
                    <li>Cálculo com Data e Hora</li>
                    <li>Atalhos</li>
                    <li>Seleção Inteligente</li>
                    <li>Filtro e Classificação</li>
                    <li>Impressão de Relatórios</li>

                  </span>


                  <span className="span_office">

                    <h4>PowerPoint</h4>

                    <li>Introdução ao PowerPoint</li>
                    <li>Interface</li>
                    <li>Modo de Apresentação</li>
                    <li>Modo de Edição</li>
                    <li>Criação de Slides</li>
                    <li>Efeito de Animação</li>
                    <li>Efeito de Transição</li>
                    <li>Design de Slide</li>
                    <li>Inserção de Objetos</li>
                    <li>Inserção de Vídeos</li>
                    <li>Objetos 3D</li>
                    <li>Gravação de Slides</li>
                    <li>Apresentação em Vídeo</li>
                    <li>Hyperlinks</li>
                    <li>Telas Compartilhadas</li>
                    <li>Teclas de Atalhos</li>
                    <li>Dicas de Apresentação</li>
                    <li>Dicas de Seminários</li>
                  </span>

                 <span className="span_office">
                   
                    <h4>Outlook</h4>
                   
                    <li>Gerenciamento de E-mails</li>
                    <li>Organização de Calendários</li>
                    <li>Tarefas e Lembretes</li>
                    <li>Contatos Avançados</li>
                    <li>Integração com Aplicativos</li>
                    <li>Configuração de Conta</li>
                  </span>
                  `

  },

  {
    nome: 'Power BI',
    imgUrl: 'modulo-powerbi.png',

    resumo: `
<p>
  O módulo de Power BI, na nossa etapa avançada do curso, 
  ensina aos alunos a utilizarem eficientemente essa ferramenta para análise de dados. 
  Eles aprenderão a importar, transformar e visualizar dados, construir modelos de dados, 
  criar relatórios dinâmicos e interativos, além de explorar a integração com outras ferramentas Microsoft,
   transformando dados em insights valiosos para a tomada de decisões.
</p>


             `,
    c_pragmatico: `
<li>Importação de Dados</li>
<li>Transformação de Dados</li>
<li>Visualização de Dados</li>
<li>Construção de Modelos de Dados</li>
<li>Criação de Relatórios Dinâmicos e Interativos</li>
<li>Medidas Personalizadas</li>
<li>Criação de Painéis Informativos</li>
<li>Integração do Power BI com Outras Ferramentas Microsoft</li>
<li>Fluxo de Trabalho Eficiente</li>
<li>Utilização Avançada do Power BI</li>

            `

  },

  {
    nome: 'Impressoras',

    imgUrl: 'modulo-impressao.png',

    resumo: `
<p>
  O aluno aprenderá a escanear documentos e imagens, bem como transferir seus arquivos de forma 
  eficiente via e-mail, celular ou computador para impressão. Discutiremos os formatos de arquivos mais 
  adequados para diferentes finalidades, o que inclui entender a importância do formato de cores CMYK. 
  Além disso, abordaremos a resolução de imagens e a 
   configuração de pixels por polegada (DPI).
    
</p>


       `,
    c_pragmatico: `
            <li>O que são Impressoras</li>
<li>Tipos de Impressoras</li>
<li>Como Imprimir</li>
<li>Arquivos para Impressão</li>
<li>Como Escanear</li>
<li>Tipos de Papel</li>
<li>Configurações</li>
<li>Instalação da Impressora</li>
<li>DPI - (Pixels por Polegada)</li>
        `

  },
  {
    nome: 'Interfaces',

    imgUrl: 'modulo-dispositivos.png',

    resumo: `
<p>
  O aluno aprenderá, além de digitação, a utilizar diferentes interfaces de entrada, como o touchpad e o funcionamento de telas 
  touchscreen. Este módulo abordará o padrão QWERTY, que é fundamental para a digitação eficiente em teclados. 
  Além disso, discutiremos as funcionalidades de teclados e mouses, bem como o uso de microfones e a interação com telas e 
  monitores.
  </p>


        
        `,
    c_pragmatico: `
           <li>Digitação</li>
<li>Padrão QWERTY</li>
<li>Teclado e Mouse</li>
<li>Telas e Monitores</li>
<li>Microfones</li>
<li>Telas Touchscreen</li>
<li>Touchpad</li>
<li>Exploração de Tecnologias Emergentes</li>
<li>Uso de Atalhos de Teclado</li>
        `

  },

  {
    nome: 'Redes',

    imgUrl: 'modulo-redes.png',

    resumo: `
<p>
  Nesse módulo, o aluno é apresentado ao funcionamento de redes de computadores, 
  explorando tanto os conceitos fundamentais quanto os equipamentos essenciais, como hubs, 
  switches e roteadores. O curso também abordará a crimpagem de cabos, 
  uma habilidade prática importante para quem deseja montar ou reparar redes. 
   
  Além disso, discutiremos o compartilhamento de arquivos, a configuração de endereços IP (IPv4) e 
  como criar uma rede doméstica funcional e segura.
</p>

        `,
    c_pragmatico: `
<li>Introdução a Rede</li>
<li>Modems, Roteadores e Switches</li>
<li>Equipamentos Secundários</li>
<li>Compartilhamento de Arquivos</li>
<li>Conexão</li>
<li>Grupo de Trabalho</li>
<li>Terminologias</li>
<li>Configuração de IP / IPv4</li>
<li>Cabeamento</li>
<li>Criação de Rede Doméstica</li>
<li>Crimpagem</li>




        `

  },
  {
    nome: 'Internet',

    imgUrl: 'modulo-internet.png',

    resumo: `
<p>
  Neste módulo, o aluno aprenderá boas práticas e terminologias essenciais sobre a internet, 
  incluindo conceitos como download, upload, e-mails, cookies e o protocolo HTTP, 
  além de explorar a Internet das Coisas (IoT).
  Cobriremos também o funcionamento do HTTP, além de tópicos mais avançados, como endereços IP, segurança contra malwares, 
  o papel dos cookies, extensões e personalização de navegadores.
</p>


`,
    c_pragmatico: `
    <li>Introdução a Terminologias</li>
<li>Navegadores</li>
<li>Email</li>
<li>Sites</li>
<li>Download e Upload</li>
<li>Pesquisas</li>
<li>Atalhos</li>
<li>Uso de Emails</li>
<li>Aplicativos Online</li>
<li>HTTP</li>
<li>Pesquisas Avançadas</li>
<li>Links</li>
<li>IP</li>
<li>IoT (Internet das Coisas)</li>
<li>Conceitos de Nuvem</li>
<li>Malwares e Vírus</li>
<li>Cookies</li>
<li>Extensões</li>
<li>Personalização de Navegadores</li>
<li>Conceito de Servidores</li>
<li>Contas Integradas</li>
<li>Acesso Remoto</li>

        `
  },
  {
    nome: 'Hardware',

    imgUrl: 'modulo-hardware.png',

    resumo: `
<p>
  Nesse módulo, entenderemos as funções específicas de cada componente de hardware, explorando quais são recomendados para upgrades. Discutiremos também funcionalidades mais avançadas, como a troca de peças e a detecção de mau funcionamento dos componentes. O objetivo é capacitar os alunos a diagnosticar problemas, realizar manutenções eficazes e otimizar o desempenho do computador. Além disso, abordaremos normas de segurança essenciais para garantir que os alunos realizem essas tarefas de forma segura e eficiente.
</p>>


      `,
    c_pragmatico: `
        
<li>Introdução a Hardware</li>
<li>Instalação de Dispositivos</li>
<li>Instalação de Periféricos</li>
<li>Normas de Segurança</li>
<li>Estrutura Básica da Placa Mãe</li>
<li>Conceito de HD e SSD</li>
<li>Conceito de Memória RAM</li>
<li>Conceito de Processadores</li>
<li>Fontes e Alimentação da CPU</li>
<li>Dicas de Compra de Equipamentos</li>
<li>Arquiteturas de CPU</li>
<li>Conceitos de GPU e NPU</li>
<li>Funcionalidades e Tecnologias</li>
<li>Montagem de Computadores</li>



        `

  },

]

export default slideObj;