import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const News = (props) => {
  const { author, title, description, urlToImage, publishedAt } = props.info;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">{author}</Button>
        <Button variant="contained" >{publishedAt}</Button>
      </CardActions>
    </Card>
  );
};

export default News;
