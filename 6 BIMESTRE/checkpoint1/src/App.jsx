import React, { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';

function App() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cards, setCards] = useState([]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value);
  };
  

  const handleButtonClick = (event) => {
    event.preventDefault();

    // Validação do título
    if (title.length < 3 || title.trim() !== title) {
      alert("Por favor, verifique os dados inseridos no formulário");
      return;
    }

    // Validação da URL
    const urlRegex = /^(?=.*\d).{6,}$/;
    if (!urlRegex.test(imgUrl)) {
      alert("Por favor, verifique os dados inseridos no formulário");
      return;
    }

    const newCard = {
      title: title,
      imgUrl: imgUrl,
    };

    setCards([...cards, newCard]);
  };

  const handleClearButtonClick = () => {
    setCards([]);
  };

  return (
    <>
      <h2>CheckPoint 1</h2>

      <form>
        <InputComponent
          title="Título do Anime"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
        />

        <InputComponent
          title="URL da Imagem"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        />

        <button onClick={handleButtonClick}>Salvar</button>
        <button onClick={handleClearButtonClick}>Limpar Cards</button>
      </form>

      <div className="container">
        {cards.map((card, index) => (
          <CardComponent key={index} title={card.title} imgUrl={card.imgUrl} />
        ))}
      </div>
    </>
  );
}

export default App;
