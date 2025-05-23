<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseInfo} from "#/views/hook/useBaseInfo";
import {storageDirection} from "#/views/baseInfo/storageAdRson/constant";
import {textColor} from "#/constants";
import {storageAdRsonApi} from "#/views/baseInfo/storageAdRson/api";

const { Modal, BaseForm, queryTable, addItem, updateItem, deleteItem, title, Grid } = useBaseInfo({
  searchForm: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '查询库存调整原因',
      },
      defaultValue: '',
      fieldName: 'keyword',
      label: '库存调整原因',
    },
  ],
  modalForm: [
    {
      component: 'Input',
      rules: 'required',
      defaultValue: '',
      fieldName: 'name',
      label: '库存调整原因',
    },
    {
      component: 'Select',
      componentProps: {
        options: storageDirection
      },
      rules: 'required',
      defaultValue: '',
      fieldName: 'flag',
      label: '库存进出方向',
    },
  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '库存调整原因', field: 'name', width: 160, slots: { default: 'name' } },
    { title: '库存进出方向', field: 'flag', width: 140, slots: { default: 'flag' } },
    { slots: { default: 'action' }, title: '操作', width: 120 },
  ],
  api: storageAdRsonApi
})
</script>

<template>
  <Page auto-content-height>
    <Modal :title="title">
      <BaseForm />
    </Modal>
    <Grid>
      <template #toolbar-actions>
        <n-button @click="queryTable" type="info" style="min-width: 80px">
          查询
        </n-button>
        <n-button @click="addItem" type="info" style="min-width: 80px;margin-left: 10px">
          新增
        </n-button>
      </template>
      <template #name="{row}">
        <span @click="updateItem({ name: row.name, flag: row.flag })" style="color: #2080f0;cursor: pointer;">{{ row.name }}</span>
      </template>
      <template #flag="{row}">
        <span :style="{ color: textColor[row.flag ? 'success' : 'error'] }">{{ row.flag ? '入库' : '出库' }}</span>
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
