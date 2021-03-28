import {GlobalStyle} from './GlobalStyle'
import {Header} from './Components/Header'
import {Welcome} from './Components/Welcome'
import { TabCards } from './Components/TabCards/index'

function App() {

  return (
    <>
      <Header/>
      <Welcome/>
      <TabCards/>
      <GlobalStyle/>
    </>
  );
}

export default App;
