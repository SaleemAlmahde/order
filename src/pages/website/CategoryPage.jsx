import React from 'react';
import WebsiteLayout from '../layouts/WebsiteLayout';
import { categoryService } from '../../services/category.service';

const CategoryPage = () => {
    const Categories=categoryService.getAll()
    console.log(Categories)
    return (
        <WebsiteLayout>
            {
            // <h1>{Categories.data}</h1>
            }
            
        </WebsiteLayout>
    );
}

export default CategoryPage;
