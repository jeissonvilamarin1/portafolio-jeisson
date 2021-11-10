import { Box, List, ListItem, ListItemText, ListItemButton, Grid, Button } from '@mui/material';
import React from 'react'


const Services = () => {
    return (
      <>
        <Box sx={{ padding: "30px", flexGrow: 1, bgcolor: "secondary.light" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Diseño" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Experiencia de usuario" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Interfaz de usuario" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Aplicaciones web" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Pruebas de concepto" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <Button variant="contained" color="primary">
                      Ver servicios de diseño
                    </Button>
                  </ListItem>
                </List>
              </nav>
            </Grid>
            <Grid item xs={4}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list" >
                      <ListItemText primary="Desarrollo" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Aplicaciones móviles" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Sitios web" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Aplicaciones web progresivas" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <Button variant="contained" color="primary">
                      Ver servicios de diseño
                    </Button>
                  </ListItem>
                </List>
              </nav>
            </Grid>
            <Grid item xs={4}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Marca" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Identidad de la marca" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Estrategia de marca" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <Button variant="contained" color="primary">
                      Ver servicios de marca
                    </Button>
                  </ListItem>
                </List>
              </nav>
            </Grid>
          </Grid>
        </Box>
      </>
    );
}

export default Services
