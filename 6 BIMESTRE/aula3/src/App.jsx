import React, { useState } from 'react';
import './App.css';

function App() {
const [contador, setContador] = useState(0);

const incrementarContador = () => {
setContador(contador + 1);
};

return (
<div className="app">
<h1 className="titulo">Olá Vite!</h1>
<h2 className="subtitulo">Por Iccaro Oliveira</h2>
<p className="descricao">Criando um projeto com Vite.</p>
<p className="contador">Contador: {contador}</p>
<button className="botao" onClick={incrementarContador}>
Adicionar
</button>
<button className="botao" onClick={() => setContador(contador - 1)}>
Diminuir
</button>
<button className="botao" onClick={() => setContador(contador * 2)}>
Dobrar
</button>
<button className="botao" onClick={() => setContador(0)}>
Reiniciar
</button>
<button className="botao" onClick={() => setContador(Math.random() * 10)}>
Aleatório
</button>
</div>
);
}

export default App;
