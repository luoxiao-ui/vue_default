import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.returnreason.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.returnreason.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.returnreason.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.returnreason.update', data)
}

export const returnRsonApi = {
    query,
    add,
    delete: del,
    update
}
