import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.wholesaleorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.wholesaleorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.wholesaleorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.wholesaleorder.update', data)
}

export const wholeOrderApi = {
    query,
    add,
    delete: del,
    update
}
