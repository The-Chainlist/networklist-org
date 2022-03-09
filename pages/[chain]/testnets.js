import Home from '../../components/home';
import { withTheme } from '@material-ui/core/styles';

const testnets = ({ changeTheme, theme }) => {
    const onSearchChange = () => {};
    return (
        <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>

        </Home>
    )
}

export default withTheme(testnets);