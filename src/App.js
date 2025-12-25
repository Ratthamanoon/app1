import logo from "./logo.svg";
import "./App.css";
import './style.css'
import { Content, Footer, Header } from "./func-component";
import Calendar from "./Class-Components";

function App() {
 return <>
 <Header/>
 <p><center><Calendar/></center></p>
 <Content/>
 <Footer/>
 </>
}

export default App;
