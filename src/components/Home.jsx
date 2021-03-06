import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Card, CardContent, makeStyles, Box } from '@material-ui/core';
import { ProductDetailsContext } from '../context/ContextProvider.js';

//this is the matetial ui css
const useStyle = makeStyles({
    container: {
        padding: 15
    },
    cardContainer: {
        padding: 10,
        height: 330,
    },
    title: {
        fontSize: 16,
        fontFamily: "poppins",
        textAlign: "center",
        padding: 10,
        height: 50
    },
    price: {
        fontWeight: 600,
        paddingTop: 10
    },
    imageStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});


//this is the home component i.e. all the product displayed on this page after fetching data from api
const Home = () => {
    const classes = useStyle();
    const [product, setProduct] = useState([]);
    const { aboutProduct, setAboutProduct } = useContext(ProductDetailsContext);//this is the product details state which i have done using use context hook


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
            //it is coompletely responsive also
                product.map((item) => {
                    return (<>
                        <Grid item xs={12} md={3} className={classes.container}>
                            <Card sx={{ maxWidth: 345 }} className={classes.cardContainer}>
                                <Box className={classes.imageStyle}>
                                    <img src={item.image} alt={item.id} style={{ cursor: "pointer", height: "170px", width: "170px" }} onClick={() => productDetails(item.id)} />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" className={classes.title}>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                                <Box style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 20px 0px 20px"}}>
                                    <Typography variant="body2" color="text.secondary" className={classes.price}>
                                        ??? {item.price}
                                    </Typography>
                                    <Button size="small" style={{ textTransform: "capitalize" }} onClick={() => productDetails(item.id)}>Learn More</Button>
                                </Box>
                            </Card>
                        </Grid>
                    </>)
                })
            }
        </Grid>
    </>)
};
export { Home };
