import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowIcon from './../../images/accordion-arrow.svg';
import './style.css';

const ExpandMoreIcon = () => {
  return <img src={ArrowIcon} alt="Arrow icon" />;
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: '32px',
  backgroundColor: '#F8F9FC',
  borderRadius: '10px',
  '&:before': {
    display: 'none',
  },
  '@media (max-width: 599.98px)': {
    marginBottom: '24px',
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#F8F9FC',
  flexDirection: 'row',
  borderRadius: '10px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: '0px 0px',
  },
  padding: '26px 50px',
  '@media (max-width: 599.98px)': {
    padding: '22px 24px'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '24px 18px',
  borderTop: '2px solid #F1F1F1',
  margin: '0 32px',
  '@media (max-width: 599.98px)': {
    padding: '20px 12px',
    margin: '0 12px',
  }
}));

export default function(props) {
  const [expandedIndex, setExpandedIndex] = useState();

  const onToggle = (toggledIndex) => {
    if(toggledIndex === expandedIndex){
      setExpandedIndex(undefined);
    } else {
      setExpandedIndex(toggledIndex);
    }
  }

  return <>
    {props.data.map((v, i) => 
      <AccordionItem
        key={i}
        index={i}
        isExpanded={i === expandedIndex}
        title={v.title}
        body={v.body}
        onToggle={onToggle}
      />
      )}
  </>
}

function AccordionItem(props) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={props.isExpanded} onChange={() => props.onToggle(props.index)}>
          <AccordionSummary>
            <Typography
              sx={{
                color: 'secondary.main',
                fontSize: {sm: 18, xs: 14},
                fontWeight: 600
              }}>{props.title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography 
              sx={{
                color: 'primary.main',
                fontSize: 14,
                lineHeight: '18px',
                fontWeight: 400
                }}>{props.body}</Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}