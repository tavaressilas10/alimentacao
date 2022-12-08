import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './SobreNos.css';

function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid className="imagem3" item xs={6} >
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Nós Somos o Grupo Alimenta Ação </Typography>
                        <Typography variant="overline" gutterBottom color="textPrimary" align="justify" className='paragrafo'>Nosso objetivo é Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut, temporibus suscipit, reiciendis ipsam quis necessitatibus, enim voluptatem eveniet perferendis modi nobis. In vel impedit minus dolores maiores ad consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorem facere cumque fugit magnam ullam quo. Sunt, tempora quidem est earum harum blanditiis .</Typography>

                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}
export default SobreNos;