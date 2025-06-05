<script setup lang="ts">
import {onMounted, type Ref, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {NButton} from "naive-ui";
import {Page, type VbenFormProps} from "@vben/common-ui";
import {useTabs} from "@vben/hooks";
import {useVbenVxeGrid} from "#/adapter/vxe-table";
import type {VxeTableGridOptions} from "@vben/plugins/vxe-table";
import {BackIcon, SaveIcon, DeleteIcon} from "@vben/icons";
import {commonFormConfig, commonGradConfig} from "#/util/constant";
import SelectModal from "#/component/selectModal/index.vue";
import {confirm} from '@vben/common-ui'

const route = useRoute()
const router = useRouter()
const tabs = useTabs()
const selected = ref<any>([])
const pageConfig: Ref<{ current: number, pageSize: number }> = ref({
  current: 1,
  pageSize: 50,
})
const formOptions: VbenFormProps = {
  ...commonFormConfig,
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
  ...commonGradConfig,
  columns: [
    {title: '序号', type: 'checkbox', width: 80},
    {title: '药品名称', field: 'name', width: 120},
    {title: '药品条码', field: 'bar_code', width: 120},
    {title: '药品规格', field: 'spec', width: 120},
    {title: '单位', field: 'unit', width: 100},
  ],
  pagerConfig: {
    currentPage: pageConfig.value.current,
    pageSize: pageConfig.value.pageSize,
    pageSizes: [50, 100, 200]
  },
};
const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions,
  formOptions,
  gridEvents: {
    checkboxChange: (row)=> {
      console.log('-----变化', row)
    }
  }
})
onMounted(() => {
  if (route.query.id !== '-1') {
    // 进行初始化请求
  }
})
const deleteItem = () => {
  const l = gridApi.grid.getCheckboxRecords()
  confirm({
    content: `是否确认删除这${l.length}条数据`,
  }).then().catch(()=> {})
}
const goBack = () => {
  tabs.closeCurrentTab()
  router.back()
}
const saveItem = () => {
  gridApi.formApi.validate().then(validRes => {
    if (validRes.valid) {
      if (route.query.id === '-1') {
        // const result = await storageApi.add({...values})
      } else {
        // const result = await storageApi.update({...values})
      }
    }
  })
}
</script>
<template>
  <Page auto-content-height>
    <template #title>
      <n-button @click="goBack" type="default" class="buttonWidth">
        <template #icon>
          <BackIcon />
        </template>
        返回
      </n-button>
      <n-button @click="saveItem" type="info" class="buttonWidth" style="margin-left: 10px">
        <template #icon>
          <SaveIcon />
        </template>
        保存
      </n-button>
    </template>
    <Grid>
      <template #toolbar-actions>
        <SelectModal
            key-field="id"
            :selected="selected"
            multiple
            selectType="drug"
            type="Button"
            @confirm="(array)=> {
              selected = [...array]
              gridApi.setGridOptions({
                data: [...array]
              })
            }"
        />
        <n-button :disabled="!selected.length" class="buttonWidth" @click="deleteItem" type="info" style="margin-left: 10px">
          <template #icon>
            <DeleteIcon />
          </template>
          删除
        </n-button>
      </template>
    </Grid>
  </Page>
</template>
