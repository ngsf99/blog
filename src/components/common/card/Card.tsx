import { Box, CardContent, CardMedia, Typography } from "@mui/material";

interface CardProps {
  cardImage: any;
  title: string;
  alt?: string;
  content: string;
}

const Card = ({
  cardImage,
  title = "Title",
  alt = "Img",
  content,
}: CardProps) => {
  return (
    <Box sx={{ maxWidth: "100%", paddingTop: "30px" }}>
      <CardMedia component="img" height="100%" image={cardImage} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Card;
