import WebHeader from './component/header/header';
import Title from './component/homepage/title';
import Intro from './component/homepage/intro';
import Container from './component/homepage/card-container';
import WebFooter from './component/footer/footer';
import './App.scss'

function App() {
  const itemsList = ['About', 'Careers', 'Events', 'Products', 'Support'];
  return (
    <>
      <WebHeader sidebarList={itemsList} />
      <main>
        <Title />
        <Intro />
        <Container />
      </main>
      <WebFooter itemsList={itemsList}/>
    </>
  )
}

export default App
