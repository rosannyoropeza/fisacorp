import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Cards = () => {
    var cadena = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, at dolore impedit perspiciatis blanditiis sed quaerat quia laudantium quas dolorum pariatur, sapiente mollitia dignissimos est quae ex amet autem! Nulla.";

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Proyecto de Ley 10 / 2022
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Rosanny Oropeza
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cadena.slice(0, 150)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing 
            
            >

                <Stack direction="row" spacing={2} justifyItems="center">

                    <IconButton color="success" >
                        <VisibilityIcon />
                    </IconButton>

                    <IconButton color="success" >
                        <EmailIcon />
                    </IconButton>

                    <IconButton color="success" >
                        <PictureAsPdfIcon />
                    </IconButton>
                </Stack>
            </CardActions>

        </Card>
    );
}

export default Cards;
