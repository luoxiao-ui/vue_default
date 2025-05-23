<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import {NButton, NFlex, NPopconfirm, NTree} from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {textColor} from "#/constants";
import {storageApi} from "#/views/baseInfo/storage/api";


const data = [
  {
    label: 'parent 1',
    key: '0-0',
    children: [
      {
        label: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            label: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            label: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
    ],
  }]
const { Grid, queryTable, addItem, updateItem, deleteItem } = useBaseDetail({
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
      component: 'Input',
      fieldName: 'drug_ids',
      label: '药品资料',
    },
  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '仓库代码', field: 'code', width: 140, slots: { default: 'code' } },
    { title: '仓库名称', field: 'name', width: 140 },
    { title: '状态', field: 'status', width: 120, slots: { default: 'status' } },
    { title: '联系人', field: 'contact', width: 140 },
    { title: '电话', field: 'tel', width: 140 },
    { title: '仓库地址', field: 'address', width: 160 },
    { slots: { default: 'action' }, title: '操作', width: 120 },
  ],
  api: storageApi,
  pathName: '/baseInfo/storageManage/detail'
})
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button @click="queryTable" type="info" style="min-width: 80px">
          查询
        </n-button>
        <n-button @click="addItem" type="info" style="min-width: 80px;margin-left: 10px">
          新增
        </n-button>
        <n-button @click="addItem" type="info" style="min-width: 80px;margin-left: 10px">
          导入
        </n-button>
        <n-button @click="addItem" type="info" style="min-width: 80px;margin-left: 10px">
          导出
        </n-button>
      </template>
      <template #code="{row}">
        <span @click="updateItem({ name: row.name })" style="color: #2080f0;cursor: pointer;">{{ row.name }}</span>
      </template>
      <template #status="{row}">
        <span :style="{ color: textColor[row.status ? 'success' : 'error'] }">{{ row.status ? '启用' : '禁用' }}</span>
      </template>
      <template #action>
        <n-flex justify="center">
          <n-popconfirm @positive-click="deleteItem">
            <template #trigger>
              <DeleteIcon style="color: #2080f0;cursor: pointer;" />
            </template>
            确认要删除吗?
          </n-popconfirm>
        </n-flex>
      </template>
      <template #left>
        <div style="width: 200px;padding: 10px 0;text-align: center;">
          <n-tree
              :show-line="true"
              default-expand-all
              :data="data"
              checkable
              expand-on-click
              selectable
          />
        </div>
      </template>
    </Grid>
  </Page>
</template>
