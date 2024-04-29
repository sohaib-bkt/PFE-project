import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Drawer, List, ListItem } from '@mui/material';
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectClick = () => {
    setOpenDrawer(true);
  };

  const handleSelectCategory = (event) => {
    console.log("Selected Category:", event.target.value);
    setSelectedCategory(event.target.value);
    setOpenDrawer(false); // Close the drawer when a category is selected
  };
  

  return (
    <div className="app">
      <FormControl variant="outlined">
        <InputLabel id="category-select-label">Select Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          onClick={handleSelectClick} // Open drawer on click
          disabled
        >
        <MenuItem value={selectedCategory}>{selectedCategory}</MenuItem>
        </Select>
        
      </FormControl>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <FormControl variant="outlined">
              <InputLabel id="dropdown1"><FontAwesomeIcon icon={faRobot} />&nbsp;Informatique</InputLabel>
              <Select
                labelId="dropdown1"
                onChange={handleSelectCategory}
                style={{ marginBottom: '10px' }}
              >
                <MenuItem value="phones">Phones</MenuItem>
                <MenuItem value="laptops">Laptops</MenuItem>
                <MenuItem value="tablets">Tablets</MenuItem>
                <MenuItem value="software">Software</MenuItem>
                {/* Additional items */}
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="printers">Printers</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl variant="outlined">
              <InputLabel id="dr"><FontAwesomeIcon icon={faShirt} />&nbsp;Clothes</InputLabel>
              <Select
                labelId="dr"
                onChange={handleSelectCategory}
                style={{ marginBottom: '10px' }}
              >
                <MenuItem value="tshirts">T-Shirts</MenuItem>
                <MenuItem value="jeans">Jeans</MenuItem>
                <MenuItem value="dresses">Dresses</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="jackets">Jackets</MenuItem>
                {/* Additional items */}
                <MenuItem value="hats">Hats</MenuItem>
                <MenuItem value="socks">Socks</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default App;
