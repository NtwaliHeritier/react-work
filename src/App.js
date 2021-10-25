import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import './App.css';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="app-flex">
          <Sidebar/>
          <Main/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
