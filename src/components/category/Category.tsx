import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import kidsImage from "../../static/kids.jpg";
import menImage from "../../static/men.jpg";
import womenImage from "../../static/women.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  opacity: "0.8",
  backgroundColor: "lightgray",
  baackgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px",
  background: "#FFF",
  opacity: "0.8",
});
const Category = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      mt={5}
    >
      <StyledBox sx={{ backgroundImage: `url(${kidsImage})` }}>
        <StyledTypography align="center" variant="h3">
          2020
        </StyledTypography>
      </StyledBox>
      <StyledBox sx={{ backgroundImage: `url(${menImage})` }}>
        <StyledTypography align="center" variant="h3">
          2021
        </StyledTypography>
      </StyledBox>
      <StyledBox sx={{ backgroundImage: `url(${womenImage})` }}>
        <StyledTypography align="center" variant="h3">
          2022
        </StyledTypography>
      </StyledBox>
    </Stack>
  );
};

export default Category;
