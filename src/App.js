import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;