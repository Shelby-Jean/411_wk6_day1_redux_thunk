import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';

const Import = (props) => {
    return (
        <div>
        <p>Import Component</p>
        <Button variant="contained" color="primary">Import</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    
                </TableRow>
            </TableBody>
        </Table>
        </div>
    )
}

export default Import