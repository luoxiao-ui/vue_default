import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.returnorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.returnorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.returnorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.returnorder.update', data)
}

export const purchaseReturnApi = {
    query,
    add,
    delete: del,
    update
}
