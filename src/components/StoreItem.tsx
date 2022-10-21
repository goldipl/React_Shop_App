import { Grid, ButtonBase, Typography, styled, Button, Box } from "@mui/material";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import StarRating from "./StarRating";

type StoreItemsProps = {
  name: string;
  description: string;
  id: number;
  price: number;
  imgUrl: string;
}

export function StoreItem({ name, description, id, price, imgUrl }:StoreItemsProps) {

    const { productsQuantity, setProductsQuantity }:any = useContext(ShopContext);

    const counterUp = () => {
      setProductsQuantity(productsQuantity + 1);
    };

    const counterDown = () => {
      (productsQuantity !== 0) ? setProductsQuantity(productsQuantity - 1) : setProductsQuantity(0);
    };

    const Img = styled("img")({
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    });
  
    return (
      <Grid item>
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src={imgUrl}
            />
          </ButtonBase>
        </Grid>
        <Grid item container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {id}
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ textAlign: 'center', fontWeight: '600', marginTop: '8px' }}>
                ${price}
              </Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <StarRating />
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button 
                onClick={counterDown} 
                variant="contained" 
                sx=
                  {{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto' 
                  }}>-
              </Button>
              <Box sx={{ fontWeight: '600', margin: '8px' }}> 
                {productsQuantity}
              </Box>
              <Button 
                onClick={counterUp} 
                variant="contained" 
                sx=
                  {{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto' 
                  }}>+
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Button  
          variant="contained" 
          sx=
            {{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '12px auto' 
            }}>Add to Cart
            </Button>
      </Grid>
    );
};  