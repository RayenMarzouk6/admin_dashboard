import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { columns, rows } from './data'

const Contact = () => {


  return (
    <Box style={{ height: 600, width: '98%' , mx: 'auto' }}>
     <DataGrid 
          slots={{
            toolbar: GridToolbar,
          }}
     rows={rows} columns={columns} />
  </Box>
  )
}

export default Contact