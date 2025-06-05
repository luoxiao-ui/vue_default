<script lang="ts" setup>
import {Page} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import {DeleteIcon, SearchIcon, AddIcon} from '@vben/icons';
import {useBaseDetail} from "#/views/hook/useBaseDetail";
import {houseApi} from "#/views/baseInfo/houseManage/api";
import {textColor} from "#/constants";

const { Grid, queryTable, addItem, deleteItem } = useBaseDetail({
  searchForm: [
    {
      component: 'Input',
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
        <n-button class="buttonWidth" @click="queryTable" type="info">
          <template #icon>
            <SearchIcon />
          </template>
          查询
        </n-button>
        <n-button class="buttonWidth" @click="addItem(-1)" type="info" style="margin-left: 10px">
          <template #icon>
            <AddIcon />
          </template>
          新增
        </n-button>
      </template>
      <template #code="{row}">
        <span @click="addItem(row.id)" :style="{color: textColor['info'],cursor: 'pointer'}">{{ row.name }}</span>
      </template>
      <template #status="{row}">
        <span :style="{ color: textColor[row.status ? 'success' : 'error'] }">{{ row.status ? '启用' : '禁用' }}</span>
      </template>
      <template #action>
        <n-flex justify="center">
          <n-popconfirm @positive-click="deleteItem">
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
