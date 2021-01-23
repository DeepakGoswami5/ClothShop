import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shopping.svg';
import './header.scss';
import {auth} from '../../firebase/firebase.utitlis'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-conatiner' to='/'>
            <Logo className='logo'></Logo>            
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser? (
                    <div className='option' onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>
                )
                :
                <Link className='option' to='/sign-in-up'>SIGN IN</Link>

            }
        </div>
    </div>
)
export default Header;