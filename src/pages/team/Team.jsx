import { useTheme } from '@emotion/react';
import { AdminPanelSettingsOutlined, PersonOutline, SupervisorAccountOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

const Team = () => {
  const [users, setUsers] = useState([]); // State to hold the fetched users

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data); // Update the state with fetched data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  const theme = useTheme();

  // Static roles for each user
  const roles = ['Admin', 'User', 'Manager'];

  // Transform the fetched data into the format required by DataGrid
  const rows = users.map((user, index) => ({
    id: user.id, // Unique ID for each row
    col1: user.id, // ID
    col2: user.name, // Name
    col3: user.email, // Email
    col4: user.username, // Username
    col5: user.address.zipcode, // Zipcode
    col6: roles[index % roles.length], // Assign a role cyclically (Admin, User, Manager)
  }));

  // Define the columns for the DataGrid
  const columns = [
    { field: 'col1', headerName: 'ID', width: 50, align: 'center', headerAlign: 'center' },
    { field: 'col2', headerName: 'Name', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'col3', headerName: 'Email', width: 200, align: 'center', headerAlign: 'center' , flex: 1 },
    { field: 'col4', headerName: 'Username', width: 150, align: 'center', headerAlign: 'center' },
    { field: 'col5', headerName: 'Zipcode', width: 150, align: 'center', headerAlign: 'center' },
    {
      field: 'col6',
      headerName: 'Access',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        const role = params.value; // Get the role from the row data
        let icon;
        let color;

        // Assign icon and color based on the role
        switch (role) {
          case 'Admin':
            icon = <AdminPanelSettingsOutlined />;
            color = '#3da58a'; 
            break;
          case 'Manager':
            icon = <SupervisorAccountOutlined />;
            color = theme.palette.primary.main; 
            break;
          default:
            icon = <PersonOutline />;
            color = theme.palette.secondary.main; 
        }

        return (
          <Box
            sx={{
              p: '5px',
              width: 99,
              display: 'flex',
              justifyContent: 'space-evenly',
              backgroundColor: color, // Dynamic background color
              borderRadius: '4px',
            }}
          >
            {icon}
            <Typography sx={{ fontSize: '13px' }}>{role}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    
      <Box style={{ height: 600, width: '98%' , mx: 'auto' }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    
  );
};

export default Team;