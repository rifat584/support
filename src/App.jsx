import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'

const loadTickets = async ()=>{
  const res = await fetch ('/data.json');
  return res.json()
}
  const showTickets = loadTickets()
function App() {
  

  return (
    <>
     <Header></Header>
     <Main  showTickets={showTickets}></Main>
     <Footer></Footer>
    </>
  )
}

export default App
