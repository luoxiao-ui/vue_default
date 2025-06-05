<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import {NButton, NFlex, NPopconfirm} from 'naive-ui'
import {DeleteIcon, SearchIcon, AddIcon, ExportIcon, ImportIcon} from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {textColor} from "#/constants";
import {storageApi} from "#/views/baseInfo/storage/api";
import TreeModal from "#/component/tree/index.vue";
import {h, ref, watch} from "vue";
import SelectModal from "#/component/selectModal/index.vue";

const selected = ref<any[]>([])
const {Grid, queryTable, addItem, deleteItem, exportItem, importItem, defaultData, gridApi} = useBaseDetail({
  searchForm: [
    {
      component: 'Select',
      fieldName: 'storehouse_ids',
      label: '仓库',
    },
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '库位代码',
    },
    {
      component: h(SelectModal, {
        type: 'Input',
        keyField: 'id',
        selected: [],
        multiple: true,
        selectType: 'drug',
        onConfirm: (values) => {
          console.log(values)
          selected.value = [...values]
        }
      }),
      fieldName: 'drug_ids',
      label: '药品资料',
    },
  ],
  columns: [
    {title: '序号', type: 'seq', width: 50},
    {title: '仓库代码', field: 'code', width: 140, slots: {default: 'code'}},
    {title: '仓库名称', field: 'name', width: 140},
    {title: '状态', field: 'status', width: 120, slots: {default: 'status'}},
    {title: '联系人', field: 'contact', width: 140},
    {title: '电话', field: 'tel', width: 140},
    {title: '仓库地址', field: 'address', width: 160},
    {slots: {default: 'action'}, title: '操作', width: 120},
  ],
  api: storageApi,
  pathName: '/baseInfo/storageManage/detail',
})
watch(selected, (newVal)=> {
  gridApi.formApi.updateSchema([{
    fieldName: 'drug_ids',
    component: h(SelectModal, {
      type: 'Input',
      keyField: 'id',
      selected: newVal,
      multiple: true,
      selectType: 'drug',
      onConfirm: (values) => {
        console.log(values)
        selected.value = [...values]
      }
    })
  }])
})
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button class="buttonWidth" @click="queryTable" type="info">
          <template #icon>
            <SearchIcon/>
          </template>
          查询
        </n-button>
        <n-button @click="addItem(-1)" type="info" style="margin-left: 10px">
          <template #icon>
            <AddIcon/>
          </template>
          新增
        </n-button>
        <n-button class="buttonWidth" @click="importItem" type="info" style="margin-left: 10px">
          <template #icon>
            <ImportIcon/>
          </template>
          导入
        </n-button>
        <n-button class="buttonWidth" @click="exportItem" type="info" style="margin-left: 10px">
          <template #icon>
            <ExportIcon/>
          </template>
          导出
        </n-button>
      </template>
      <template #code="{row}">
        <span @click="addItem(row.id)" :style="{color: textColor['info'],cursor: 'pointer'}">{{ row.name }}</span>
      </template>
      <template #status="{row}">
        <span :style="{ color: textColor[row.status ? 'success' : 'error'] }">{{ row.status ? '启用' : '禁用' }}</span>
      </template>
      <template #action="{row}">
        <n-flex justify="center">
          <n-popconfirm @positive-click="deleteItem({id: row.id})">
            <template #trigger>
              <DeleteIcon :style="{color: textColor['info'],cursor: 'pointer'}"/>
            </template>
            确认要删除吗?
          </n-popconfirm>
        </n-flex>
      </template>
      <template #left>
        <TreeModal
            :default-data="defaultData"
            :query-table="queryTable"
            :api="{
              getTree: storageApi.queryTree,
              addTree: storageApi.addTree,
              deleteTree: storageApi.deleteTree,
              updateTree: storageApi.updateTree,
            }"
        />
      </template>
    </Grid>
  </Page>
</template>
