import { AppBar, Toolbar, Typography, styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header = styled (AppBar)`
    background: #620cae;
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
                <Tabs to="/"> All posts </Tabs>
                <Tabs to = "/new"> New post </Tabs>
                <Tabs to="/comments"> Comments </Tabs>
            </Toolbar>
        </Header>
    )
}
export default Navbar;