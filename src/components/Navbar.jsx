import React from 'react'
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow: 1
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
      <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              aria-label="menu"
              color="secondary"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Button variant="text" color="secondary">
              Proyectos
            </Button>
            <Button variant="text" color="secondary">
              Testimonios
            </Button>
            <Button variant="text" color="secondary">
              Contacto
            </Button>
            <Button
              variant="contained"
              color="secondary"
            >
              Descargar curriculum
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
      </div>
    );
}

export default Navbar
