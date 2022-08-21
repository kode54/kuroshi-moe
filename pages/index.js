import React, { useState } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import FsLightbox from 'fslightbox-react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import data from "../data.json"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    card: {
        minWidth: 184,
        maxWidth: 184,
    },
    media: {
        height: 184,
        backgroundPositionY: "0%"
    },

}));
export default function Index() {
    const classes = useStyles();

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number + 1
        });
    }

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h5" noWrap>
                        Kuroshi's Corner
                    </Typography>
                    <Hidden xsDown>
                        <Link href="https://kode54.net/" color="inherit">
                            <Button color="inherit">Main website</Button>
                        </Link>
                        <Link href="https://keybase.io/kode54" color="inherit">
                            <Button color="inherit">Keybase profile</Button>
                        </Link>
                    </Hidden>
                    <Hidden smUp>
                        <Button color="inherit" aria-controls="menu" aria-haspopup="true" onClick={handleClick}>Menu</Button>
                        <Menu
                            id="menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link href="https://kode54.net" color="inherit">
                                <MenuItem onClick={handleClose}>Main website</MenuItem>
                            </Link>
                            <Link href="https://keybase.io/kode54" color="inherit">
                                <MenuItem onClick={handleClose}>Keybase profile</MenuItem>
                            </Link>
                        </Menu>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Box py={3}>
                <Container>
                    <Paper>
                        <Box p={2} mb={2}>
                            <Typography>I am Kuroshi. You may also know me as kode54, or Chris Moeller, or my real name, Christopher Snowhill. My character is a literal tuxedo cat, with a tuxedo fur pattern in black and white, with cuff forepaws, and shirt and buttons chest pattern. I came up with this idea for a character with the acquisition of two lovely tuxedo cats, who brighten up my family’s daily life and have been with us since December of 2013.</Typography>
                        </Box>

                    </Paper>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" >
                        {data.map((image, index) => (
                            <Box m={0.25} key={index}>
                                <Card className={classes.card}>
                                    <CardActionArea onClick={(e) => { console.log(e); openLightboxOnSlide(index); }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={"/" + image.thumb} />
                                        <CardContent>
                                            <Typography color="textSecondary" gutterBottom>{image.date}</Typography>
                                            <Typography component="p">{image.caption}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            <FsLightbox toggler={lightboxController.toggler} sources={data.map(ix => ("/" + ix.image))} slide={lightboxController.slide} />
        </div>
    );
}