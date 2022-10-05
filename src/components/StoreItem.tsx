import { Grid, ButtonBase, Typography, styled } from "@mui/material";

const StoreItem = () => {
    const Img = styled("img")({
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    });
  
    return (
      <Grid item>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://images.pexels.com/photos/4966180/pexels-photo-4966180.jpeg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={12} lg={8} container>
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
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  color: "red",
                  fontWeight: "600",
                }}
                variant="body2"
              >
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
};  

export default StoreItem;