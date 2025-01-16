import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
const Line = ({isDashbord = false}) => {

    const theme = useTheme()
    const data = [
      {
        "id": "japan",
        "color": "hsl(13, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 83
          },
          {
            "x": "helicopter",
            "y": 215
          },
          {
            "x": "boat",
            "y": 108
          },
          {
            "x": "train",
            "y": 3
          },
          {
            "x": "subway",
            "y": 100
          },
          {
            "x": "bus",
            "y": 271
          },
          {
            "x": "car",
            "y": 62
          },
          {
            "x": "moto",
            "y": 272
          },
          {
            "x": "bicycle",
            "y": 211
          },
          {
            "x": "horse",
            "y": 210
          },
          {
            "x": "skateboard",
            "y": 158
          },
          {
            "x": "others",
            "y": 178
          }
        ]
      },
      {
        "id": "france",
        "color": "hsl(134, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 231
          },
          {
            "x": "helicopter",
            "y": 230
          },
          {
            "x": "boat",
            "y": 124
          },
          {
            "x": "train",
            "y": 202
          },
          {
            "x": "subway",
            "y": 283
          },
          {
            "x": "bus",
            "y": 266
          },
          {
            "x": "car",
            "y": 222
          },
          {
            "x": "moto",
            "y": 10
          },
          {
            "x": "bicycle",
            "y": 154
          },
          {
            "x": "horse",
            "y": 79
          },
          {
            "x": "skateboard",
            "y": 264
          },
          {
            "x": "others",
            "y": 58
          }
        ]
      },
      {
        "id": "us",
        "color": "hsl(125, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 73
          },
          {
            "x": "helicopter",
            "y": 123
          },
          {
            "x": "boat",
            "y": 122
          },
          {
            "x": "train",
            "y": 281
          },
          {
            "x": "subway",
            "y": 296
          },
          {
            "x": "bus",
            "y": 152
          },
          {
            "x": "car",
            "y": 67
          },
          {
            "x": "moto",
            "y": 153
          },
          {
            "x": "bicycle",
            "y": 119
          },
          {
            "x": "horse",
            "y": 51
          },
          {
            "x": "skateboard",
            "y": 26
          },
          {
            "x": "others",
            "y": 286
          }
        ]
      },
      {
        "id": "germany",
        "color": "hsl(185, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 232
          },
          {
            "x": "helicopter",
            "y": 127
          },
          {
            "x": "boat",
            "y": 222
          },
          {
            "x": "train",
            "y": 124
          },
          {
            "x": "subway",
            "y": 15
          },
          {
            "x": "bus",
            "y": 168
          },
          {
            "x": "car",
            "y": 185
          },
          {
            "x": "moto",
            "y": 61
          },
          {
            "x": "bicycle",
            "y": 70
          },
          {
            "x": "horse",
            "y": 270
          },
          {
            "x": "skateboard",
            "y": 71
          },
          {
            "x": "others",
            "y": 270
          }
        ]
      },
      {
        "id": "norway",
        "color": "hsl(25, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 39
          },
          {
            "x": "helicopter",
            "y": 289
          },
          {
            "x": "boat",
            "y": 221
          },
          {
            "x": "train",
            "y": 102
          },
          {
            "x": "subway",
            "y": 220
          },
          {
            "x": "bus",
            "y": 62
          },
          {
            "x": "car",
            "y": 46
          },
          {
            "x": "moto",
            "y": 53
          },
          {
            "x": "bicycle",
            "y": 89
          },
          {
            "x": "horse",
            "y": 54
          },
          {
            "x": "skateboard",
            "y": 259
          },
          {
            "x": "others",
            "y": 248
          }
        ]
      }
    ]
  return (
    <Box sx={{height: isDashbord ? "280px" : "75vh"}}>
        <ResponsiveLine
        data={data}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve='catmullRom'
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:isDashbord ? null : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  )
}

export default Line