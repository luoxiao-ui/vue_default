import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.stockadjustreason.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.stockadjustreason.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.stockadjustreason.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.stockadjustreason.update', data)
}

export const storageAdRsonApi = {
    query,
    add,
    delete: del,
    update
}
