<script setup lang="ts">
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {NCard, NButton} from 'naive-ui'
import {
  businessTypes,
  drugCateGory, settleTypes,
  specialDrugTypes
} from "#/views/gsp/firstEnter/constant";
import {useTabs} from "@vben/hooks";
import {useRouter} from "vue-router";
import {customerType} from "#/views/gsp/firstClient/constant";
import {interType, prescriptionType} from "#/views/gsp/firstBreed/constant";

const tabs = useTabs()
const router = useRouter()
const [BaseForm, formApi] = useVbenForm({
  showCollapseButton: false,
  showDefaultActions: false,
  commonConfig: {
    colon: true,
    labelWidth: 150,
  },
  layout: 'horizontal',
  actionWrapperClass: 'text-right',
  wrapperClass: 'grid-cols-3',
  schema: [
    {
      component: 'Input',
      rules: 'required',
      label: '药品代码',
      fieldName: 'code',
    },
    {
      component: 'Input',
      label: '药品名称',
      fieldName: 'name',
    },
    {
      component: 'Input',
      label: '输入码',
      fieldName: 'input_code',
    },
    {
      component: 'Input',
      label: '产地',
      fieldName: 'place',
    },
    {
      component: 'Input',
      label: '通用名',
      fieldName: 'common_name',
    },
    {
      component: 'Input',
      label: '通用名编码',
      fieldName: 'common_code',
    },
    {
      component: 'Input',
      label: '药品溯源码',
      fieldName: 'trace_code',
    },
    {
      component: 'Input',
      label: '规格',
      fieldName: 'spec',
    },
    {
      component: 'Input',
      label: '自编码',
      fieldName: 'input_code',
    },
    {
      component: 'Input',
      label: '生产厂家',
      fieldName: 'manufacturer',
    },
    {
      component: 'Input',
      label: '上市许可持有人',
      fieldName: 'holder',
    },
    {
      component: 'Input',
      label: '批准文号',
      fieldName: 'approval_number',
    },
    {
      component: 'Input',
      label: '装箱规格',
      fieldName: 'packing_spec',
    },
    {
      component: 'Select',
      componentProps: {
        options: prescriptionType
      },
      label: '是否处方',
      fieldName: 'prescription',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      label: '剂型',
      fieldName: 'dosage_form',
    },
    {
      component: 'DatePicker',
      label: '批件有效期',
      fieldName: 'effective_date',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      label: '储存条件',
      fieldName: 'storage_condition',
    },
    {
      component: 'Select',
      rules: 'required',
      label: '医药分类',
      fieldName: 'medicine_category',
      componentProps: {
        options: drugCateGory
      }
    },
    {
      component: 'Input',
      label: '条码',
      fieldName: 'bar_code',
    },
    {
      component: 'Select',
      label: '特殊药品类型',
      fieldName: 'special_drug_type',
      componentProps: {
        multiple: true,
        options: specialDrugTypes
      }
    },
    {
      component: 'TreeSelect',
      componentProps: {
        options: [],
        multiple: true
      },
      label: '药品分类',
      fieldName: 'category_id',
    },
    {
      component: 'Select',
      label: '保质期',
      fieldName: 'period',
      renderComponentContent: () => ({
        suffix: () => '月',
      }),
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider1',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      label: '最小包装单位',
      fieldName: 'unit',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      label: '包装单位',
      fieldName: 'package_unit',
    },
    {
      component: 'Input',
      label: '换算率',
      fieldName: 'package_ratio',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      label: '销售单位',
      fieldName: 'sale_unit',
    },
    {
      component: 'Input',
      label: '换算率',
      fieldName: 'sale_ratio',
    },
    // {
    //   component: 'Divider',
    //   label: '',
    //   fieldName: '_divider2',
    //   formItemClass:'col-span-3',
    //   hideLabel: true,
    // },
    // {
    //   component: 'Upload',
    //   label: '药品图片',
    //   fieldName: 'drug_files',
    // },
    // {
    //   component: 'Divider',
    //   label: '',
    //   fieldName: '_divider3',
    //   formItemClass:'col-span-3',
    //   hideLabel: true,
    // },
    // {
    //   component: 'Upload',
    //   label: '其他附件',
    //   fieldName: 'other_files',
    // },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider4',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Input',
      label: '采购价',
      fieldName: 'purchase_price',
    },
    {
      component: 'Input',
      label: '批发价',
      fieldName: 'wholesale_price',
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider5',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Input',
      label: '注册商标',
      fieldName: 'registered_trademark',
    },
    {
      component: 'Select',
      label: '内用或外用',
      fieldName: 'internal_or_external',
      componentProps: {
        options: interType
      }
    },
    {
      component: 'Input',
      label: '性状',
      fieldName: 'properties',
    },
    {
      component: 'Input',
      label: '功能分类',
      fieldName: 'function_category',
    },
    {
      component: 'Input',
      label: '税率',
      fieldName: 'tax_rate',
    },
    {
      component: 'Input',
      label: 'GMP认证',
      fieldName: 'gmp_certification',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea',
      },
      label: '药品备注',
      fieldName: 'memo',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea',
      },
      label: '药品说明',
      fieldName: 'description',
    },
    {
      component: 'CheckboxGroup',
      label: '',
      fieldName: 'checkbox',
      componentProps: {
        options: [
          { label: '是否含特殊药品', value: 'special_drug_preparation' },
          { label: '冷藏品', value: 'cold_storage' },
          { label: '重点养护', value: 'key_care' },
          { label: '停用', value: 'stop_sale' },
        ],
      },
      formItemClass: 'col-start-1',
    },
  ]
})
const goBack = () => {
  tabs.closeCurrentTab()
  router.back()
}
const saveItem = async () => {
  console.log(await formApi.getValues())
}
</script>
<template>
  <Page auto-content-height>
    <template #title>
      <n-button @click="goBack" type="default" class="buttonWidth">返回</n-button>
      <n-button @click="saveItem" type="info" class="buttonWidth" style="margin-left: 10px">保存</n-button>
    </template>
    <n-card>
      <BaseForm />
    </n-card>
  </Page>
</template>
