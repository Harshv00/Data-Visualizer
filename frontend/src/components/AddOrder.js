import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";

const AddOrder = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    product: "",
    quantity: "",
    total: "",
    createdAt: new Date(),
  };

  // 2. Create a function for form submission

  const userSubmit = (formdata) => {
    console.log(formdata);
    fetch("http://localhost:5000/order/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered Successfully!!👍",
        });
      }
    });
  };

  //   3. use Formik component

  return (
    <div style={{ backgroundImage: `url("https://i.pcmag.com/imagery/articles/02Xkt5sp3fVl5rGUtk3DXMi-7.fit_lim.v1569485349.jpg")`, height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-5">
          <div class="card">
            <div className="card-body">
              <h1>Enter Order Details</h1>
              <hr className="mb-5" />

              <Formik initialValues={userForm} onSubmit={userSubmit}>
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Product"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="product"
                      onChange={handleChange}
                      value={values.title}
                      helperText={touched.product ? errors.product : ""}
                      error={Boolean(errors.product && touched.product)}
                    />

                    <TextField
                      label="Quantity"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="quantity"
                      onChange={handleChange}
                      value={values.quantity}
                      helperText={touched.quantity ? errors.quantity : ""}
                      error={Boolean(errors.quantity && touched.quantity)}
                    />
                    <TextField
                      label="Total"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="total"
                      onChange={handleChange}
                      value={values.total}
                      helperText={touched.total ? errors.total : ""}
                      error={Boolean(errors.total && touched.total)}
                    />
                    <TextField
                      label="CreatedAt"
                      variant="outlined"
                      className="w-100 mb-4"
                      id="createdat"
                      onChange={handleChange}
                      value={values.createdat}
                      helperText={touched.createdat ? errors.createdat : ""}
                      error={Boolean(errors.createdat && touched.createdat)}
                    />
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// formik

export default AddOrder;
