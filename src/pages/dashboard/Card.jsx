import { EmailOutlined } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'

const Card = ({icon , value , title, persentage , data}) => {
  return (
    <Paper sx={{minWidth : "250px", display : 'flex' , justifyContent: 'space-between' , flexGrow:'1'}}>
    <Stack direction={"column"}>
        {icon}
        <Typography variant="body1" color="initial">
            {value}
        </Typography>
        <Typography variant="body1" color="initial">
            {title}
        </Typography>
    </Stack>
    <Stack >

        <Box sx={{height : "100px", width: "100px"}}>
            <ResponsivePie
                data={data}
                
                margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
               enableArcLabels={false} //
               enableArcLinkLabels= {false}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                // fill={[
                //     {
                //         match: {
                //             id: 'ruby'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'c'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'go'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'python'
                //         },
                //         id: 'dots'
                //     },
                //     {
                //         match: {
                //             id: 'scala'
                //         },
                //         id: 'lines'
                //     },
                //     {
                //         match: {
                //             id: 'lisp'
                //         },
                //         id: 'lines'
                //     },
                //     {
                //         match: {
                //             id: 'elixir'
                //         },
                //         id: 'lines'
                //     },
                //     {
                //         match: {
                //             id: 'javascript'
                //         },
                //         id: 'lines'
                //     }
                // ]}
                
            />
        </Box>

        <Typography variant="body1" color="initial">
            {persentage}
        </Typography>
    </Stack>
</Paper>
  )
}

export default Card