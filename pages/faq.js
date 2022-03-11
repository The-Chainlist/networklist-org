import Home from '../components/home';
import { withTheme } from '@material-ui/core/styles';
import { Accordion } from '@material-ui/core';

function Faq({ changeTheme, theme }) {
  const onSearchChange = () => {};
  return (
    <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>
        {/* <Accordion/> */}
    </Home>
  )
}

export default withTheme(Faq)