import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.wholesalepickorder.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.wholesalepickorder.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.wholesalepickorder.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.wholesalepickorder.update', data)
}

export const salePickApi = {
    query,
    add,
    delete: del,
    update
}
