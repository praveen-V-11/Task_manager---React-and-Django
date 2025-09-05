import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compoments/header';
import Home from './compoments/home';
import Footer from './compoments/footer';
const App = () => {
  return ( 
    <>
    <div className="App">
      <Header/>
      <Home/>
      {/* <Footer/> */}
    </div>
    </>
   );
}
 
export default App;