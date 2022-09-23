import { AppBar, Toolbar, Typography, styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header = styled (AppBar)`
    background: #8903ff;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right: 20px;
    color: inherit;
`
const Navbar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/"> Code for Interview</Tabs>
                <Tabs to="/all"> All posts </Tabs>
                <Tabs to = "/new"> New post </Tabs>
            </Toolbar>
        </Header>
    )
}
export default Navbar;