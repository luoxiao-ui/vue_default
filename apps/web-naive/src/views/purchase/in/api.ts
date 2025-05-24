import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.inorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.inorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.inorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.inorder.update', data)
}

export const purchaseInApi = {
    query,
    add,
    delete: del,
    update
}
