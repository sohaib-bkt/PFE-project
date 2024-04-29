import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};

export const CategoryProvider = ({ children }) => {
  const [selectedCategoryy, setSelectedCategoryy] = useState('');
  const [name , setName] = useState('');

  return (
    <CategoryContext.Provider value={{ selectedCategoryy, setSelectedCategoryy , name , setName }}>
      {children}
    </CategoryContext.Provider>
  );
};
