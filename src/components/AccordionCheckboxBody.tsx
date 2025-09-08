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
import type {AccordionWithBodyProps} from "@/types.d.ts"

const AccordionCheckboxBody: React.Fc<AccordionWithBodyProps> = ({title, link, howToFind}) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

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
          <Typography variant="body2">
            {howToFind} <a href={link} target="_blank">Read more.</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default AccordionCheckboxBody