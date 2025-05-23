import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.dosageform.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.dosageform.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.dosageform.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.dosageform.update', data)
}

export const potionApi = {
    query,
    add,
    delete: del,
    update
}
