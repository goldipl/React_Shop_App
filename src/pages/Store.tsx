import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { StoreItem } from './../components/StoreItem';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export function Store() {
  return (
    <Paper
      sx={{
        p: 2,
      }}
    >
      <Grid 
        container 
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}   
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <StoreItem 
        name = 'Product 01'
        description = 'Some description'
        id = {1}
        price = {12.20}
        imgUrl = "https://images.pexels.com/photos/4966180/pexels-photo-4966180.jpeg"/>
      <StoreItem 
        name = 'Product 02'
        description = 'Some description'
        id = {2}
        price = {60.50}
        imgUrl = "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg"/>
      <StoreItem 
        name = 'Product 03'
        description = 'Some description'
        id = {3}
        price = {80.90}
        imgUrl = "https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg"/>
      </Grid>
    </Paper>
    
  );
}