import * as React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button, ButtonGroup } from "@mui/material";


const Projects = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ flexGrow: 1, padding: "40px" }}>
              <Typography variant="h4" align="center">
                Parece magia, funciona con código
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flexGrow: 1, padding: "40px" }}>
              <Typography variant="h6" align="left">
                A lo largo de mi carrera como Frontend, he tenido el privilegio
                de trabajar en proyectos retadores e increíbles.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="340"
                image="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1636504622/Princiipe%20fresco/Block_Master_swsvsz.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Block Master
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bloc Master es un app que permite consultar tus peliculas
                  favoritas, buscar su trailer y verificar su puntuación.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "secondary.light",
                  }}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>Ver proyecto completo</Button>
                    <Button>Ver código</Button>
                  </ButtonGroup>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="340"
                image="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1636512476/Princiipe%20fresco/Pokedex_yzhvk0.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pokedex
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pokedex es una app que permite realizar la consulta del nombre
                  y tipo de todos los pokemones ademas de poder ver su imagen.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "secondary.light",
                  }}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>Ver proyecto completo</Button>
                    <Button>Ver código</Button>
                  </ButtonGroup>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="340"
                image="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1636512871/Princiipe%20fresco/Principe_fresco_fis3nj.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Principe Fresco
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Principe Fresco es una ecommerce que permite realizar la
                  compra de productos de la reconocida serie el "principe del
                  rap"
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "secondary.light",
                  }}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>Ver proyecto completo</Button>
                    <Button>Ver código</Button>
                  </ButtonGroup>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="340"
                image="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1636504622/Princiipe%20fresco/Block_Master_swsvsz.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Block Master
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bloc Master es un app que permite consultar tus peliculas
                  favoritas, buscar su trailer y verificar su puntuación.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "secondary.light",
                  }}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>Ver proyecto completo</Button>
                    <Button>Ver código</Button>
                  </ButtonGroup>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
