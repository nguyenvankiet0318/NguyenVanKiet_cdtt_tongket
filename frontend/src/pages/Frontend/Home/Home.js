import React from "react";
import Slider from "../../Slider";
import Banner from "../../Banner";
import Product from "../../Product";
import { Category, Instagram } from "@mui/icons-material";
import Blog from "../../Blog";
function Home() {
    return(
        <>
        <Slider/>
        <Banner/>
        <Product/>
        <Category/>
        <Instagram/>
        <Blog/>
        </>
    )
}
export default Home;