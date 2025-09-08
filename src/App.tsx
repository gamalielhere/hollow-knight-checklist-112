import hkLogo from '@/assets/hk-white.png'
import AccordionComponent from '@/components/AccordionComponent.tsx'
import { sections } from '@/data/static_data.json'

function App() {
  return (
    <>
      <main>
        <div>
          <a href="https://www.hollowknight.com/">
            <img src={hkLogo} alt="hollowknight-logo" width="350px" />
          </a>
          <h1>
            112% Completion Guide
          </h1>
          <div className="mainContent">
          {sections.map((section) =>
            <AccordionComponent title={section.title} items={section.items} key={section.title}/>
          )}
          </div>
        </div>
        
      </main>
    </>
  )
}

export default App
