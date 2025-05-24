import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.wholesale.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.wholesale.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.wholesale.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.wholesale.update', data)
}

export const saleCheckApi = {
    query,
    add,
    delete: del,
    update
}
