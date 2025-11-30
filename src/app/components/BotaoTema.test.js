import { render, screen, fireEvent } from "@testing-library/react";
import BotaoTema from "./BotaoTema";
import "@testing-library/jest-dom";

describe('Deve mudar o texto do botão tema ao clicar', ()=> {

    it('Deve alterar o texto do botão', ()=> {
        render(<BotaoTema/>)

        const botao = screen.getByRole("button", {name: /Claro/i})

        expect(botao).toBeInTheDocument()

        fireEvent.click(botao)

        // verificar se o botão mudou de texto

        expect(botao).toHaveTextContent(/Escuro/i)
        
      


    })
})