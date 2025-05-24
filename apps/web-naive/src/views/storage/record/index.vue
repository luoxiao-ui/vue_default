<script lang="ts" setup>
import {Page, type VbenFormProps} from '@vben/common-ui';
import {NButton} from 'naive-ui'
import {SearchIcon, AddIcon} from '@vben/icons';
import {type Ref, ref} from "vue";
import {useRouter} from "vue-router";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {commonFormConfig, commonGradConfig, dateRange} from "#/util/constant";
import {drugCateGory} from "#/views/gsp/firstEnter/constant";
import {getNormalTime} from "#/util";
import {directionType, orderTypes} from "#/views/storage/record/constant";

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
        options: [],
      },
      fieldName: 'storehouse_id',
      label: '仓库',
    },
    {
      component: 'Input',
      fieldName: 'drug_ids',
      label: '药品',
    },
    {
      component: 'Select',
      fieldName: 'medicine_categories',
      componentProps: {
        options: drugCateGory,
        multiple: true,
      },
      label: '医药分类',
    },
    {
      component: 'Select',
      fieldName: 'order_type',
      componentProps: {
        options: orderTypes
      },
      label: '单据类型',
    },
    {
      component: 'Input',
      fieldName: 'fid',
      label: '单据号',
    },
    {
      component: 'Select',
      fieldName: 'direction',
      label: '进出方向',
      componentProps: {
        options: directionType
      }
    },
    {
      component: 'Input',
      fieldName: 'storage_name',
      label: '库位',
    },
    {
      component: 'Input',
      fieldName: 'client',
      label: '客户',
    },
    {
      component: 'Input',
      fieldName: 'keyword',
      label: '关键字',
    },
  ],

};
const gridOptions: VxeTableGridOptions<any> = {
  ...commonGradConfig,
  loading: loading.value,
  columns: [
    { title: '序号', type: 'checkbox', width: 80 },
    { title: '仓库', field: 'fid', width: 160 },
    { title: '单据号', field: 'client_name', width: 160 },
    { title: '单据类型', field: 'storehouse_name', width: 160 },
    { title: '进出时间', field: 'state', width: 100 },
    { title: '药品溯源码', field: 'drug_count', width: 100 },
    { title: '药品代码', field: 'quantity', width: 100 },
    { title: '药品条码', field: 'create_by', width: 140 },
    { title: '药品名称', field: 'create_time', width: 160 },
    { title: '医药分类', field: 'relation_order', width: 140 },
    { title: '进出库位', field: 'storage_name', width: 160 },
    { title: '生产批号', field: 'money', width: 140 },
    { title: '生产日期', field: 'producting_date', width: 160 },
    { title: '到期日期', field: 'expire_date', width: 140 },
    { title: '所属客户', field: 'client_name', width: 140 },
    { title: '最小包装单位', field: 'unit', width: 140 },
    { title: '进出最小单位数量', field: 'min_quantity', width: 160 },
    { title: '进出单位', field: 'inOut_quantity', width: 140 },
    { title: '进出单位数量', field: 'inOut_quantity', width: 140 },
    { title: '进出单价', field: 'inOut_price', width: 140 },
    { title: '进出金额', field: 'balance_money', width: 140 },
    { title: '进出后最小包装单位数量', field: 'balance_no_tax_money', width: 160 },
    { title: '进出后包装单位数量', field: 'basic_cost_price', width: 140 },

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
    path: '/sale/returnInDetail',
    query: {
      id: -1,
    }
  })
}
// 新增
const updateItem = async (row: any) => {
  await router.push({
    path: '/sale/returnInDetail',
    query: {
      id: row.fid,
    }
  })
}
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
        <n-button class="buttonWidth" @click="addItem" type="info" style="margin-left: 10px">
          <template #icon>
            <AddIcon />
          </template>
          导出
        </n-button>
      </template>
      <template #code="{row}">
        <span @click="updateItem(row)" style="color: #2080f0;cursor: pointer;">{{ row.name }}</span>
      </template>
    </Grid>
  </Page>
</template>
