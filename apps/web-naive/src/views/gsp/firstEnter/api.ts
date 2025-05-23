import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.firstsupplier.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.firstsupplier.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.firstsupplier.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.firstsupplier.update', data)
}

export const firstEnterApi = {
    query,
    add,
    delete: del,
    update
}
