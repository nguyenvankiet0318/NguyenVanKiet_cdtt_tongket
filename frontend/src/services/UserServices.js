import httpAxios from '../router/httpAxios'

function getAll(){
    return httpAxios.get('user/index');
}

function getById(id){
    return httpAxios.get('user/show/'+id);

}
function create(user){
    return httpAxios.post('user/store',user);
}
function update(user,id){
    return httpAxios.post('user/update/'+id,user);

}
function remove(id){
    return httpAxios.delete('user/destroy/'+id);

}
function login(email, password) {
    return httpAxios.post('login',{email,password});
  }
  
  function register(name,email, password) {
    return httpAxios.post('register', { name,email, password });
  }
  

const userservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    login: login,
    register: register,
}
export default userservice;