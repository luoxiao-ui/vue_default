<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {NButton} from "naive-ui";
import {Page, type VbenFormProps} from "@vben/common-ui";
import {useTabs} from "@vben/hooks";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";


const route = useRoute()
const router = useRouter()
const tabs = useTabs()
const loading = ref(false)
const data = ref([])
const pageConfig: Ref<{ current: number, pageSize: number }> = ref({
  current: 1,
  pageSize: 50,
})
const formOptions: VbenFormProps = {
  showCollapseButton: false,
  resetButtonOptions: {
    content: '返回',
    class: 'buttonWidth'
  },
  submitButtonOptions: {
    content: '保存',
    class: 'buttonWidth'
  },
  handleReset: () => {
    tabs.closeCurrentTab()
    router.back()
  },
  handleSubmit: (values) => {
    if (route.query.id === '-1') {
      // const result = await houseApi.add({...values})
    } else {
      // const result = await houseApi.update({...values})
    }
  },
  actionWrapperClass: 'text-right',
  commonConfig: {
    colon: true,
  },
  layout: 'horizontal',
  wrapperClass: 'grid-cols-3',
  schema: [
    {
      component: 'Input',
      rules: 'required',
      label: '库位代码',
      fieldName: 'code',
    },
    {
      component: 'Select',
      rules: 'required',
      label: '仓库',
      fieldName: 'storehouse_id',
    },
    {
      component: 'Input',
      label: '库位名称',
      fieldName: 'name',
    },
    {
      component: 'TreeSelect',
      label: '库区',
      fieldName: 'category_id',
    },
    {
      component: 'Input',
      label: '长(m)',
      fieldName: 'length',
    },
    {
      component: 'Input',
      label: '宽(m)',
      fieldName: 'width',
    },
    {
      component: 'Input',
      label: '高(m)',
      fieldName: 'height',
    },
    {
      component: 'Input',
      componentProps: {
        disabled: true,
        placeholder: ''
      },
      dependencies: {
        triggerFields: ['length', 'height', 'width'],
        trigger(values, form) {
          if(values.length && values.height && values.width) {
            form.setFieldValue('volume', String(parseFloat(values.length) * parseFloat(values.height) * parseFloat(values.width)));
          } else {
            form.setFieldValue('volume', '')
          }
        },
      },
      label: '体积(m³)',
      fieldName: 'volume',
    },
  ]
}
const gridOptions: VxeTableGridOptions<any> = {
  loading: loading.value,
  columns: [
    {title: '序号', type: 'checkbox', width: 80},
    {title: '药品名称', field: 'name', width: 120},
    {title: '药品条码', field: 'bar_code', width: 120},
    {title: '药品规格', field: 'spec', width: 120},
    {title: '单位', field: 'unit', width: 100},
  ],
  data: data.value,
  pagerConfig: {
    currentPage: pageConfig.value.current,
    pageSize: pageConfig.value.pageSize,
    pageSizes: [50, 100, 200]
  },
  height: 'auto',
  keepSource: true,
  stripe: true,
  toolbarConfig: {
    custom: true,
    export: true,
    refresh: true,
    resizable: true,
    search: true,
    zoom: true,
  },
  formConfig: {
    items: [
      { slots: {  default: 'default'  } }
    ]
  }
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
</script>
<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <n-button @click="addItem" type="info" style="min-width: 80px">
          新增
        </n-button>
        <n-button @click="deleteItem" type="error" style="min-width: 80px;margin-left: 10px">
          删除
        </n-button>
      </template>
    </Grid>
  </Page>
</template>
