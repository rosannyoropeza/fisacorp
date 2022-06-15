import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Filters from './components/filters';
import Header from './components/header';
import Cards from './components/card'
import './App.css';
import { Grid, Typography } from '@mui/material';
//import data from '../../MOCK_DATA.json'

function App () {
  var data = ["1", "2", "3", "4", "5"]
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Filters />
        <Container maxWidth="lg">
          <Grid container spacing={2}  mt={6}  mb={6}>
            {
              data.map(i => {
                return (
                  <Grid item xs={12} md={6} lg={4}>
                    <Cards />
                  </Grid>
                )
              }
              )
            }
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default App;

