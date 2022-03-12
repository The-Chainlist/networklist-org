import Home from '../components/home';
import { withTheme } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {
  Typography,
} from '@material-ui/core'
import classes from '../pages/index.module.css'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import parse from "html-react-parser";
import Link from 'next/link';

function Faq({ changeTheme, theme }) {
  const questions= [
    {
      id:1,
      question: 'What is chainlist?',
      answer:'<b>The Chainlist</b>&nbsp;is an open-source project which provides one-click adding EVM network to Metamask.You can get find EVM\'s compatible mainnets and testnets.'
    },
    {
      id:2,
      question: 'What is Ethereum virtual machine (EVM)?',
      answer:'<b>Ethereum Virtual Machine (EVM)</b>&nbsp;is a decentralized computer that execıte all Ethereum smart contract operations.'
    },
    {
      id:3,
      question: 'Q3: How can I add my own evm?',
      answer:'If you add an EVM network in <a href="https://github.com/ethereum-lists/chains" title="Chainlist EVM Repo">this repot</a> it will list on the Chainlist.'
    },
    {
      id:4,
      question: 'How do I link MetaMask to Chainlist?',
      answer:'<ol><li>Click “Connect Wallet” button.</li><li>Click “Add To Metamask” button.</li><li>Click on Metamask and select the network from the top.</li></ol>'
    },
    {
      id:5,
      question: 'How do you use Chainlist?',
      answer:'<b>Mainnet</b>&nbsp;is the term for the real blockchain and network. Transections are in this network are not free. Do not use it for test purposes.'
    },
    {
      id:6,
      question: 'How do I link Chainlist with MetaMask?',
      answer:'The&nbsp;<b>testnet</b>&nbsp;is an alternative network in which you can try blockchain operations for free. Also, you can test the newer version of the mainnet.'
    },
    {
      id:7,
      question: 'How to add Networks to Metamask using 1-click?',
      answer:'Metamask is a browser plugin and mobile app which using for a cryptocurrency wallets. It allows users to access their Ethereum wallet.'
    }
  ]
  const onSearchChange = () => {};
  return (
    <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>
      <span style={{display:'flex'}}>
        <Link href='/'>
          <ArrowBackOutlinedIcon style={{ border:'0px solid black', borderRadius:'100%', backgroundColor:'#2f80ed', color: '#F3F3F3', margin:'3px 10px', cursor:'pointer' }}/>
        </Link>
        <Typography variant='h2' className={ classes.chainListSpacing }><span className={ classes.helpingUnderline }>Frequently Asked Questions</span></Typography>
      </span>
        {questions.map((question) => <Accordion key={question.id}>
        <AccordionSummary  expandIcon={<ExpandMore />}>
        {'Q'+question.id+': '+question.question}
        </AccordionSummary>
        <AccordionDetails style={{ padding:'0.5em 2em' }}>
        {parse(question.answer)}
        </AccordionDetails>
      </Accordion>)}
    </Home>
  )
}

export default withTheme(Faq)