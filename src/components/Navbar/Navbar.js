import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Navbar = ({ handleSearch }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{"backgroundColor":"red"}}>
      <Toolbar sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Demo
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit">Home</Button>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              onChange={handleSearch}
              sx={{ ml: 2 }}
            />
          </>
        )}
        {isMobile && (
            <>
            
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ ml: 2, width: '150px', '& input': { color:"white",fontSize: '0.8rem', padding: '10px',border:"2px solid white",borderRadius:"5px" } }}
          />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
