import React, { useState } from "react";
import {Wrapper} from "./styles"
import InputMask from "react-input-mask";

const CPFInput = () => {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica tamanho e sequência repetida
  
    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10 || firstDigit === 11) firstDigit = 0;
    if (firstDigit !== parseInt(cpf.charAt(9))) return false;
  
    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10 || secondDigit === 11) secondDigit = 0;
    if (secondDigit !== parseInt(cpf.charAt(10))) return false;
  
    return true; // CPF válido
  };
  
  const handleCPFChange = (e) => {
    const value = e.target.value;
    setCpf(value);

    if (value.length === 14) { // CPF completo com máscara
      if (!validateCPF(value)) {
        setError("CPF inválido.");
      } else {
        setError("");
      }
    } else {
      setError(""); // Limpa o erro enquanto o usuário digita
    }
  };

  return (
    <Wrapper>
      <InputMask
        id="cpf"
        mask="999.999.999-99"
        value={cpf}
        onChange={handleCPFChange}
        placeholder="CPF - 000.000.000-00"
        class = "cpf"
      />
      
      {error && <span style={{ color: "red" }}>{error}</span>}
    </Wrapper>
  );
};

export {CPFInput};
