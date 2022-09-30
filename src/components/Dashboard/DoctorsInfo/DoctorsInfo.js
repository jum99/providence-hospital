import React from 'react';
import img from '../../../images/dr.jpg';
import drr from '../../../images/drr.jpg'
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';



const styles = theme => ({
    root: {

        [theme.breakpoints.down('up')]: {
            maxWidth: 200,
        },

    },
});

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 140,
    },
    dr: {
        position: 'relative',
        width: '100px',
        height: '100px',
        left: '30%',
        bottom: '40px'
    },
});

const DoctorsInfo = () => {
    const classes = useStyles();
    return (
        <>
            <div className='pb-1'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                <Avatar className={classes.dr} alt="Remy Sharp" src={drr} />
                                Dr Titu Acharjee
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                MBBS,DMU & CHILD PEDIATRIC
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
};

export default DoctorsInfo;