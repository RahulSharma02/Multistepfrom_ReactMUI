import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export class Confirm extends Component {
    
   

  
    render() {

        return (
            <MuiThemeProvider>
            <>
                <AppBar title = " Success "/>
                <p>Form Submitted Successfully</p>
              

            </>
            </MuiThemeProvider>
        )
    }
}

export default Confirm;
