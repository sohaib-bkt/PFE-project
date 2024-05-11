import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Drawer, List, ListItem } from '@mui/material';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCategory } from '../context/CategoryContext';
import axiosClient from '../api/axios';

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [INF, setINF] = useState([]);
  const [VET, setVET] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const { setSelectedCategoryy ,setName  } = useCategory();

  useEffect(() => {
    axiosClient.get('/api/product/getcategories').then((response) => {
      setINF(response.data.INF);
      setVET(response.data.VET);
    })
  }, []);
  const handleSelectClick = () => {
    setOpenDrawer(true);
  };

  const handleSelectCategory = (event, categoryName) => {
    console.log(event.target);
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
              {INF.map((category) => (
                <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
              ))}
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
              {VET.map((category) => (
                <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
              ))}
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default App;
