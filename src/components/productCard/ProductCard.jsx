import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ProductCard(props) {
  const { key, productData, isAdmin, handleDeleteCall, navigate } = props;

  return (
    <Grid key={key} item xs={4}>
      <Card>
        <CardMedia title={productData.name} sx={{ height: 150 }}
          image={ productData.imageUrl?.length > 0 ? productData.imageUrl : "https://via.placeholder.com/600/771796" } />
        <CardContent sx={{ height: 150 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {productData.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ₹{productData.price}
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {productData.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: "stretch", display: "flex", margin: "0 10px",
            justifyContent: isAdmin ? "space-between" : "flex-start"}} >
          <div>
            <Button size="small" variant="contained" onClick={() => navigate(`/products/${productData.id}`)}>
              Buy
            </Button>
          </div>
          {isAdmin && (
            <div>
              <IconButton onClick={() => navigate(`/edit-product/${productData.id}`)} >
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleDeleteCall}>
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard;