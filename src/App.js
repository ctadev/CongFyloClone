import './styles/app.scss'
import Nav from './components/Nav'
import Home from './components/Home'
import Features from './components/Features'
import Team from './components/Team'
import Review from './components/Review'
import Footer from './components/Footer'

function App() {
  return <div className="App">
    <Nav />
    <Home />
    <Features />
    <Team />
    <Review />
    <Footer />
  </div>;
}

export default App;
