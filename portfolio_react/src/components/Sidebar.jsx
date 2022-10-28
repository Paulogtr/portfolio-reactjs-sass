import Avatar from '../img/about.png'
import SocialNetworks from './SocialNetworks'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Paulo Henrique' />
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks />
     <InformationContainer />
      <a href="" className='btn'>Download Currículo</a>
    </aside>
  )
}

export default Sidebar