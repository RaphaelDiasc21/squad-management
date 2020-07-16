 - Teste técnico Squad management 

    - Linha de raciocinio
        - Fiz o teste me pautando pelas fases descrita no scrip do hackerRank
        - Implementando primeiramente todo o layout principal de forma responsiva
        - Logo após segui para o CRUD dos teams, junto com as validações dos campos digitados pelo o usuário,
        bem como implementar a funcionalidade das tags, confesso que me confundi bastante no fluxo explicado no hackerRank de como seria salvo as informações dos times, então tomei a liberdade de implementar um botão para qual o usuário é guiado a salvar as informações digitas e redirecionado para a página principal (Team board)
        - Por conta do tempo não consegui implementar a funcionalidade de adicionar jogadores, apenas iniciei o drag and drop utilizando a API nativa do browser para eventos de Drag e Drop
        - Consegui implementar também a funcionalidade de mundança no campo das posições dos jogadores, baseada na escolha de formação do usuário


    - Para aprimoramentos futuros, vejo que preciso terminar as funcionalidades pedidas.


      - Arquitetura e libs utilizads
          - Fiz o uso do bootstrap para o layout de algumas partes da aplicação, porém acabei nao utilizando o mesmo no layout do formulário por querer testar meus conhecimentos de css, visto que nessa parte eu julguei ser a que mais me exigiria isso.

          - Utilizei o Redux para o gerenciamento geral do estado a aplicação, onde guardo e gerencio as informações dos times ( código localizado na pasta State )  tento uma Store geral e utilizando os eventos de dispatch's para atualização do estado ao longo da aplicação 


