<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { DeleteIcon } from '@vben/icons';
import {useVbenVxeGrid} from "#/adapter/vxe-table";
import {useBaseDetail} from "#/views/hook/useBaseDetail";

const { Grid, queryTable, updateItem, deleteItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '用户名称',
    },
  ],
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { title: '用户名', field: 'user_name', width: 140 },
    { title: '昵称', field: 'nick_name', width: 140 },
    { title: '角色名称', field: 'role_names', width: 140 },
    { title: '手机号', field: 'tel', width: 160 },
    { title: '状态', field: 'status', width: 100 },
    { slots: { default: 'action' }, title: '操作', width: 120 },
  ]
})
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button @click="queryTable" type="info" style="min-width: 80px">
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
