// import profileImage from './img/testImg.png';
import { Outlet } from 'react-router-dom';
import Layout from './ui/Layout';
import './styles/global.scss';

function App() {
  return (
    <div className='App'>
      {/* <img src={profileImage} alt='profile' /> */}
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
