<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {NButton, NFlex} from "naive-ui";
import {Page, type VbenFormProps} from "@vben/common-ui";
import {useTabs} from "@vben/hooks";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {SaveIcon, AuditIcon, BackIcon, DeleteIcon, DenyIcon, PrintIcon, ImportIcon, AddIcon} from "@vben/icons";
import {commonFormConfig, commonGradConfig, textColor} from "#/util/constant";
import {wholeSaleOrderStatus} from "#/views/sale/saleOrder/constant";
import {checkStatus} from "#/views/sale/saleCheck/constant";

const route = useRoute()
const router = useRouter()
const tabs = useTabs()
const loading = ref(false)
const data = ref([{ fid: 1}])
const pageConfig: Ref<{ current: number, pageSize: number }> = ref({
  current: 1,
  pageSize: 50,
})
const formOptions: VbenFormProps = {
  ...commonFormConfig,
  commonConfig: {
    componentProps: {
      placeholder: ''
    }
  },
  schema: [
    {
      component: 'Input',
      label: '销售拣货单',
      fieldName: 'wholesale_pick_order_fid',
      componentProps: {
        placeholder: '请选择客户'
      }
    },
    {
      component: 'Input',
      label: '批发客户',
      fieldName: 'clients',
      componentProps: {
        placeholder: '请选择客户'
      }
    },
    {
      component: 'Select',
      label: '出库仓库',
      fieldName: 'storehouse_id',
      componentProps: {
        options: [],
      }
    },
    {
      component: 'Input',
      label: '单据号',
      fieldName: 'fid',
      componentProps: {
        options: [],
      }
    },
    {
      component: 'Input',
      label: '复核人',
      fieldName: 'create_by',
      componentProps: {
        disabled: true
      }
    },
    {
      component: 'Input',
      label: '复核日期',
      fieldName: 'create_time',
      componentProps: {
        placeholder: '请选择供应商'
      }
    },
    {
      component: 'Input',
      label: '复核状态',
      fieldName: 'state',
      componentProps: {
        options: checkStatus,
        disabled: true
      }
    },
    {
      component: 'Input',
      label: '备注',
      fieldName: 'memo'
    }
  ]
}
const gridOptions: VxeTableGridOptions<any> = {
  ...commonGradConfig,
  loading: loading.value,
  columns: [
    {title: '序号', type: 'checkbox', width: 80, fixed: 'left'},
    {title: '操作', slots: { default: 'action' }, width: 100, fixed: 'left'},
    {title: '药品代码', field: 'drug_code', width: 140},
    {title: '药品溯源码', field: 'drug_trace_code', width: 140},
    {title: '药品名称', field: 'drug_name', width: 140},
    {title: '规格', field: 'drug_spec', width: 100},
    {title: '库区', field: 'storage', width: 100},
    {title: '库位', field: 'storage_name', width: 100},
    {title: '生产批号', field: 'batch_number', width: 100},
    {title: '生产日期', field: 'producte_date', width: 100},
    {title: '单位', field: 'unit', width: 100},
    {title: '拣货数量', field: 'quantity', width: 100},
    {title: '复核数量', field: 'check_quantity', width: 100},
  ],
  data: data.value,
  pagerConfig: {
    currentPage: pageConfig.value.current,
    pageSize: pageConfig.value.pageSize,
    pageSizes: [50, 100, 200]
  },
};
const [Grid] = useVbenVxeGrid({
  gridOptions,
  formOptions,
})
onMounted(() => {
  if (route.query.id !== '-1') {
    // 进行初始化请求
  }
})
const addItem = () => {
}
const goBack = () => {
  tabs.closeCurrentTab()
  router.back()
}
</script>
<template>
  <Page auto-content-height>
    <template #title>
      <n-button class="buttonWidth" @click="addItem" type="info" style="margin-left: 10px">
        <template #icon>
          <PrintIcon />
        </template>
        打印
      </n-button>
      <n-button class="buttonWidth" type="default" @click="goBack" style="margin-left: 10px">
        <template #icon>
          <BackIcon />
        </template>
        返回
      </n-button>
    </template>
    <Grid>
      <template #action>
        <n-flex justify="center">
          <!--          <AddIcon :style="{color: textColor['info'], fontSize: '16px', cursor: 'pointer'}" />-->
          <DeleteIcon :style="{color: textColor['info'], fontSize: '16px', cursor: 'pointer'}" />
        </n-flex>
      </template>
    </Grid>
  </Page>
</template>
