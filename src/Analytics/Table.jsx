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
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        overflowX: "hidden", // 🔹 Prevent horizontal scroll
      }}
    >
      <Table
        sx={{
          width: "100%",
          tableLayout: "auto", // 🔹 Auto-adjust column widths
        }}
        size="small"
        aria-label="responsive table"
      >
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col}
                sx={{
                  fontWeight: "bold",
                  whiteSpace: "normal", // 🔹 Allow wrapping
                  wordWrap: "break-word", // 🔹 Break long words
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                {col.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell
                sx={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                {item.title}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                {item.price}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                {item.brand}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                }}
              >
                {item.warrantyInformation || "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnalaticalTable;
