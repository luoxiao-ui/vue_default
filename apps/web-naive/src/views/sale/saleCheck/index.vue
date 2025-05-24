<script lang="ts" setup>
import {Page, type VbenFormProps} from '@vben/common-ui';
import {NButton} from 'naive-ui'
import {SearchIcon, AddIcon} from '@vben/icons';
import {type Ref, ref} from "vue";
import {useRouter} from "vue-router";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {commonFormConfig, commonGradConfig, dateRange} from "#/util/constant";
import {getNormalTime} from "#/util";
import {pickStatus, salePickDateType} from "#/views/sale/salePick/constant";
import {checkStatus, saleCheckDateType} from "#/views/sale/saleCheck/constant";

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
        options: checkStatus,
        multiple: true,
      },
      fieldName: 'state',
      label: '复核状态',
    },
    {
      component: 'Select',
      componentProps: {
        options: saleCheckDateType,
      },
      fieldName: 'time_type',
      defaultValue: 'create_date',
      label: '日期类型',
    },
    {
      component: 'Input',
      fieldName: 'clients',
      label: '批发客户',
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
    { title: '批发客户', field: 'client_name', width: 160 },
    { title: '出库仓库', field: 'storehouse_name', width: 160 },
    { title: '复核状态', field: 'state', width: 100 },
    { title: '品种', field: 'drug_count', width: 100 },
    { title: '拣货数量', field: 'quantity', width: 100 },
    { title: '复核数量', field: 'real_quantity', width: 100 },
    { title: '复核人', field: 'create_by', width: 140 },
    { title: '复核时间', field: 'create_time', width: 160 },
    { title: '关联拣货单', field: 'relation_order', width: 140 },
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
    path: '/sale/saleCheckDetail',
    query: {
      id: -1,
    }
  })
}
// 新增
const updateItem = async (row: any) => {
  await router.push({
    path: '/sale/saleCheckDetail',
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
          新增
        </n-button>
      </template>
      <template #code="{row}">
        <span @click="updateItem(row)" style="color: #2080f0;cursor: pointer;">{{ row.name }}</span>
      </template>
    </Grid>
  </Page>
</template>
