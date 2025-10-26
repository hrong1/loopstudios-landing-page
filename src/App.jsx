import WebHeader from './component/header/header';
import Intro from './component/homepage/intro';
import Container from './component/homepage/card-container';
import WebFooter from './component/footer/footer';
import './App.scss'

const itemsList = ['About', 'Careers', 'Events', 'Products', 'Support'];

function App() {
  return (
    <>
      <WebHeader sidebarList={itemsList} />
      <main>
        <Intro />
        <Container />
      </main>
      <WebFooter itemsList={itemsList}/>
    </>
  )
}

export default App
