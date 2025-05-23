import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.storehouse.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.storehouse.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.storehouse.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.storehouse.update', data)
}

export const houseApi = {
    query,
    add,
    delete: del,
    update
}
