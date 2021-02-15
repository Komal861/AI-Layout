import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from '../../components/Tables/tableStyle-jss';

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,

  };
}

const data = [
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
 createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),
  createData('MP','2021/01/19  21:49:15','Click For Image','rstv://admin:r0chdale@166.141.115.176:555/1/stream4'),



];

function StrippedTable(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography className={classes.title} variant="h6">Event Voilation Table</Typography>
        </div>
      </Toolbar>
      <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.stripped)}>
          <TableHead>
            <TableRow className ={classes.rowheader}>
              <TableCell className= {classes.headerText} padding="dense">Event Type</TableCell>
              <TableCell  className= {classes.headerText} align="center">Date And Time </TableCell>
              <TableCell className= {classes.headerText}  align="center">URL Address </TableCell>
              <TableCell  className= {classes.headerText} align="center">Camera Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell padding="dense">{n.name}</TableCell>
                <TableCell align="center">{n.calories}</TableCell>
                <TableCell align="center">{n.fat}</TableCell>
                <TableCell align="center">{n.carbs}</TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}



export default withStyles(styles)(StrippedTable) ;
