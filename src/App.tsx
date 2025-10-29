import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <Header />
      <Main />
    </LanguageProvider>
  )
}

export default App
