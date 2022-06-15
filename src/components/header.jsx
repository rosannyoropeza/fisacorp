import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../assets/logo.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Header =  () => {
  return (
    <Box sx={{ flexGrow: 1 }} className = "header">
      <Grid container spacing={0} alignItems={'center'}>
        <Grid item xs={12} md={2} lg={2} alignItems={'center'}>
          <Box alignItems={'center'}> 
             <img src={logo} className='logo' alt='logo de Câmara Municipal de Louveira'/>
           </Box>
        </Grid>

        <Grid item xs={12} md={10} lg={10}>
          <Box justify="center" alignItems="center">
            <h1>Câmara Municipal de Louveira</h1>
            <p>Rua Wagner Luiz Bevilácqua nº 35, Bairro Guembê, CEP: 13290-000 - Louveira</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
