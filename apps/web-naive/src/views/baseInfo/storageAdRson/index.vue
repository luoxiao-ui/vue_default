<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import {DeleteIcon, SearchIcon, AddIcon} from '@vben/icons';
import {useBaseInfo} from "#/views/hook/useBaseInfo";
import {storageDirection} from "#/views/baseInfo/storageAdRson/constant";
import {textColor} from "#/constants";
import {storageAdRsonApi} from "#/views/baseInfo/storageAdRson/api";

const { Modal, BaseForm, queryTable, addItem, updateItem, deleteItem, title, Grid } = useBaseInfo({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '库存调整原因',
    },
  ],
  modalForm: [
    {
      component: 'Input',
      rules: 'required',
      fieldName: 'name',
      label: '库存调整原因',
    },
    {
      component: 'Select',
      componentProps: {
        options: storageDirection
      },
      rules: 'required',
      fieldName: 'flag',
      label: '库存进出方向',
    },
    {
      component: 'Input',
      fieldName: 'id',
      label: 'id值',
      hideLabel: true,
      componentProps: {
        hidden: true,
      }
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
        <n-button class="buttonWidth" @click="queryTable" type="info">
          <template #icon>
            <SearchIcon />
          </template>
          查询
        </n-button>
        <n-button class="buttonWidth" @click="addItem" type="info" style="margin-left: 10px">
          <template #icon>
            <AddIcon />
          </template>
          新增
        </n-button>
      </template>
      <template #name="{row}">
        <span @click="updateItem({ name: row.name, flag: row.flag, id: row.id.toString() })" :style="{color: textColor['info'],cursor: 'pointer'}">{{ row.name }}</span>
      </template>
      <template #flag="{row}">
        <span :style="{ color: textColor[row.flag ? 'success' : 'error'] }">{{ row.flag ? '入库' : '出库' }}</span>
      </template>
      <template #action="{row}">
        <n-flex justify="center">
          <n-popconfirm @positive-click="deleteItem({id: row.id})">
            <template #trigger>
              <DeleteIcon :style="{color: textColor['info'],cursor: 'pointer'}" />
            </template>
            确认要删除吗?
          </n-popconfirm>
        </n-flex>
      </template>
    </Grid>
  </Page>
</template>
