import { Grid, Typography } from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";
import { Card, CardMedia, Box } from "@mui/material";



const Hero = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "primary.dark" }} >
        <Grid container spacing={2}>
          <Grid item xs={8} container direction="column">
            <Box
              sx={{
                backgroundColor: "primary.dark",
                width: "100%",
                height: "100%",
                display: "flex",
                padding: "30px",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h2" color="white">
                ¡Hola a todos!
              </Typography>
              <Typography variant="h2" color="white" gutterBottom>
                Soy Jeisson Villamarin
              </Typography>
              <Typography variant="h4" color={grey[500]}>
                Developer que le encanta implementar diseños que inspiran y
                atraen a las personas
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ padding: "30px" }}>
            <Card
              sx={{
                bgcolor: "primary.dark",
                border: 1,
                borderRadius: "20%",
                borderColor: "secondary",
              }}
            >
              <CardMedia
                sx={{
                  margin: "20px",
                  border: 1,
                  borderRadius: "50%",
                  borderColor: "secondary",
                }}
                component="img"
                height="500"
                width="500"
                image="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1636502175/Princiipe%20fresco/IMG-20211109-WA0004_zlem6e.jpg"
                alt="green iguana"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Hero;
