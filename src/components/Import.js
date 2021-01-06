import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';

const Import = (props) => {
    return (
        <div>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <h2>COUNT</h2>
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map(make => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>placeholder</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
        </div>
    )
}

export default Import;