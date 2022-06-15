import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Container, FormControl, InputLabel, TextField, Typography, Select, MenuItem, Box, Grid, Button, styled, Stack } from '@mui/material';
//import { styled } from '@mui/material/styles';
//import Stack from '@mui/material/Stack';

const Filters = () => {

    return (
        <Container>
            <Typography mt={4} mb={4} variant="h5" component="div">
                Pesquisa Pública
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">Tipo</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            //open={open}
                            //={handleClose}
                            //onOpen={handleOpen}
                            //value={age}
                            label="Tipo"
                        //onChange={handleChange}
                        >
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>ThirtySSSSSSSSSSSSSSSS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <TextField id="outlined-basic" label="Número" variant="outlined" />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">Autor</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            //open={open}
                            //={handleClose}
                            //onOpen={handleOpen}
                            //value={age}
                            label="Autor"
                        //onChange={handleChange}
                        >
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>ThirtySSSSSSSSSSSSSSSS</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">Periodo</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            //open={open}
                            //={handleClose}
                            //onOpen={handleOpen}
                            //value={age}
                            label="Periodo"
                        //onChange={handleChange}
                        >
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>ThirtySSSSSSSSSSSSSSSS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">Partidos</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            //open={open}
                            //={handleClose}
                            //onOpen={handleOpen}
                            //value={age}
                            label="Partidos"
                        //onChange={handleChange}
                        >
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>ThirtySSSSSSSSSSSSSSSS</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            //open={open}
                            //={handleClose}
                            //onOpen={handleOpen}
                            //value={age}
                            label="Status"
                        //onChange={handleChange}
                        >
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>ThirtySSSSSSSSSSSSSSSS</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item  xs={12} md={6} lg={4}></Grid>
                <Grid item  xs={12} md={6} lg={4}></Grid>

                <Grid item  xs={12} md={6} lg={4}>
                    <Stack spacing={2} direction="row">
                        <Button fullWidth size='medium' variant='contained' color='success'>
                            Filtrar
                        </Button>

                        <Button fullWidth size='medium' variant="outlined">
                            Limpiar Filtros
                        </Button>
                    </Stack>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Filters;
