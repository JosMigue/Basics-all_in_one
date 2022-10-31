/* import { apiUrl } from 'config';
import { fetchWrapper } from 'helpers'; */
import axios from 'axios'

export const productServices = {
    all: getAll,
    first: getById,
    create,
    update,
    delete: _delete
};


function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => { 
        return res.data;
    })
    .catch((err) => {
        return err;
    })
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
