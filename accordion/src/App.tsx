import { useState } from 'react'
import Accordion from './components/Accordion.js'
import { faqs } from './data/Data.js'

function App() {

  const [currentAccordion, setCurrentAccordion] = useState(null);

  return (
    <>
      <div className='p-5'>
        <div className='flex flex-col gap-2 content-center w-1/4'>
          {faqs.map((faq, key) => (
            <Accordion currentOpen={currentAccordion} onOpen={setCurrentAccordion} key={faq.title} number={key} title={faq.title}>
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
