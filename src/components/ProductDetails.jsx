import React,{useContext} from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import {ProductDetailsContext} from '../context/ContextProvider.js';
import Rating from '@mui/material/Rating';

//this is the materal ui css
const useStyle = makeStyles({
    container:{
        display:"flex",
        padding:"70px 50px 50px 50px"
    },
    leftContainer:{
        padding:"20px 0px 20px 90px"
    },
    rightContainer:{
        padding:"100px 50px 20px 0px"
    },
    title:{
        fontSize:25,
        fontFamily:"poppins"
    },
    price:{
        fontWeight:600,
        color:"green",
        paddingTop:5,
        
    },
    description:{
        fontFamily:"poppins",
        paddingTop:5,
        fontWeight:'lighter',
        color:"grey"
    },
    head:{
        fontSize:18,
        color:"grey",
        fontWeight:"lighter",
        fontFamily:"poppins",
        paddingTop:20
    }
});


//this is the product detail component
const ProductDetails = ()=>{
    const { aboutProduct} = useContext(ProductDetailsContext);//this is the about product state whch  have done using useContext hook
    const classes = useStyle();
    return(<>
    <Grid container className={classes.container}>
        <Grid item xs={12} md={6} className={classes.leftContainer}>
            <img src={aboutProduct.image} alt={aboutProduct.id} style={{width:"50%"}} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.rightContainer}>
            <Typography className={classes.title}>{aboutProduct.title}</Typography>
            <Typography className={classes.head}>Price :</Typography>
            <Typography className={classes.price}>₹ {aboutProduct.price}</Typography>
            <Typography className={classes.head}>Description :</Typography> 
            <Typography className={classes.description}>{aboutProduct.description}</Typography>
            <Typography className={classes.head}>Rating :</Typography>
            <Rating style={{paddingTop:5}} name="read-only" value={aboutProduct.rating.rate} readOnly />
        </Grid>
    </Grid>
    </>);
};
export {ProductDetails};
