import React, { useState } from 'react';
import './App.css';
import FormComponent from './assets/components/FormComponent';
import HelloComponent from './assets/components/HelloComponent';
import InputComponent from './assets/components/InputComponent';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: '',
    telefone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <HelloComponent username="Iccaro" />
      <FormComponent onSubmit={handleSubmit}>
        <InputComponent
          label="Nome"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <InputComponent
          label="Idade"
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleInputChange}
        />
        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputComponent
          label="Telefone"
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </FormComponent>
    </>
  );
}

export default App;
