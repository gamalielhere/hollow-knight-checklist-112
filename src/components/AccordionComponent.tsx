import {useState} from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionCheckBoxBody from "./AccordionCheckBoxBody"
import type { AccordionProp, AccordionCheckbox } from "@/types.d.ts";


const AccordionOnlyHeader: React.Fc<AccordionCheckbox> = ({title, items}) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  if(!items && items.length <= 0) {
    return (<></>)
  }

  return (
    <Accordion
        expanded={expanded}
        onChange={(_, isExpanded) => setExpanded(isExpanded)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="checkbox-accordion-content"
          id="checkbox-accordion-header"
        >
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  inputProps={{ "aria-label": `${title}` }}
                />
              }
              label={<Typography sx={{ fontWeight: 600 }}>{title}</Typography>}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
            {
              items.map((item) => <AccordionCheckBoxBody title={item.name} link={item.link} howToFind={item["how-to-find"]} key={item.name + item.percent}/>
              )
            }
        </AccordionDetails>
      </Accordion>
  )
}

const AccordionComponent: React.Fc<AccordionProp> = ({items = [], title}) => {
  if(items.length === 0) {
    return (
      <></>
    )
  }

  return (
    <Box sx={{maxWidth: 350, margin: '0 auto'}}>
      <AccordionOnlyHeader title={title} items={items} />
    </Box>
  );
}
export default AccordionComponent