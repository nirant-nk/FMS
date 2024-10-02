export function updateCategorySelection(
    categories,
    categoryId,
    subcategoryId,
    isSelected,
  ) {
    // Create a deep copy of the categories array to avoid modifying the original data
    const updatedCategories = JSON.parse(JSON.stringify(categories));
  
    // Find the category with the specified ID
    const categoryToUpdate = updatedCategories.find(
      category => category.id === categoryId,
    );
  
    // Update the isSelected property if the category is found
    if (categoryToUpdate) {
      categoryToUpdate.isSelected = isSelected;
  
      // Find the subcategory with the specified ID within the category
      const subcategoryToUpdate = categoryToUpdate.subcategory.find(
        subcategory => subcategory.id === subcategoryId,
      );
  
      // Update the isSelected property of the subcategory if found
      if (subcategoryToUpdate) {
        subcategoryToUpdate.isSelected = isSelected;
      }
    }
  
    return updatedCategories;
  }
  