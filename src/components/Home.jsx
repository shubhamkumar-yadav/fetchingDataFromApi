import React,{useEffect,useState,useContext} from "react";
import {useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Card, CardMedia, CardContent, CardActions, makeStyles } from '@material-ui/core';
import {ProductDetailsContext} from '../context/ContextProvider.js';

//this is the matetial ui css
const useStyle = makeStyles({
    container:{
        padding:15
    },
    cardContainer:{
        padding:10,
        height:330
    },
    title:{
        fontSize:16,
        fontFamily:"poppins",
        textAlign:"center",
        padding:10,
        height:50
    },
    price:{
        fontWeight:600,
        paddingTop:20
    }
});


//this is the home component i.e. all the product displayed on this page after fetching data from api
const Home = () => {
    const classes = useStyle();
    const [product, setProduct] = useState([]);
    const { aboutProduct,setAboutProduct } = useContext(ProductDetailsContext);//this is the product details state which i have done using use context hook


    //here i have used async await to handle promises to fetch data from api
    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        var data = await response.json();
        setProduct(data);
    };

    //here i have used navigation to navigate to other page to see product details
    const navigate = useNavigate();


    //here i have fetched the product details data using id od product
    const productDetails = async (id) => {
        const responseOfProductDetails = await fetch(`https://fakestoreapi.com/products/${id}`);
        var dataProductDetails = await responseOfProductDetails.json();
        setAboutProduct(dataProductDetails);
        navigate('/productDetails');
        console.log(aboutProduct);
    }


    //here i have used useEffect to get the data of all products when the page is refreshed
    useEffect(() => {
        getData();
    }, []);
    return (<>
        <Grid container>
            {//here i have used map function to iterate all products and display it on page
                product.map((item) => {
                    return (<>
                        <Grid item xs={3} className={classes.container}>
                            <Card sx={{ maxWidth: 345 }} className={classes.cardContainer}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" className={classes.title}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className={classes.price}>
                                    ₹ {item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" style={{ textTransform: "capitalize" }} onClick={()=>productDetails(item.id)}>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </>)
                })
            }
        </Grid>
    </>)
};
export { Home };