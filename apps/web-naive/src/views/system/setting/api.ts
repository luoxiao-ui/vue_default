import {requestClient} from "#/api/request";

// query
async function query() {
    return requestClient.post('/my.easy.unit.page')
}


// update
async function update(data: any) {
    return requestClient.post('/my.easy.unit.update', data)
}

export const settingApi = {
    query,
    update
}
