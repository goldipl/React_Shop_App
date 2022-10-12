import { Grid, ButtonBase, Typography, styled, Button } from "@mui/material";

const StoreItem = () => {
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
              src="https://images.pexels.com/photos/4966180/pexels-photo-4966180.jpeg"
            />
          </ButtonBase>
        </Grid>
        <Grid item container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ textAlign: 'center', fontWeight: '600', marginTop: '8px' }}>
                $19.00
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
};  

export default StoreItem;