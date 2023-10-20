import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap-v5';
function App() {
  return (
    <>
      <Header />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
