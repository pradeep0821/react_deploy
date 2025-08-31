import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const AnalaticalTable = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  async function fetchDataFromApi() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const response = await res.json();
      const products = response.products.slice(0, 5);
      setData(products);
      let filterOutColumn = Object.keys(products[0]);
      setColumns(
        filterOutColumn.filter(
          (item) =>
            item === "title" ||
            item === "warrantyInformation" ||
            item === "price" ||
            item === "brand"
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col} sx={{fontWeight:"bold"}}>{col.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.brand}</TableCell>

                <TableCell>{item.warrantyInformation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AnalaticalTable;
