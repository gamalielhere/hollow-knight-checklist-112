import hkLogo from '@/assets/hk-white.png'
import AccordionComponent from '@/components/AccordionComponent.tsx'
import { sections } from '@/data/static_data.json'
import {Grid} from "@mui/material"

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
          <Grid container spacing={3}>
          {sections.map((section) =>
            <Grid size={6}>
              <AccordionComponent title={section.title} items={section.items} key={section.title}/>
            </Grid>
          )}
          </Grid>
        </div>
        
      </main>
    </>
  )
}

export default App
