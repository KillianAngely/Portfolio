/* Components */
import Landing from './components/Landing'
import GithubRepo from './components/Github'
import Footer from './components/Footer'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import { useEffect } from 'react'
  
/* Styles */
import './styles/App.css'

function App() {
    useEffect(() => {
      const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark_theme'
        : 'light_theme';

      document.body.className = theme;
    }, []);
  return (
    <>
      <main>
      <Header/>
      <Landing/>
      <Experience/>
      <Education/>
      <GithubRepo/>
      <Footer/>
      </main>
    </>
  )
}

export default App
