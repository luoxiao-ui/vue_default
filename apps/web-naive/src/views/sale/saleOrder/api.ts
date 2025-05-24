import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.wholesalesalesorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.wholesalesalesorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.wholesalesalesorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.wholesalesalesorder.update', data)
}

export const saleOrderApi = {
    query,
    add,
    delete: del,
    update
}
