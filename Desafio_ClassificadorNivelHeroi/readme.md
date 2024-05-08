Entendendo o Desafio 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 
 
 
Bons estudos 😉

<br>
<br>

# Minha Resolução do desafio

Para este desafio escolhi a abordagem de classesorientação a objetos, criando a classe Heroi, que tem nome e experiência.Utilizei conceitos de enncapsulamento, com métodos Getters e Setters para o nome.

Então eu instancio um objeto dessa classe e o armanezo dentro da variável "novoHeroi". O nome é escolhido ao instaciar o objeto e a experiência começa como 0 como padrão, pois um novo jogador não tem experiência. 

Criei uma estrutura de objeto literal que armazena os nomes dos elos e o método que retorna o elo do herói com base em sua experiência atual.

Crei laços de repetição for que representam número de vitórias e derrotas. Como balanceamento, fiz com que o jogador/herói perca mais experiência na derrota do que ganha na vitória.
