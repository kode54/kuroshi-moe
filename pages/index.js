import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import FsLightbox from 'fslightbox-react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

import data from "../data.json"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
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

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number+1
        });
    }

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h5" noWrap>
                        Kuroshi's Corner
                    </Typography>
                    <Link href="https://kode54.net/" color="inherit">
                        <Button color="inherit">Main website</Button>
                    </Link>
                    <Link href="https://keybase.io/kode54" color="inherit">
                        <Button color="inherit">Keybase profile</Button>
                    </Link>
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
                        {data.map((image,index) => (
                            <Card key={image.thumb} className={classes.card}>
                                <CardActionArea onClick={(e)=> {console.log(e); openLightboxOnSlide(index);}}>
                                    <CardMedia
                                        className={classes.media}
                                        image={"https://kuroshi.moe/" + image.thumb} />
                                    <CardContent>
                                        <Typography component="p">{image.caption}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>

            <FsLightbox toggler={lightboxController.toggler} sources={data.map(ix=>"https://kuroshi.moe/"+ix.image)} slide={lightboxController.slide} />
        </div>
    );
}