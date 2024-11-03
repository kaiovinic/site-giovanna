import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const whatsappNumber = "5571981258539";
    const textMessage = `Olá! Meu nome é ${name}. Meu email é ${email}, telefone: ${phone}. Mensagem: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    // Abre o WhatsApp com a mensagem
    window.open(whatsappUrl, "_blank");

    // Envia um e-mail com os dados do formulário (opcional)
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          alert("Mensagem enviada por e-mail e WhatsApp!");
        },
        (error) => {
          alert("Erro ao enviar o e-mail.");
        }
      );

    // Limpa os campos do formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nome"
        className="input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="input"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        className="input"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Mensagem"
        className="textarea mb-2"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn self-start">
        Enviar
      </button>
    </form>
  );
};

export default Form;
