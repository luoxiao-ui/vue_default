import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.firstclient.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.firstclient.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.firstclient.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.firstclient.update', data)
}

export const firstClientApi = {
    query,
    add,
    delete: del,
    update
}
