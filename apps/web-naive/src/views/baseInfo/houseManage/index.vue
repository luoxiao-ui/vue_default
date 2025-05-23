<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {houseApi} from "#/views/baseInfo/houseManage/api";
import {textColor} from "#/constants";

const { Grid, queryTable, addItem, updateItem, deleteItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
      defaultValue: '',
      fieldName: 'keyword',
      label: '仓库名称',
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
  api: houseApi,
  pathName: '/baseInfo/houseManage/detail'
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
    </Grid>
  </Page>
</template>
