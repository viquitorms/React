import Accordion from './components/Accordion.js'
import { faqs } from './data/Data.js'

function App() {

  return (
    <>
      {faqs.map((faq, key) => (
        <Accordion key={key} title={faq.title} text={faq.text} />
      ))}
    </>
  )
}

export default App
