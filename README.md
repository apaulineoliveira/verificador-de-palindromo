# 🎳 Objetivo
<p>O intuito deste projeto foi criar um verificador de palíndromo. Ou seja, se as palavras colocadas no console podem ser lidas da mesma maneira de trás para frente. A exemplo da palavra "ovo". O resultado será um booleano (true ou false). Se nenhuma palavra for inserida o console irá retornar a mensagem: "string inexistente". </h3>
<h3>Para essa solução foram utilizados vários métodos em Js. Sendo eles:</h3>
<ul>
<li><b>split</b>: Esse método divide uma string em uma lista ordenada de substrings. Coloca essas substrings em um arrray e em seguida retorna o respectivo array. A divisão é feita procurando um padrão, onde o padrão é fornecido.</li>
<li><b>reverse</b>: Esse método inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.</li>
<li><b>join</b>: Esse método vai juntar todos os elementos do array em uma string.</li>
</ul>
🎬
<h3>Utilizando RegExp, toLowerCase e replace</h3>
<p>A segunda solução que consta no arquivo: <b>scripttwo.js</b> possui alguns itens adicionais que deixam o código mais interessante e com respostas mais assertivas. Como a implementação do <b>RegExp</b> e do <b>toLowerCase</b>. O primeiro é utilizado para remover caracteres indesejados da string. O segundo, coloca a string em letras maiúsculas. O método <b>replace</b> foi utilizado para retornar uma nova string com alguma ou todas as correspondências substituídas por aquilo que foi sugerido, neste caso, foi usada a <b>RegExp</b> anteriormente criada. </p>
🎬
<h3>Utilizando Loop</h3>
<p>A terceira solução que consta no arquivo: <b>script.three.js</b> possui o mesmo escopo inicial, entretanto, é solucionada com o laço <b>for</b>. Possuindo como lógica central: enquanto os caracteres de cada parte corresponderem o laço <b>for</b> continuará; quando os caracteres pararem de corresponder será retornado <b>false</b>, ocorrendo então a saída do laço <b>for</b>. </p>
