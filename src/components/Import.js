import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    let currentIndex;

    const handleClick = (event, index) => {
        currentIndex = index;
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        props.deleteMake(currentIndex);
        setAnchorEl(null);
    };

    return (
        <div>
        <Container maxWidth="md" className="import-container">
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => handleClick(event, index)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </Container>
        </div>
    )
}

export default Import;