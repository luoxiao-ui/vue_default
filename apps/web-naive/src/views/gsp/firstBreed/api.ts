import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.firstdrug.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.firstdrug.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.firstdrug.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.firstdrug.update', data)
}

export const firstBreedApi = {
    query,
    add,
    delete: del,
    update
}
