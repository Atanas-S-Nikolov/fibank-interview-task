import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import { STAR_WARS_PEOPLE_URL } from "../constants/UrlConstants";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

function RightAlignedTableCell(props) {
  return <TableCell align="right" {...props} />;
}

export default function StarWarsTable() {
  const tableTitles = [
    "Name",
    "Mass (kg)",
    "Height (cm)",
    "Hair color",
    "Skin color",
  ];

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const matches = useMediaQuery("(max-width: 450px)");
  const tablePadding = matches ? "checkbox" : "normal";

  useEffect(() => {
    async function getStarWarsPeople(page) {
      try {
        const response = await fetch(`${STAR_WARS_PEOPLE_URL}/?page=${page}`);
        setData(await response.json());
        setHasError(false);
      } catch (error) {
        console.log("Error occured", error);
        setHasError(true);
      } finally {
        setLoading(false);
        setErrorMessage(undefined);
      }
    }
    if (!isAuthenticated) {
      setLoading(false);
      setHasError(true);
      setErrorMessage("You must be logged in");
      return;
    }
    getStarWarsPeople(page + 1);
  }, [page]);

  function handlePageChange(event, newPage) {
    event.preventDefault();
    setLoading(true);
    setPage(newPage);
  }

  function renderTableOrErrorPage() {
    return (
      <>
        {hasError ? (
          <ErrorPage error={errorMessage} />
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="Star wars table" padding={tablePadding}>
              <TableHead>
                <TableRow>
                  {tableTitles.map((title, index) =>
                    index === 0 ? (
                      <TableCell key={index} component="th">
                        {title}
                      </TableCell>
                    ) : (
                      <RightAlignedTableCell key={index} component="th">
                        {title}
                      </RightAlignedTableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.results?.map((person, index) => (
                  <TableRow key={index}>
                    <TableCell>{person.name}</TableCell>
                    <RightAlignedTableCell>{person.mass}</RightAlignedTableCell>
                    <RightAlignedTableCell>
                      {person.height}
                    </RightAlignedTableCell>
                    <RightAlignedTableCell>
                      {person.hair_color}
                    </RightAlignedTableCell>
                    <RightAlignedTableCell>
                      {person.skin_color}
                    </RightAlignedTableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={data.count || 1}
                    page={page}
                    rowsPerPage={data.results?.length || 10}
                    rowsPerPageOptions={[-1]}
                    onPageChange={handlePageChange}
                    slotProps={{
                      actions: {
                        nextButton: {
                          disabled: !data.next,
                        },
                      },
                    }}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        )}
      </>
    );
  }

  return <>{loading ? <Loader /> : renderTableOrErrorPage()}</>;
}
