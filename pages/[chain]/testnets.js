import Home from '../../components/home';
import { withTheme } from '@material-ui/core/styles';
import classes from '../../pages/index.module.css'
import {
  Typography,
} from '@material-ui/core'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Link from 'next/link';

const testnets = ({ changeTheme, theme }) => {
    const onSearchChange = () => {};
    return (
    <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>
        <span style={{display:'flex'}}>
            <Link href='/'>
            <ArrowBackOutlinedIcon style={{ border:'0px solid black', borderRadius:'100%', backgroundColor:'#2f80ed', color: '#F3F3F3', margin:'3px 10px', cursor:'pointer' }}/>
            </Link>
            <Typography variant='h2' className={ classes.chainListSpacing }><span className={ classes.helpingUnderline }>Ethereum Testnets</span></Typography>
        </span>
    </Home>
    )
}

export default withTheme(testnets);