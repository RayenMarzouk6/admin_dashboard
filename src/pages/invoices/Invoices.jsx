import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from './data'


const Invoices = () => {
  return (
    <Box style={{ height: 600, width: '98%' , mx: 'auto' }}>
    <DataGrid 
      checkboxSelection
      disableRowSelectionOnClick
      rows={rows} columns={columns} />
 </Box>
  )
}

export default Invoices