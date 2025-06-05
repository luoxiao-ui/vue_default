import {requestClient} from "#/api/request";

// query
async function query(data: any) {
    return requestClient.post('/my.easy.storage.page', data)
}

// add
async function add(data: any) {
    return requestClient.post('/my.easy.storage.save', data)
}

// delete
async function del(data: any) {
    return requestClient.post('/my.easy.storage.delete', data)
}

// update
async function update(data: any) {
    return requestClient.post('/my.easy.storage.update', data)
}

// queryTree
async function queryTree() {
    return requestClient.post('/my.easy.storagecategory.find')
}

// addTree
async function addTree() {
    return requestClient.post('/my.easy.storagecategory.save')
}

// deleteTree
async function deleteTree() {
    return requestClient.post('/my.easy.storagecategory.delete')
}

// updateTree
async function updateTree() {
    return requestClient.post('/my.easy.storagecategory.update')
}

export const storageApi = {
    query,
    add,
    delete: del,
    update,
    queryTree,
    addTree,
    deleteTree,
    updateTree
}
