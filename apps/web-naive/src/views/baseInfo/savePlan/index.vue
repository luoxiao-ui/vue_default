<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseInfo} from "#/views/hook/useBaseInfo";
import {savePlanApi} from "#/views/baseInfo/savePlan/api";

const { Modal, BaseForm, queryTable, addItem, updateItem, deleteItem, title, Grid } = useBaseInfo({
  searchForm: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '查询储存条件',
      },
      defaultValue: '',
      fieldName: 'keyword',
      label: '储存条件名称',
    },
  ],
  modalForm: [
    {
      component: 'Input',
      rules: 'required',
      defaultValue: '',
      fieldName: 'name',
      label: '储存条件名称',
    },
  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '储存名称', field: 'name', width: 140, slots: { default: 'name' } },
    { slots: { default: 'action' }, title: '操作', width: 120 },
  ],
  api: savePlanApi
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
        <span @click="updateItem({ name: row.name })" style="color: #2080f0;cursor: pointer;">{{ row.name }}</span>
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
