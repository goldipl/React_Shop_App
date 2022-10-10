import { Paper, Container, Box, Typography } from "@mui/material";

const Footer = () => {
    return (
      <Paper sx={{marginTop: 'calc(10% + 60px)',
      width: 'calc(100vw - 18px)',
      position: 'fixed',
      bottom: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2E3B55',
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: '8px',
            }}
          >
            <Typography variant="caption" color="#FFFFFF">
              STORE © 2022
            </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }

  export default Footer;