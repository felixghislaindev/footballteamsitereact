import React, { Component } from 'react';
import { Link } from 'react-router-dom'


// material ui imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

// 
import{ CityLogo} from '../Ui/Icons'


class Header extends Component {
    render() {
        return (
           <AppBar
           position="fixed"
           style={{
               backgroundColor: '#1C2C5B',
               boxShadow: 'none',
               padding: '10px 0',
               borderBottom: '2px solid #6CABDD',
            

           }}
           >
           <Toolbar
           style={{
               display:'flex'
           }}
           >
            <div style={{ flexGrow: 1}}>
            
                        <div className ="header_logo">
                        <CityLogo links link='/' 
                         width='70px'
                         height='70px'
                         />
                        </div>
            </div>
            <Link to="/the_team"> 
                <Button
                style={{color:'#fff'}}>The Team</Button>
            </Link>
            <Link to="/the_matches" >
                <Button style={{color:'#fff'}}>The Team</Button>
            </Link>
            
           
           </Toolbar>
           </AppBar>
        );
    }
}

export default Header;