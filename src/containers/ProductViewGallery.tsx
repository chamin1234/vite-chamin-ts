import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../elements/CommonElements/NavBar";
import Footer from "../elements/CommonElements/Footer";
import Gallery from "../elements/GalleryView/ProductGallery";

const ProductViewGallery = () => {
  return (
    // textAlign="center" fontSize="xl"
    <Box textAlign="center" fontSize="xl">
      <Grid
        h="8xl"
        templateRows="repeat(3)"
        templateColumns="repeat(1, 100%)"
        gap={0}
        bg={useColorModeValue(
          "linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )",
          "linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )"
          // "linear-gradient( to bottom right, #0d2430, rgba(20, 20, 20, 0.94) )"
        )}
      >
        <GridItem rowSpan={1} colSpan={1}>
          {/* <PlacementExample/> */}
          <Navbar />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <Gallery />
        </GridItem>
        <GridItem rowSpan={3} colSpan={1}>
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductViewGallery;
