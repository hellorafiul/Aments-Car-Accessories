import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RatingView } from 'react-simple-star-rating'
import './ManageProducts.css'
import { Box } from '@mui/material/';
import Footer from './../../Shared/Footer/Footer';
import Typography from '@mui/material/Typography';

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() =>
    fetch(`${process.env.REACT_APP_API}/products`)
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
      })
    , [])
  return (
    <Box className="manage-products">
      <Typography variant="h2" sx={{ mb: 10, }}> Manage Products</Typography>
      <TableContainer component={Paper} className="manage-products">
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell >Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Ratting</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts.map((row) => (
              <TableRow
                key={row?._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className="table-img" component="th" scope="row" >
                  <img src={row?.img} alt="" sx={{ width: "50px" }} />
                </TableCell>
                <TableCell >{row?.name}</TableCell>
                <TableCell >${row?.price}</TableCell>
                <TableCell ><RatingView ratingValue={row.rating} /* RatingView Props */ /></TableCell>
                <TableCell><IconButton aria-label="delete" disabled color="primary">
                  <DeleteIcon />
                </IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer></Footer>
    </Box>
  );
};

export default ManageProducts; <h2>This is ManageProducts page</h2>