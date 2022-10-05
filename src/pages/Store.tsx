import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StoreItem from './../components/StoreItem';

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
      <StoreItem />
      <StoreItem />
      <StoreItem />
      </Grid>
    </Paper>
    
  );
}