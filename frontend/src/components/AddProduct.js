import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";


const AddProduct = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    title: "",
    category: "",
    quantity: "",
    price: "",
    createdat: "",
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    
  };
  //   3. use Formik component

  
  return (
    <div className="container">
      <h1>Enter Product Details</h1>
      <hr className="mb-5" />

      <Formik initialValues={userForm} onSubmit={userSubmit} >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              className="w-100 mb-4"
              id="title"
              onChange={handleChange}
              value={values.title}
              helperText={touched.title ? errors.title : ''}
              error={Boolean(errors.title && touched.title)}
            />
            
            <TextField
              label="Category"
              variant="outlined"
              className="w-100 mb-4"
              id="category"
              onChange={handleChange}
              value={values.category}
              helperText={touched.category ? errors.category : ''}
              error={Boolean(errors.category && touched.category)}
            />
            <TextField
              label="Quantity"
              variant="outlined"
              className="w-100 mb-4"
              id="quantity"
              onChange={handleChange}
              value={values.quantity}
              helperText={touched.quantity ? errors.quantity : ''}
              error={Boolean(errors.quantity && touched.quantity)}
            />
            <TextField
              label="Price"
              variant="outlined"
              className="w-100 mb-4"
              id="price"
              onChange={handleChange}
              value={values.price}
              helperText={touched.price ? errors.price : ''}
              error={Boolean(errors.price && touched.price)}
            />
            <TextField
              label="CreatedAt"
              variant="outlined"
              className="w-100 mb-4"
              id="createdat"
              onChange={handleChange}
              value={values.createdat}
              helperText={touched.createdat ? errors.createdat : ''}
              error={Boolean(errors.createdat && touched.createdat)}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

// formik

export default AddProduct;