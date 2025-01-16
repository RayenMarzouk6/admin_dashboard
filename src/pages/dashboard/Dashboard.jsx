import { Box, Button } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import { DownloadOutlined } from "@mui/icons-material"

const Dashboard = () => {
  return (
    <div>
     <Box sx={{textAlign: "right"}}>
      <Button variant="contained" color="primary">
          <DownloadOutlined />
            Download Reports
        </Button>
     </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}

export default Dashboard