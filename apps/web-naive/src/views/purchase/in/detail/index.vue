<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {NButton, NFlex} from "naive-ui";
import {Page, type VbenFormProps} from "@vben/common-ui";
import {useTabs} from "@vben/hooks";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {SaveIcon, AuditIcon, BackIcon, AddIcon, ImportIcon, DeleteIcon} from "@vben/icons";
import {commonFormConfig, commonGradConfig, textColor} from "#/util/constant";
import {purchaseReceiveStatus} from "#/views/purchase/receive/constant";

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
      label: '采购单号',
      fieldName: 'purchase_orders',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '所属客户',
      fieldName: 'clients',
      componentProps: {
        placeholder: '请选择客户'
      }
    },
    {
      component: 'Input',
      label: '收货人',
      fieldName: 'create_by',
      componentProps: {
        disabled: true,
      }
    },
    {
      component: 'Input',
      label: '收货日期',
      fieldName: 'audit_date',
      componentProps: {
        disabled: true
      }
    },
    {
      component: 'Input',
      label: '供应商',
      fieldName: 'suppliers',
      componentProps: {
        placeholder: '请选择供应商'
      }
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      label: '收货仓库',
      fieldName: 'storehouse_name',
    },
    {
      component: 'Input',
      label: '单据号',
      fieldName: 'fid',
      componentProps: {
        disabled: true
      }
    },
    {
      component: 'Input',
      label: '单据状态',
      fieldName: 'state',
      componentProps: {
        options: purchaseReceiveStatus,
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
    {title: '药品追溯码', field: 'drug_trace_code', width: 140},
    {title: '药品名称', field: 'drug_name', width: 140},
    {title: '规格', field: 'drug_spec', width: 100},
    {title: '单位', field: 'unit', width: 100},
    {title: '采购数量', field: 'quantity', width: 100},
    {title: '收货数量', field: 'receive_quantity', width: 100},
    {title: '单价', field: 'price', width: 100},
    {title: '金额', field: 'money', width: 100},
    {title: '赠品单位', field: 'present_unit', width: 100},
    {title: '赠品数量', field: 'present_quantity', width: 100},
    {title: '生产批次号', field: 'batch_number', width: 100},
    {title: '生产日期', field: 'producing_date', width: 100},
    {title: '有效日期', field: 'expire_date', width: 100},
    {title: '备注', field: 'memo', width: 200},
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
const deleteItem = () => {
}
const goBack = () => {
  tabs.closeCurrentTab()
  router.back()
}
</script>
<template>
  <Page auto-content-height>
    <template #title>
      <n-button class="buttonWidth" @click="addItem" type="info" style="margin-left: 10px;">
        <template #icon>
          <SaveIcon />
        </template>
        保存
      </n-button>
      <n-button class="buttonWidth" @click="addItem" type="info" style="margin-left: 10px">
        <template #icon>
          <AuditIcon />
        </template>
        审核
      </n-button>
      <n-button class="buttonWidth" type="default" @click="goBack" style="margin-left: 10px">
        <template #icon>
          <BackIcon />
        </template>
        返回
      </n-button>
    </template>
    <Grid>
      <template #toolbar-actions>
        <n-button class="buttonWidth" @click="deleteItem" type="info" style="margin-left: 10px">
          <template #icon>
            <AddIcon />
          </template>
          批量新增
        </n-button>
        <n-button class="buttonWidth" @click="deleteItem" type="info" style="margin-left: 10px">
          <template #icon>
            <ImportIcon />
          </template>
          导入
        </n-button>
      </template>
      <template #action>
        <n-flex justify="center">
          <!--          <AddIcon :style="{color: textColor['info'], fontSize: '16px', cursor: 'pointer'}" />-->
          <DeleteIcon :style="{color: textColor['info'], fontSize: '16px', cursor: 'pointer'}" />
        </n-flex>
      </template>
    </Grid>
  </Page>
</template>
