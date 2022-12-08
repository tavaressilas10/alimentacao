import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './Contato.css'

function ContatoUsuario(){

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'> 
        <Grid item xs={6} className='imagem2'></Grid>
        <Grid item xs={6}>
            <Box paddingX={10}>

        <form>
                        <Typography variant='h3' gutterBottom color ='textPrimary' component='h3' align='center' className='texto2'>Entre em Contato</Typography>
                        <TextField id='Nome' label='Nome' variant='outlined' name='Nome' margin='normal' fullWidth />
                        <TextField id='E-mail' label='E-mail' variant='outlined' name='E-mail'  margin='normal' fullWidth />
                        <TextField id='Assunto' label='Assunto' variant='outlined' name='Assunto'  margin='normal' fullWidth />
                        <TextField id='Mensagem' label='DIGITE SUA MENSAGEM' variant='outlined' name='Mensagem' margin='normal'  fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Link to= '/home' className= 'text-decorator-none'> 
                            <Button  variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                            </Link> 

                            <Button type='submit' variant='contained' color='primary'>
                                Enviar
                            </Button>

                        </Box>
                    </form>
                    </Box>


        </Grid> 


        </Grid>
    )

}

export default ContatoUsuario;