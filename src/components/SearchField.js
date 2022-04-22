import React, { Component } from 'react'
import TextField from '@mui/material/TextField'

export class SearchField extends Component {
    render() {
        return (
            <div>
                <TextField 
                id="outlined-basic" 
                type="search" 
                label="Search field" 
                variant="outlined" 
                />
            </div>
        )
    }
}

export default SearchField