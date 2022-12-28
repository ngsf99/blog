import { Box, Typography } from "@mui/material";
import HeroImage from "../../../static/HeroImage.jpg";

const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundColor: "#000",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          backgroundSize: "cover",
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "60%", md: "40%" },
            p: { xs: 3, sm: 15, md: 20 },
          }}
        >
          <Box sx={{ backgroundColor: "#FFF", opacity: "0.8" }}>
            <Typography
              variant="h4"
              color="#000"
              align="center"
              pt={8}
              sx={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              NgS.F.'s Website
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              pb={8}
              sx={{ fontStyle: "italic" }}
            >
              Made with MUIv5
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
