<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon, SearchIcon, AddIcon } from '@vben/icons';
import {useBaseInfo} from "#/views/hook/useBaseInfo";
import {unitApi} from "#/views/baseInfo/unitManage/api";
import {textColor} from "#/util/constant";

const { Modal, BaseForm, queryTable, addItem, updateItem, deleteItem, title, Grid } = useBaseInfo({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '单位名称',
    },
  ],
  modalForm: [
    {
      component: 'Input',
      rules: 'required',
      fieldName: 'name',
      label: '单位名称',
    },
    {
      component: 'Input',
      fieldName: 'id',
      label: 'id值',
      hideLabel: true,
      componentProps: {
        hidden: true
      }
    },
  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '单位名称', field: 'name', width: 140, slots: { default: 'name' } },
    { slots: { default: 'action' }, title: '操作', width: 120 },
  ],
  api: unitApi
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
        <span @click="updateItem({ name: row.name, id: row.id.toString() })" :style="{color: textColor['info'],cursor: 'pointer'}">{{ row.name }}</span>
      </template>
      <template #action="{row}">
        <n-flex justify="center">
          <n-popconfirm @positive-click="deleteItem({ id: row.id.toString() })">
            <template #trigger>
              <DeleteIcon :style="{color: textColor['info'],cursor: 'pointer',fontSize: '14px'}" />
            </template>
            确认要删除吗?
          </n-popconfirm>
        </n-flex>
      </template>
    </Grid>
  </Page>
</template>
