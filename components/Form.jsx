import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Nome" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="text" placeholder="Telefone" className="input" />
      <textarea placeholder="Mensagem" className="textarea mb-2" />
      <button type="submit" className="btn self-start">
        Enviar
      </button>
    </form>
  );
};

export default Form;
