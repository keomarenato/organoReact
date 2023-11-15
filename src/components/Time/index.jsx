import { Colaborador } from '../Colaborador'
import './Time.css'

export const Time = ({ nome, corSecundaria, corPrimaria, colaboradores }) => {
  return (
    colaboradores.length > 0 && <section className='time' style={{ background: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map(colaborador => <Colaborador
          key={colaborador.time}
          corDeFundo={colaborador.corPrimaria}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        />)}
      </div>
    </section>
  )
}
