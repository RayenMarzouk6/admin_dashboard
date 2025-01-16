import {
  EmailOutlined,
  Person2Outlined,
  PointOfSaleOutlined,
  TrafficOutlined,
} from "@mui/icons-material";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Card from "./Card";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={"6px"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
    >
      <Card
        icon={
          <EmailOutlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        value={"431,225"}
        title={"Sales obtained"}
        data={data1}
        persentage={"+21%"}
      />
      <Card
        icon={
          <PointOfSaleOutlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        value={"12,361"}
        title={"New Clinets"}
        data={data2}
        persentage={"+5%"}
      />
      <Card
        icon={
          <Person2Outlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        value={"12,361"}
        title={"Emails Send"}
        data={data3}
        persentage={"+43%"}
      />
      <Card
        icon={
          <TrafficOutlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        value={"12,361"}
        title={"Emails Send"}
        data={data4}
        persentage={"+14%"}
      />
    </Stack>
  );
};

export default Row1;
