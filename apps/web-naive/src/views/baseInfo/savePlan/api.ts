import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.storagecondition.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.storagecondition.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.storagecondition.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.storagecondition.update', data)
}

export const savePlanApi = {
    query,
    add,
    delete: del,
    update
}
