import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryServices";
import { useEffect, useState } from "react";

function ListCategory() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservice.getCategoryByParentId(0);
                setCategorys(result.data.categorys);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (
        <div class="shop__sidebar__accordion"> <div class="accordion" id="accordionExample"> <div class="card"> <div class="card-heading"> <a data-toggle="collapse" data-target="#collapseTwo">Branding</a> </div> <div id="collapseTwo" class="collapse show" data-parent="#accordionExample"> <div class="card-body"> <div class="shop__sidebar__brand"> <ul> {categorys.map((cat, index) => (<li key={index}> <Link to={"/danh-muc-san-pham/" + cat.slug}>{cat.name}</Link> </li>))} </ul> </div> </div> </div> </div> </div> </div>);
}

export default ListCategory;