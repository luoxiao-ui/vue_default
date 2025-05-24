import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.purchaseorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.purchaseorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.purchaseorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.purchaseorder.update', data)
}

export const purchaseOrderApi = {
    query,
    add,
    delete: del,
    update
}
