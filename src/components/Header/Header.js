import { createTheme, MenuItem, TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import './Header.css';

export const Header = () => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:'#fff',
            },
            type: "dark",
        },
    });

    return (
        <div className="header">
            <span className="title">Word Lexicon</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Standard" />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                    >
                        <MenuItem>english</MenuItem>
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
}
