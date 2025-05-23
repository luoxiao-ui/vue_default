<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import {NButton, NFlex, NPopconfirm, NTree} from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {drugApi} from "#/views/gsp/drugInfo/api";


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
const { Grid, queryTable, updateItem, deleteItem, addItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'name',
      label: '客户名称',
    },
    {
      component: 'Input',
      fieldName: 'input_code',
      label: '拼音码',
    },

  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '客户名称', field: 'name', width: 160 },
    { title: '客户编号', field: 'code', width: 160 },
    { title: '输入码', field: 'input_code', width: 160 },
    { title: '注册地址', field: 'address', width: 180 },
    { title: '仓库地址', field: 'storehouse_address', width: 180 },
    { title: '应付款', field: 'payable_money', width: 120 },
    { title: '应收款', field: 'receivable_money', width: 120 },
    { title: '预收款', field: 'advance_payment', width: 120 },
    { title: '联系人', field: 'contact', width: 140 },
    { title: '联系电话', field: 'certificate_validity', width: 140 },
  ],
  api: drugApi,
  pathName: '/gsp/drugInfoDetail'
})
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button class="buttonWidth" @click="addItem" type="info">
          查询
        </n-button>
        <n-button class="buttonWidth" @click="queryTable" type="info" style="margin-left: 10px">
          导出
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
