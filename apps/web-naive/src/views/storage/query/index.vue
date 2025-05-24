<script lang="ts" setup>
import {Page, type VbenFormProps} from '@vben/common-ui';
import {NButton} from 'naive-ui'
import {SearchIcon, AddIcon} from '@vben/icons';
import {type Ref, ref} from "vue";
import {useRouter} from "vue-router";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {commonFormConfig, commonGradConfig, dateRange} from "#/util/constant";
import {getNormalTime} from "#/util";
import {returnInDateType, returnInStatus} from "#/views/sale/returnIn/constant";
import {queryModes} from "#/views/storage/query/constant";
import {drugCateGory} from "#/views/gsp/firstEnter/constant";

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
        options: queryModes
      },
      fieldName: 'query_mode',
      label: '查询模式',
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
      component: 'Input',
      fieldName: 'clients',
      label: '批发客户',
    },
    {
      component: 'Input',
      fieldName: 'suppliers',
      label: '供应商',
    },
    {
      component: 'Input',
      fieldName: 'storage',
      label: '库区',
    },
    {
      component: 'Input',
      fieldName: 'storage_name',
      label: '库位',
    },
  ],

};
const gridOptions: VxeTableGridOptions<any> = {
  ...commonGradConfig,
  loading: loading.value,
  columns: [
    { title: '序号', type: 'checkbox', width: 80 },
    { title: '药品代码', field: 'fid', width: 160 },
    { title: '药品溯源码', field: 'client_name', width: 160 },
    { title: '药品名称', field: 'storehouse_name', width: 160 },
    { title: '医药分类', field: 'state', width: 100 },
    { title: '装箱规格', field: 'drug_count', width: 100 },
    { title: '最小包装单位', field: 'quantity', width: 100 },
    { title: '最小包装数量', field: 'create_by', width: 140 },
    { title: '包装单位', field: 'create_time', width: 160 },
    { title: '包装单位数量', field: 'relation_order', width: 140 },
    { title: '单价', field: 'price', width: 160 },
    { title: '金额', field: 'money', width: 140 },
    { title: '最近入库时间', field: 'latest_in_date', width: 160 },
    { title: '入库供应商', field: 'supplier_name', width: 140 },
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
