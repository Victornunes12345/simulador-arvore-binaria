🚀 Simulador de Árvore Binária de Busca (ABB) - Interativo e Moderno

Bem-vindo ao repositório do Simulador de Árvore Binária de Busca (ABB)! Este projeto é uma ferramenta interativa e visualmente atraente desenvolvida em JavaScript, utilizando a biblioteca p5.js, para ajudar no aprendizado e na exploração das operações fundamentais de uma Árvore Binária de Busca.

Com uma interface gráfica intuitiva e animações fluidas, este simulador permite que você visualize a criação, manipulação e travessia de uma ABB de forma dinâmica, tornando conceitos complexos de estrutura de dados mais acessíveis e compreensíveis.

✨ Funcionalidades Principais

Este simulador oferece uma gama completa de operações e visualizações para uma ABB:

•
Inserção de Nós: Adicione novos valores à árvore, observando o processo de inserção e o ajuste automático do layout para evitar sobreposição de nós.

•
Remoção de Nós: Remova valores existentes da árvore, com a reestruturação da ABB sendo visualizada em tempo real.

•
Busca de Valores: Procure por valores específicos na árvore, com o caminho percorrido destacado visualmente para facilitar a compreensão do algoritmo de busca.

•
Travessias da Árvore: Execute e visualize as três principais formas de travessia:

•
Em Ordem (Inorder): Percorre a árvore da esquerda para a direita, resultando em uma lista ordenada dos valores.

•
Pré-Ordem (Preorder): Visita o nó raiz primeiro, depois a subárvore esquerda e, por fim, a subárvore direita.

•
Pós-Ordem (Postorder): Visita a subárvore esquerda, depois a subárvore direita e, por fim, o nó raiz.



•
Buscas em Largura (BFS): Explore a árvore nível por nível, destacando os nós visitados na ordem correta.

•
Buscas em Profundidade (DFS): Realize uma busca aprofundada, seguindo um caminho até o final antes de retroceder, com a visualização do caminho percorrido.

•
Limpeza da Árvore: Reinicie o simulador a qualquer momento, limpando toda a árvore para novas experimentações.

•
Feedback Interativo: Mensagens claras e visuais (com emojis) informam o resultado de cada operação, como inserção bem-sucedida, valor encontrado/não encontrado, e o caminho percorrido nas buscas.

🎨 Design e Experiência do Usuário

O simulador foi aprimorado com um design moderno e responsivo para proporcionar uma experiência de usuário superior:

•
Interface Intuitiva: Layout limpo e fácil de usar, com botões e campos de entrada bem definidos.

•
Estilo Visual Aprimorado: Utiliza gradientes suaves, efeitos de glassmorphism (vidro fosco) nos contêineres e sombras sutis para um visual profissional e contemporâneo.

•
Tipografia Moderna: A fonte 'Inter' foi escolhida para garantir legibilidade e um toque moderno.

•
Animações e Transições: Elementos da interface e os próprios nós da árvore apresentam animações e transições suaves, tornando a interação mais dinâmica e agradável.

•
Responsividade Completa: O layout se adapta perfeitamente a diferentes tamanhos de tela, desde desktops até dispositivos móveis, garantindo uma experiência consistente em qualquer aparelho.

🌐 Funcionalidade Offline

Uma das grandes melhorias deste projeto é a sua capacidade de funcionar completamente offline. A biblioteca p5.js, que é essencial para a renderização gráfica da árvore, foi incluída localmente no repositório. Isso significa que:

•
Não é Necessária Conexão com a Internet: Você pode executar o simulador em qualquer lugar, a qualquer momento, sem depender de uma conexão ativa.

•
Carregamento Rápido: A ausência de requisições a CDNs externas resulta em um carregamento mais rápido da aplicação.

•
Maior Confiabilidade: Elimina a dependência de serviços de terceiros, garantindo que o simulador funcione mesmo que as CDNs estejam indisponíveis.

🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

•
HTML5: Estrutura semântica da página web.

•
CSS3: Estilização e design responsivo, incluindo gradientes, sombras e efeitos visuais modernos.

•
JavaScript (ES6+): Lógica principal do simulador, implementação dos algoritmos de ABB e manipulação do DOM.

•
p5.js: Biblioteca JavaScript para criação de gráficos e animações, utilizada para desenhar a árvore binária de forma interativa.

🚀 Como Usar o Simulador

Para começar a usar e experimentar o simulador em seu próprio computador, siga os passos abaixo:

1. Clonar o Repositório

Primeiro, você precisará clonar este repositório para o seu ambiente local. Certifique-se de ter o Git instalado em seu sistema.

Abra o seu terminal ou prompt de comando e execute o seguinte comando:

Bash


git clone https://github.com/Victornunes12345/simulador-arvore-binaria.git


Este comando criará uma nova pasta chamada simulador-arvore-binaria em seu diretório atual, contendo todos os arquivos do projeto.

2. Navegar até o Diretório do Projeto

Após clonar o repositório, navegue até a pasta do projeto usando o comando:

Bash


cd simulador-arvore-binaria


3. Abrir o Simulador no Navegador

Com os arquivos do projeto em seu computador, você pode abrir o simulador diretamente no seu navegador web. Existem duas maneiras principais de fazer isso:

•
Duplo Clique: Localize o arquivo index.html dentro da pasta simulador-arvore-binaria e dê um duplo clique nele. Seu navegador padrão deverá abri-lo automaticamente.

•
Arrastar e Soltar: Alternativamente, você pode arrastar o arquivo index.html diretamente para a janela ou aba do seu navegador web.

O simulador será carregado e estará pronto para uso, sem a necessidade de um servidor web local, graças à sua funcionalidade offline.

💡 Dicas de Uso

•
Experimente inserir diferentes sequências de números para observar como a árvore se forma e se reajusta.

•
Teste as operações de busca e travessia para entender melhor como os algoritmos funcionam.

•
Use a função de limpeza para reiniciar e experimentar com diferentes configurações de árvore.

•
Observe as mensagens de feedback para entender o resultado de cada operação.

•
Teste a responsividade abrindo o simulador em diferentes dispositivos ou redimensionando a janela do navegador.

📚 Conceitos de Estrutura de Dados Abordados

Este simulador é uma excelente ferramenta educacional que aborda diversos conceitos fundamentais de estruturas de dados:

Árvore Binária de Busca (ABB)

Uma Árvore Binária de Busca é uma estrutura de dados hierárquica onde cada nó possui no máximo dois filhos, comumente chamados de filho esquerdo e filho direito. A propriedade fundamental de uma ABB é que, para qualquer nó:

•
Todos os valores na subárvore esquerda são menores que o valor do nó.

•
Todos os valores na subárvore direita são maiores que o valor do nó.

Esta propriedade permite operações de busca, inserção e remoção eficientes, com complexidade de tempo O(log n) no caso médio.

Algoritmos de Travessia

O simulador implementa os três principais algoritmos de travessia de árvores binárias:

1.
Travessia Em Ordem (Inorder): Visita primeiro a subárvore esquerda, depois o nó atual e, por fim, a subárvore direita. Em uma ABB, esta travessia resulta em uma sequência ordenada dos valores.

2.
Travessia Pré-Ordem (Preorder): Visita primeiro o nó atual, depois a subárvore esquerda e, por fim, a subárvore direita. Útil para criar uma cópia da árvore ou para serialização.

3.
Travessia Pós-Ordem (Postorder): Visita primeiro a subárvore esquerda, depois a subárvore direita e, por fim, o nó atual. Útil para deletar a árvore ou calcular o tamanho de cada subárvore.

Algoritmos de Busca

O projeto também demonstra dois importantes algoritmos de busca em grafos/árvores:

•
Busca em Largura (BFS - Breadth-First Search): Explora todos os nós de um nível antes de passar para o próximo nível. Útil para encontrar o caminho mais curto em grafos não ponderados.

•
Busca em Profundidade (DFS - Depth-First Search): Explora o mais profundo possível ao longo de cada ramo antes de retroceder. Útil para detectar ciclos e exploração completa de grafos.

🎯 Objetivos Educacionais

Este simulador foi desenvolvido com os seguintes objetivos educacionais em mente:

•
Visualização de Conceitos Abstratos: Transformar conceitos teóricos de estruturas de dados em representações visuais concretas e interativas.

•
Aprendizado Ativo: Permitir que os usuários experimentem e manipulem a estrutura de dados, promovendo um aprendizado mais engajado e efetivo.

•
Compreensão de Algoritmos: Facilitar a compreensão dos algoritmos de inserção, remoção, busca e travessia através da visualização passo a passo.

•
Desenvolvimento de Intuição: Ajudar os estudantes a desenvolver uma intuição sobre o comportamento e as propriedades das árvores binárias de busca.

🔧 Estrutura do Projeto

O projeto está organizado de forma clara e modular:

Plain Text


simulador-arvore-binaria/
├── index.html              # Página principal do simulador
├── style.css               # Estilos e design responsivo
├── style.js                # Lógica principal e algoritmos da ABB
├── p5.min.js               # Biblioteca p5.js (versão local)
├── README.md               # Documentação do projeto
└── salamisound-4622627-water-drops-throwing-small.mp3  # Efeito sonoro


Descrição dos Arquivos

•
index.html: Contém a estrutura HTML da aplicação, incluindo os elementos da interface do usuário como botões, campos de entrada e a área de visualização da árvore.

•
style.css: Define toda a estilização visual do simulador, incluindo o design moderno com gradientes, efeitos de glassmorphism, responsividade e animações CSS.

•
style.js: Implementa toda a lógica do simulador, incluindo:

•
Classes No e Arvore para representar a estrutura de dados

•
Algoritmos de inserção, remoção e busca

•
Algoritmos de travessia (em ordem, pré-ordem, pós-ordem)

•
Algoritmos de busca (BFS e DFS)

•
Lógica de renderização e animação usando p5.js

•
Manipulação de eventos da interface do usuário



•
p5.min.js: Versão minificada da biblioteca p5.js, incluída localmente para garantir funcionalidade offline.

🎨 Características Visuais e de Design

O simulador apresenta várias características visuais que melhoram significativamente a experiência do usuário:

Design Moderno e Profissional

•
Paleta de Cores: Utiliza uma paleta de cores moderna com gradientes em tons de azul e roxo, criando um visual atraente e profissional.

•
Tipografia: A fonte 'Inter' foi escolhida por sua excelente legibilidade e aparência moderna.

•
Efeitos Visuais: Implementa efeitos de glassmorphism nos contêineres, sombras sutis e bordas arredondadas para um visual contemporâneo.

Animações e Interatividade

•
Transições Suaves: Todos os elementos da interface apresentam transições CSS suaves para uma experiência mais fluida.

•
Feedback Visual: Os nós da árvore mudam de cor para indicar diferentes estados (normal, visitado, encontrado).

•
Animações dos Nós: Os nós da árvore apresentam animações de escala e cor quando são criados ou modificados.

•
Efeitos Hover: Botões e elementos interativos respondem ao hover do mouse com animações sutis.

Responsividade

O design é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

•
Desktop: Layout otimizado para telas grandes com todos os elementos visíveis.

•
Tablet: Ajustes no tamanho dos elementos e espaçamento para telas médias.

•
Mobile: Reorganização do layout para dispositivos móveis, com elementos empilhados verticalmente quando necessário.

🚀 Melhorias e Funcionalidades Avançadas

Este simulador inclui várias melhorias em relação a implementações básicas de visualizadores de ABB:

Algoritmo de Layout Inteligente

•
Prevenção de Sobreposição: Implementa um algoritmo sofisticado para calcular as posições dos nós, evitando sobreposições mesmo em árvores complexas.

•
Espaçamento Dinâmico: O espaçamento entre os nós se ajusta automaticamente baseado na estrutura da árvore.

•
Centralização Automática: A árvore é automaticamente centralizada na área de visualização.

Feedback Rico e Informativo

•
Mensagens com Emojis: Utiliza emojis para tornar as mensagens de feedback mais visuais e amigáveis.

•
Indicação de Caminho: Nas operações de busca (BFS e DFS), o caminho percorrido é claramente indicado.

•
Estados Visuais: Diferentes cores e estilos indicam o estado atual dos nós (normal, visitado, encontrado).

Experiência do Usuário Aprimorada

•
Foco Automático: O campo de entrada recebe foco automaticamente ao carregar a página.

•
Suporte a Teclado: Permite inserir valores pressionando a tecla Enter.

•
Dicas Contextuais: Inclui dicas visuais para ajudar os usuários a entender como usar o simulador.

📖 Como Contribuir

Este projeto é open source e contribuições são bem-vindas! Se você deseja contribuir para o desenvolvimento do simulador, aqui estão algumas maneiras de fazê-lo:

Reportando Bugs

Se você encontrar algum bug ou comportamento inesperado:

1.
Verifique se o problema já foi reportado nas Issues do repositório.

2.
Se não foi reportado, crie uma nova issue descrevendo:

•
O comportamento esperado

•
O comportamento atual

•
Passos para reproduzir o problema

•
Informações sobre o seu ambiente (navegador, sistema operacional, etc.)



Sugerindo Melhorias

Tem ideias para melhorar o simulador? Adoraríamos ouvir suas sugestões:

1.
Abra uma nova issue com o rótulo "enhancement"

2.
Descreva detalhadamente sua sugestão

3.
Explique como a melhoria beneficiaria os usuários

Contribuindo com Código

Para contribuir com código:

1.
Faça um fork do repositório

2.
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade)

3.
Faça commit das suas mudanças (git commit -am 'Adiciona nova funcionalidade')

4.
Faça push para a branch (git push origin feature/nova-funcionalidade)

5.
Abra um Pull Request

📄 Licença

Este projeto está licenciado sob a Licença MIT, o que significa que você pode usar, modificar e distribuir o código livremente, desde que mantenha o aviso de copyright original.

🙏 Agradecimentos

•
p5.js Community: Pela excelente biblioteca que torna a criação de gráficos interativos acessível e divertida.

•
Comunidade Open Source: Por fornecer inspiração e recursos que tornaram este projeto possível.

•
Educadores e Estudantes: Que motivam o desenvolvimento de ferramentas educacionais como esta.


