import Accordion from './components/Accordion.js'
import { faqs } from './data/data.js'

function App() {

  return (
    <>
      <ul>
        {faqs.map((faq, index) => (
          <Accordion title={faq.title} text={faq.text} />
        ))}
      </ul>
    </>
  )
}

export default App
