import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FormModal({ open, onClose }: FormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", whatsapp: "" };

    if (!formData.name) {
      newErrors.name = "Nome é obrigatório.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
      valid = false;
    }

    const whatsappPattern = /^[0-9]{10,11}$/; // Validates for 10 or 11 digits
    if (!formData.whatsapp || !whatsappPattern.test(formData.whatsapp)) {
      newErrors.whatsapp = "WhatsApp inválido. Deve ter 10 ou 11 dígitos.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const isValid = validateForm();

    // Se não for válido, apenas mostra os erros e não envia
    if (!isValid) {
      setFormSubmitted(true); // Indica que o botão foi clicado e que devemos exibir os erros
      return;
    }

    // Caso seja válido, envia os dados para o Google Sheets
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwJr4CDwT4ejjIsxpO46d9hD42tOmYoN5sVQYe_u6uk891cr-HGtatvL51zleF8J4cxIw/exec", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: 'no-cors', // Não recomendado para tratar resposta
        });
    
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
      }

    // Envia para o WhatsApp
    const whatsappUrl = `https://wa.me/558182123705?text=Olá,%20meu%20nome%20é%20${formData.name},%20gostaria%20de%20contratar%20seus%20servi%C3%A7os.`;

    window.location.href = whatsappUrl;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Fale Conosco</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700"
          />
          {formSubmitted && errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700"
          />
          {formSubmitted && errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <Input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700"
          />
          {formSubmitted && errors.whatsapp && <span className="text-red-500 text-sm">{errors.whatsapp}</span>}

          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
