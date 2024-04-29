import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Drawer, List, ListItem } from '@mui/material';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCategory } from '../context/CategoryContext';

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
 
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const { setSelectedCategoryy ,setName  } = useCategory();

  const handleSelectClick = () => {
    setOpenDrawer(true);
  };

  const handleSelectCategory = (event, categoryName) => {
    console.log("Selected Category:", categoryName);
    setName(event.target.value);
    setSelectedCategoryName(event.target.value);
    setSelectedCategoryy(categoryName); 
    setOpenDrawer(false);
  };

  return (
    <div className="app">
      <FormControl variant="outlined">
        <InputLabel id="category-select-label">Select Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategoryName}
          onClick={handleSelectClick} // Open drawer on click
          disabled
        >
          <MenuItem value={selectedCategoryName}>{selectedCategoryName}</MenuItem>
        </Select>
      </FormControl>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <FormControl variant="outlined">
              <InputLabel id="dropdown1"><FontAwesomeIcon icon={faRobot} />&nbsp;Informatique</InputLabel>
              <Select
                labelId="dropdown1"
                onChange={(event) => handleSelectCategory(event, "INF")}
                style={{ marginBottom: '10px' }}
              >
                <MenuItem value="phones">Phones</MenuItem>
                <MenuItem value="laptops">Laptops</MenuItem>
                <MenuItem value="tablets">Tablets</MenuItem>
                <MenuItem value="watches">Watches</MenuItem>
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
                onChange={(event) => handleSelectCategory(event, "VET")}
                style={{ marginBottom: '10px' }}
              >
                <MenuItem value="tshirts">T-Shirts</MenuItem>
                <MenuItem value="jeans">Jeans</MenuItem>
                <MenuItem value="dresses">Dresses</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="jackets">Jackets</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
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
