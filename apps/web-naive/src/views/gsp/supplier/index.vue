<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {supplierApi} from "#/views/gsp/supplier/api";

const { Grid, queryTable, updateItem, deleteItem, addItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '供应商名称',
    },
    {
      component: 'Input',
      fieldName: 'short_code',
      label: '拼音码',
    },

  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '供应商名称', field: 'name', width: 160 },
    { title: '供应商编号', field: 'code', width: 160 },
    { title: '输入码', field: 'input_code', width: 160 },
    { title: '注册地址', field: 'address', width: 180 },
    { title: '仓库地址', field: 'storehouse_address', width: 180 },
    { title: '应付款', field: 'payable_money', width: 120 },
    { title: '应收款', field: 'receivable_money', width: 120 },
    { title: '预收款', field: 'advance_payment', width: 120 },
    { title: '联系人', field: 'contact', width: 140 },
    { title: '联系电话', field: 'certificate_validity', width: 140 },
    { title: '委托证书有效期', field: 'tel', width: 160 },
  ],
  api: supplierApi,
  pathName: '/gsp/supplierDetail'
})
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button @click="addItem" type="info" style="min-width: 80px">
          查询
        </n-button>
      </template>
      <template #code="{row}">
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
