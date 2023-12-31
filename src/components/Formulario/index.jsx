import './Formulario.css'
import { CampoTexto } from "../CampoTexto"
import { ListaSuspensa } from '../ListaSuspensa'
import { Botao } from '../Botao'
import { useState } from 'react'


export const Formulario = ({ aoColaboradorCadastrado, times }) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome("")
    setCargo("")
    setImagem('')
    setTime("")
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="URL da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}
