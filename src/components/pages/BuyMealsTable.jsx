import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

export default function BuyMealsTable(props) {
    const {mealArray, removeMeal} = props

    const classes = useStyles();

    return(
      <>
      {mealArray.length>0 && 
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mealArray.map((el) => (
                <TableRow key={el.id}>
                  <TableCell component="th" scope="row">
                    {el.name}
                  </TableCell>
                  <TableCell align="right">{el.count}</TableCell>
                  <TableCell align="right" onClick={() => removeMeal(el.id)}>
                    <span style={{cursor: 'pointer'}}>Удалить</span>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
      </>
    )
}