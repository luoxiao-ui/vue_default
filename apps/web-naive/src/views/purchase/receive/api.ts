import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.receiveorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.receiveorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.receiveorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.receiveorder.update', data)
}

export const purchaseReceiveApi = {
    query,
    add,
    delete: del,
    update
}
