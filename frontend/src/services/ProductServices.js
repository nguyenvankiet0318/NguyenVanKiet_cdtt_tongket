import httpAxios from '../router/httpAxios'



function getAll() {
    return httpAxios.get('product/index');
}

function getById(id) {
    return httpAxios.get('product/show/' + id);

}
function create(product) {
    return httpAxios.post('product/store', product);
}
function update(product, id) {
    return httpAxios.post('product/update/' +id,product);

}
function remove(id) {
    return httpAxios.delete('product/destroy/' + id);
}
function getProductAll(limit){
    return httpAxios.get(`product_all/${limit}`);
}
function getProductCategoryAll(limit,category_id){
    return httpAxios.get(`product_all/${category_id}/${limit}`);
}
    function getProductBySlug(slug){
        return httpAxios.get('product_detail/'+slug);
    }
function getProductHome(limit,category_id){
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}

function getProductByCategoryId(limit,category_id){
    return httpAxios.get(`product_category/${limit}/${category_id}`);
}
function getProductByBrandId(limit,brand_id){
    return httpAxios.get(`product_brand/${limit}/${brand_id}`);
}


const productservice = {
    getProductCategoryAll:getProductCategoryAll,
    getProductHome:getProductHome,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductBySlug:getProductBySlug,
    getProductAll: getProductAll,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default productservice;