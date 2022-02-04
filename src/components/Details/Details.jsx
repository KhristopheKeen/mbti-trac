import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Chart } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import useStyles from './styles';
import 'chart.js/auto';

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData} = useTransactions(title);
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
            <Typography variant='h5'>${total}</Typography>
            <Chart type='line' data={chartData} />
        </CardContent>
    </Card>
    )
};

export default Details;
