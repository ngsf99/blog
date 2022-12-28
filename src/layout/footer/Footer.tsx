import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <Box sx={{ backgroundColor: "#fbf7f7", height: "200px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography
            align="center"
            sx={{ fontFamily: "Libre Baskerville, serif", fontSize: "24px" }}
          >
            Follow Me
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              gap: 10,
            }}
          >
            <InstagramIcon sx={{ fontSize: "48px" }} />
            <FacebookIcon sx={{ fontSize: "48px" }} />
            <TwitterIcon sx={{ fontSize: "48px" }} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
