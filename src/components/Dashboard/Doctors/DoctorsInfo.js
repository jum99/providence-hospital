import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../../images/dr.jpg'
import Avatar from '@material-ui/core/Avatar';
import drr from '../../../images/drr.jpg'

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
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default DoctorsInfo;