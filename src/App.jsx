import WebHeader from './component/header/header';
import Title from './component/homepage/title';
import Intro from './component/homepage/intro';
import './App.scss'

function App() {
  const navItems = ['About', 'Careers', 'Events', 'Products', 'Support'];
  return (
    <>
      <WebHeader sidebarList={navItems} />
      <main>
        <Title />
        <Intro />
      </main>
    </>
  )
}

export default App
