import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

const CardComponent = () => {
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="https://via.placeholder.com/150"
                  alt="Card 1 Image"
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography variant="h5" component="div">
                    Card 1 Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for Card 1. This is a horizontal card layout with an image and description.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="https://via.placeholder.com/150"
                  alt="Card 1 Image"
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography variant="h5" component="div">
                    Card 1 Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for Card 1. This is a horizontal card layout with an image and description.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="https://via.placeholder.com/150"
                  alt="Card 1 Image"
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography variant="h5" component="div">
                    Card 1 Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for Card 1. This is a horizontal card layout with an image and description.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      
      </Grid>
    </Container>
  )
}

export default CardComponent