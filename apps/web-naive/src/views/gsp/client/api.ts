import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.client.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.client.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.client.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.client.update', data)
}

export const clientApi = {
    query,
    add,
    delete: del,
    update
}
