import './Banner.css'
import banner from '../../../public/imagens/banner.png'


export const Banner = () => {
  return (
    <header className='banner' >
      <img src={banner} alt='Banner' />
    </header>
  )
}
