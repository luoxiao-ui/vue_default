import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.wholesalecheckorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.wholesalecheckorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.wholesalecheckorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.wholesalecheckorder.update', data)
}

export const saleCheckApi = {
    query,
    add,
    delete: del,
    update
}
