import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.functioncategory.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.functioncategory.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.functioncategory.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.functioncategory.update', data)
}

export const featureApi = {
    query,
    add,
    delete: del,
    update
}
