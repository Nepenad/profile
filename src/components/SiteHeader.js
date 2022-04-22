import React, { Component } from 'react'
import logo from '../logo.svg'
import { Button } from '@mui/material'
import SiteMenu from './SiteMenu'

export class SiteHeader extends Component {
    render() {
        return (
            <div className='header bg-seafoam'>
                <div className='header-right-side'>
                    <div className='logo'>
                        <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        >
                        <img src={logo} className='logo-image' alt="logo" />
                        </a>
                    </div>
                    <SiteMenu></SiteMenu>
                </div>
                <div className='header-button'>
                    <Button variant='outlined'>Log In</Button>
                    <Button variant='contained'>Sign Up</Button>
                </div>
            </div>
        )
    }
}

export default SiteHeader