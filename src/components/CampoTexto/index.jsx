import './CampoTexto.css'

export const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

  const aoDigitado = (event) => {
    aoAlterado(event.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>{label}</label>
      <input
        required={obrigatorio}
        placeholder={placeholder}
        value={valor}
        onChange={aoDigitado}
      />
    </div>
  )
}
