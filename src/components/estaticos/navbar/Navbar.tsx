import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()
    
    function goLogout() {
        setToken('')
        alert("Usuario deslogado com sucesso!")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" className="colorb">
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit" className='paddingr disable'>
                            Blog Alimenta Ação
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor">
                        <Link to= '/home' className= 'text-decorator-none'> 
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                        <Link to= '/sobrenos' className= 'text-decorator-none'> 
                            <Typography variant="h6" color="inherit">
                                Sobre nós
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                        <Link to= '/contatos' className= 'text-decorator-none'> 
                            <Typography variant="h6" color="inherit">
                                Contatos
                            </Typography>
                        </Link>
                        </Box>
                        <Link to= '/login' onClick={goLogout}> 
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Sair
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

function setToken(arg0: string) {
    throw new Error('Function not implemented.');
}
