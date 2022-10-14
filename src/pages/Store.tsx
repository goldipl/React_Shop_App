import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { StoreItem } from './../components/StoreItem';
import items from "./../data/items.json"
import { Box } from '@mui/material';

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
      <Box>
        {items.map(item => (
          <Box>
            <StoreItem key={item.id} {...item} />
          </Box>
        ))}
      </Box>
      </Grid>
    </Paper>
    
  );
}