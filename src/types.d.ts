export default interface AccordionProp {
  title: string,
  items: ItemDetails[],
}

export default interface ItemDetails {
  name: string,
  percent: number,
  link: string,
  'how-to-find': string
}

export default interface AccordionCheckbox {
  title: string,
  items: ItemDetails[]
}

export default interface AccordionWithBodyProps {
  title: string,
  howToFind: string
  link: string
}
