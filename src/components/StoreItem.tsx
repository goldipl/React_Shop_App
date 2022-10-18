import { Grid, ButtonBase, Typography, styled, Button, Box } from "@mui/material";
import { useState } from "react";
import StarRating from "./StarRating";

type StoreItemsProps = {
  name: string;
  description: string;
  id: number;
  price: number;
  imgUrl: string;
}

export function StoreItem({ name, description, id, price, imgUrl }:StoreItemsProps) {

    const [counter, setCounter] = useState(0);

    const counterUp = () => {
      setCounter(counter + 1);
    };

    const counterDown = () => {
      (counter !== 0) ? setCounter(counter - 1) : setCounter(0);
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
                {counter}
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