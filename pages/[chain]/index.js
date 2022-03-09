import Home from '../../components/home';
import { withTheme } from '@material-ui/core/styles';
import classes from '../../pages/index.module.css'
import {
  Typography,
} from '@material-ui/core'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Link from 'next/link';

function Chain({ changeTheme, theme }) {
  const onSearchChange = () => {};
  return (
    <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>
      <span style={{display:'flex'}}>
        <Link href='/'>
          <ArrowBackOutlinedIcon fontSize="medium" style={{ border:'0px solid black', borderRadius:'100%', backgroundColor:'#2f80ed', color: '#F3F3F3', margin:'3px 10px' }}/>
        </Link>
        <Typography variant='h2' className={ classes.chainListSpacing }><span className={ classes.helpingUnderline }>Ethereum</span></Typography>
      </span>
      <Typography variant='p' className={ classes.helpingParagraph }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    </Home>
  )
}

export default withTheme(Chain)
