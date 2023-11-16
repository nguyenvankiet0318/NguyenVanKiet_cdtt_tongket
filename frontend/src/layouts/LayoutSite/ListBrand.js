import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandservice from "../../services/BrandServices";

function ListBrand() {
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await brandservice.getAll();
                setBrands(result.data.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (
<div class="shop__sidebar__accordion"> <div class="accordion" id="accordionExample"> <div class="card"> <div class="card-heading"> <a data-toggle="collapse" data-target="#collapseOne">Categories</a> </div> <div id="collapseOne" class="collapse show" data-parent="#accordionExample"> <div class="card-body"> <div class="shop__sidebar__categories"> <ul class="nice-scroll"> {brands.map((br, index) => ( <li key={index}> <Link to={"/thuong-hieu/" + br.slug}>{br.name}</Link> </li> ))} </ul> </div> </div> </div> </div> </div> </div>    );
}

export default ListBrand;