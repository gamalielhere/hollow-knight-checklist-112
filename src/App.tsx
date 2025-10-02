import hkLogo from '@/assets/hk-white.png'
import AccordionComponent from '@/components/AccordionComponent.tsx'
import { sections } from '@/data/static_data.json'
import Masonry from "@mui/lab/Masonry";

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
          <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} sx={{ maxWidth: "1400px", margin: "0 auto" }}>
              {sections.map((section) => (
                <AccordionComponent title={section.title} items={section.items} />
              ))}
          </Masonry>
        </div>
        
      </main>
    </>
  )
}

export default App
