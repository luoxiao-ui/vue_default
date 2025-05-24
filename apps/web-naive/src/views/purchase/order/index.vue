<script lang="ts" setup>
import {Page, type VbenFormProps} from '@vben/common-ui';
import { NButton, NFlex, NPopconfirm }  from 'naive-ui'
import { CopyIcon } from '@vben/icons';
import {purchaseOrderApi} from "#/views/purchase/order/api";
import {type Ref, ref} from "vue";
import {useRouter} from "vue-router";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {commonFormConfig, commonGradConfig, dateRange, textColor} from "#/util/constant";
import {getNormalTime} from "#/util";
import {purchaseOrderDateType, purchaseOrderStatus} from "#/views/purchase/order/constant";

const loading = ref(false)
const data = ref([])
const pageConfig: Ref<{current: number,pageSize: number}> = ref({
  current: 1,
  pageSize: 50,
})
const router = useRouter()
const formOptions: VbenFormProps = {
  ...commonFormConfig,
  fieldMappingTime: [['date', ['start_time', 'end_time']]],
  schema: [
    {
      component: 'Select',
      componentProps: {
        options: dateRange
      },
      defaultValue: 'today',
      fieldName: 'dateRanger',
      label: '日期范围',
    },
    {
      component: 'DatePicker',
      fieldName: 'date',
      defaultValue: getNormalTime('today'),
      componentProps: {
        type: 'daterange'
      },
      dependencies: {
        triggerFields: ['dateRanger'],
        trigger(value, form) {
          form.setFieldValue('date', getNormalTime(value.dateRanger))
        }
      },
      label: '时间范围'
    },
    {
      component: 'Select',
      componentProps: {
        options: purchaseOrderStatus
      },
      fieldName: 'state',
      label: '单据状态',
    },
    {
      component: 'Select',
      componentProps: {
        options: purchaseOrderDateType
      },
      fieldName: 'time_type',
      defaultValue: 'create_date',
      label: '日期类型',
    },
    {
      component: 'Input',
      fieldName: 'suppliers',
      label: '供应商',
    },
    {
      component: 'Input',
      fieldName: 'drugs',
      label: '药品资料',
    },
    {
      component: 'Input',
      fieldName: 'fid',
      label: '单据号',
    },
  ],

};
const gridOptions: VxeTableGridOptions<any> = {
  ...commonGradConfig,
  loading: loading.value,
  columns: [
    { title: '序号', type: 'checkbox', width: 80 },
    { title: '单据号', field: 'fid', width: 160 },
    { title: '单据状态', field: 'state', width: 100 },
    { title: '收货状态', field: 'receive_state', width: 100 },
    { title: '品种', field: 'drug_count', width: 100 },
    { title: '采购金额', field: 'money', width: 120 },
    { title: '入库金额', field: 'in_money', width: 120 },
    { title: '采购人', field: 'audit_by', width: 120 },
    { title: '供应商', field: 'supplier_name', width: 140 },
    { title: '收货仓库', field: 'storehouse_name', width: 140 },
    { title: '所属客户', field: 'client_name', width: 140 },
    { title: '采购日期', field: 'audit_time', width: 140 },
    { title: '操作', slots: { default: 'action' }, width: 120, fixed: 'right' }
  ],
  data: data.value,
  pagerConfig: {
    currentPage: pageConfig.value.current,
    pageSize: pageConfig.value.pageSize,
    pageSizes: [50, 100, 200]
  },
};
const [Grid, gradApi] = useVbenVxeGrid({
  formOptions,
  gridOptions,
  gridEvents: {
    pageChange: (pager: any)=> {
      gradApi.setGridOptions({
        pagerConfig: {
          currentPage: pager.currentPage,
          pageSize: pager.pageSize,
        }
      })
      pageConfig.value.pageSize = pager.pageSize
      pageConfig.value.current = pager.currentPage
    }
  }
});

// 查询
const queryTable = async () => {
  console.log('--------pageConfig', pageConfig)
}
// 新增
const addItem = async () => {
  await router.push({
    path: '/purchase/orderDetail',
    query: {
      id: -1,
    }
  })
}
// 新增
const updateItem = async (row: any) => {
  await router.push({
    path: '',
    query: {
      id: row.fid,
    }
  })
}
// 删除
const deleteItem = async (obj: any) => {
  const result = await purchaseOrderApi.delete({ ...obj })
  if(result) {}
}
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button class="buttonWidth" @click="queryTable" type="info">
          查询
        </n-button>
        <n-button class="buttonWidth" @click="addItem" type="info" style="margin-left: 10px">
          新增
        </n-button>
        <n-button class="buttonWidth" @click="queryTable" type="info" style="margin-left: 10px">
          批量删除
        </n-button>
        <n-button class="buttonWidth" @click="queryTable" type="info" style="margin-left: 10px">
          导出
        </n-button>
      </template>
      <template #code="{row}">
        <span @click="updateItem(row)" style="color: #2080f0;cursor: pointer;">{{ row.name }}</span>
      </template>
      <template #action>
        <n-flex justify="center">
          <n-popconfirm @positive-click="deleteItem">
            <template #trigger>
              <CopyIcon :style="{color: textColor['info'], cursor: 'pointer'}" />
            </template>
            确认要复制吗?
          </n-popconfirm>
        </n-flex>
      </template>
    </Grid>
  </Page>
</template>
