<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {firstClientApi} from "#/views/gsp/firstClient/api";

const { Grid, queryTable, addItem, updateItem, deleteItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'name',
      label: '客户名称',
    },
    {
      component: 'Input',
      fieldName: 'short_code',
      label: '拼音码',
    },
  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '企业名称', field: 'name', width: 140 },
    { title: '状态', field: 'state', width: 100 },
    { title: '拼音码', field: 'input_code', width: 120 },
    { title: '联系人', field: 'contact', width: 140 },
    { title: '药监编号', field: 'drug_supervision_code', width: 140 },
    { title: '联系电话', field: 'tel', width: 160 },
    { title: '公司电话', field: 'company_tel', width: 160 },
    { title: '年产值', field: 'annual_output_value', width: 100 },
    { title: '批准文号', field: 'approval_number', width: 120 },
    { title: '公司地址', field: 'address', width: 200 },
    { title: '认证证书有效期', field: 'certification_validity', width: 140 },
    { title: '委托证书有效期', field: 'entrust_validity', width: 140 },
    { title: '许可证号', field: 'license_number', width: 160 },
    { slots: { default: 'action' }, title: '操作', width: 120, fixed: 'right' },
  ],
  api: firstClientApi,
  pathName: '/gsp/firstClientDetail'
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
