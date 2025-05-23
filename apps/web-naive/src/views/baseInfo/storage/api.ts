import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.storage.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.storage.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.storage.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.storage.update', data)
}

export const storageApi = {
    query,
    add,
    delete: del,
    update
}
