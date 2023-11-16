import httpAxios from "../router/httpAxios";

function getAll()
{
    return httpAxios.get('category/index');
}
function getById(id)
{
    return httpAxios.get('category/show/'+id);
}
function create(category)
{
    return httpAxios.post('category/store',category);
}
function update(category,id)
{
    return httpAxios.post('category/update/'+id,category);
}
function remove(id){
    return httpAxios.delete('category/destroy/'+id);

}
function getCategoryByParentId(parent_id){
    return httpAxios.get('category_list/'+parent_id);

}
function getBySLug(slug){
    return httpAxios.get(`category/show/${slug}`);

}
const categorysevice = {
    getCategoryByParentId:getCategoryByParentId,
    getBySLug:getBySLug,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default categorysevice;
