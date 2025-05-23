<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {firstBreedApi} from "#/views/gsp/firstBreed/api";

const { Grid, queryTable, addItem, updateItem, deleteItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '药品名称',
    },

  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '药品名称', field: 'name', width: 140 },
    { title: '状态', field: 'state', width: 100 },
    { title: '通用名', field: 'common_name', width: 140 },
    { title: '规格', field: 'spec', width: 120 },
    { title: '单位', field: 'unit', width: 100 },
    { title: '装箱规格', field: 'packing_spec', width: 120 },
    { title: '拼音码', field: 'input_code', width: 120 },
    { title: '生产厂家', field: 'manufacturer', width: 160 },
    { title: '批准文号', field: 'approval_number', width: 120 },
    { title: '自编码', field: 'self_code', width: 140 },
    { title: '药品分类', field: 'category_name', width: 140 },
    { title: '特殊药品类型', field: 'special_type', width: 160 },
    { title: '是否含特殊药品制剂', field: 'special_drug_preparation', width: 160 },
    { slots: { default: 'action' }, title: '操作', width: 120, fixed: 'right' },
  ],
  api: firstBreedApi,
  pathName: '/gsp/firstBreedDetail'
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
