import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './SharedLayout.css';

const SharedLayout = () => {

  return (
    <div className='sharedLayoutContainer'>
      <div className='header' >
        <NavBar className='navBar'/>
        {/* <p className='title'>Maputo Street Art</p> */}
      </div>
      <Outlet className='page'/>
      <Footer className='footer'/>
    </div>

  )
}

export default SharedLayout;