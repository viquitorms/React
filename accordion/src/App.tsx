import Accordion from './components/Accordion.js'
import { faqs } from './data/Data.js'

function App() {

  return (
    <>
      <div className='p-5'>
        <div className='flex flex-col gap-2 content-center w-1/4'>
          {faqs.map((faq, key) => (
            <Accordion key={faq.title} number={key} title={faq.title} text={faq.text} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
