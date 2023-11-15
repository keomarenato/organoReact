import './ListaSuspensa.css'

export const ListaSuspensa = ({ label, itens, obrigatorio, aoAlterado, valor }) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
        <option></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
