import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.drug.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.drug.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.drug.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.drug.update', data)
}

export const drugApi = {
    query,
    add,
    delete: del,
    update
}
