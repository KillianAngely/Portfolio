/* Components */
import Landing from './components/Landing'
import GithubRepo from './components/Github'
import Footer from './components/Footer'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
/* Styles */
import './styles/App.css'

function App() {
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
