import Home from '../components/home';
import { withTheme } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Link from 'next/link';

function Faq({ changeTheme, theme }) {
  const questions= [
    {
      id:1,
      question: 'What is chainlist?',
      answer:'answer 1 for question 1'
    },
    {
      id:2,
      question: 'What is Ethereum virtual machine (EVM)?',
      answer:'answer 2 for question 2'
    },
    {
      id:3,
      question: 'Q3: How can I add my own evm?',
      answer:'answer 3 for question 3'
    },
    {
      id:4,
      question: 'How do I link MetaMask to Chainlist?',
      answer:'answer 3 for question 3'
    },
    {
      id:5,
      question: 'How do you use Chainlist?',
      answer:'answer 3 for question 3'
    },
    {
      id:6,
      question: 'How do I link Chainlist with MetaMask?',
      answer:'answer 3 for question 3'
    },
    {
      id:7,
      question: 'How to add Networks to Metamask using 1-click?',
      answer:'answer 3 for question 3'
    }
  ]
  const onSearchChange = () => {};
  return (
    <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>
      <Link href='/'>
          <ArrowBackOutlinedIcon style={{ border:'0px solid black', borderRadius:'100%', backgroundColor:'#2f80ed', color: '#F3F3F3', margin:'3px 10px', cursor:'pointer' }}/>
      </Link>
      {questions.map((question) => <Accordion key={question.id}>
        <AccordionSummary  expandIcon={<ExpandMore />}>
        {'Q'+question.id+': '+question.question}
        </AccordionSummary>
        <AccordionDetails style={{ padding:'0.5em 2em' }}>
        {question.answer}
        </AccordionDetails>
      </Accordion>)}
    </Home>
  )
}

export default withTheme(Faq)