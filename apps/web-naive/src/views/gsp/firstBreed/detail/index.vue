<script setup lang="ts">
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {NCard, NButton} from 'naive-ui'
import {
  businessTypes,
  drugCateGory,
  settleTypes,
  specialDrugTypes
} from "#/views/gsp/firstEnter/constant";
import {isTransText} from "#/util";
import {useTabs} from "@vben/hooks";
import {useRouter} from "vue-router";
import {firstBreedTypes, interType, prescriptionType} from "#/views/gsp/firstBreed/constant";

const tabs = useTabs()
const router = useRouter()
const [BaseForm, formApi] = useVbenForm({
  showCollapseButton: false,
  showDefaultActions: false,
  commonConfig: {
    colon: true,
    labelWidth: 150
  },
  layout: 'horizontal',
  actionWrapperClass: 'text-right',
  wrapperClass: 'grid-cols-3',
  schema: [
    {
      component: 'Input',
      rules: 'required',
      label: '通用名称',
      fieldName: 'common_name',
    },
    {
      component: 'Input',
      label: '通用名编码',
      fieldName: 'common_code',
    },
    {
      component: 'Select',
      componentProps: {
        options: firstBreedTypes
      },
      rules: 'required',
      label: '首营类型',
      fieldName: 'type',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '规格',
      fieldName: 'spec',
    },
    {
      component: 'Input',
      label: '药品名称',
      rules: 'required',
      fieldName: 'name',
    },
    {
      component: 'Input',
      label: '输入码',
      fieldName: 'input_code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '自编码',
      fieldName: 'self_code',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      rules: 'required',
      label: '剂型',
      fieldName: 'dosage_form',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '生产厂家',
      fieldName: 'manufacturer',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '产地',
      fieldName: 'place',
    },
    {
      component: 'Input',
      label: '产地编码',
      fieldName: 'place_code',
    },
    {
      component: 'Input',
      componentProps: {
        options: drugCateGory
      },
      rules: 'required',
      label: '医药分类',
      fieldName: 'medicine_category',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '批准文号',
      fieldName: 'approval_number',
    },
    {
      component: 'Input',
      label: '上市许可持有人',
      fieldName: 'holder',
    },
    {
      component: 'Input',
      label: '传真',
      fieldName: 'fax',
    },
    {
      component: 'Input',
      label: '装箱规格',
      fieldName: 'packing_spec',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '注册商标',
      fieldName: 'registered_trademark',
    },
    {
      component: 'Input',
      label: '注册证批件号',
      fieldName: 'registration_certificate_number',
    },
    {
      component: 'DatePicker',
      label: '批件有效期',
      fieldName: 'effective_date',
    },
    {
      component: 'Input',
      label: '质量标准',
      fieldName: 'quality_standard',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '保质期',
      fieldName: 'period',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      rules: 'required',
      label: '储存条件',
      fieldName: 'storage_condition',
    },
    {
      component: 'Select',
      componentProps: {
        options: specialDrugTypes
      },
      rules: 'required',
      label: '特殊药品类型',
      fieldName: 'special_drug_type',
    },
    {
      component: 'Select',
      componentProps: {
        options: isTransText('是', '否')
      },
      label: '含特殊药品制剂',
      fieldName: 'special_drug_preparation',
    },
    {
      component: 'Select',
      label: '是否处方',
      fieldName: 'prescription',
      rules: 'required',
      componentProps: {
        options: prescriptionType
      }
    },
    {
      component: 'Input',
      label: '条码',
      fieldName: 'bar_code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: 'GMP认证',
      fieldName: 'gmp_certification',
    },
    {
      component: 'Select',
      componentProps: {
        options: interType
      },
      rules: 'required',
      label: '内用或外用',
      fieldName: 'internal_or_external',
    },
    {
      component: 'TreeSelect',
      rules: 'required',
      label: '药品分类',
      fieldName: 'category_id',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      rules: 'required',
      label: '功能分类',
      fieldName: 'function_category',
    },
    {
      component: 'Select',
      componentProps: {
        options: isTransText('是', '否')
      },
      rules: 'required',
      label: '是否医保商品',
      fieldName: 'medical_insurance_drug',
    },
    {
      component: 'Input',
      rules: 'required',
      componentProps: {
        disabled: true,
      },
      label: '首营编号',
      fieldName: 'code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '税率',
      fieldName: 'tax_rate',
    },
    {
      component: 'Input',
      label: '性状',
      fieldName: 's',
    },
    {
      component: 'Input',
      label: '药品溯源码',
      fieldName: 'trace_code',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea',
      },
      label: '药品备注',
      fieldName: 'memo',
      formItemClass: 'col-start-1',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea',
      },
      label: '药品说明',
      fieldName: 'description',
      formItemClass: 'col-start-1',
    },
    {
      component: 'CheckboxGroup',
      label: '',
      fieldName: 'checkbox',
      componentProps: {
        name: 'cname',
        options: [
          { label: '冷藏品', value: 'cold_storage' },
          { label: '重点养护', value: 'key_care' },
        ],
      },
      formItemClass: 'col-start-1',
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
      rules: 'required',
      label: '最小包装单位',
      fieldName: 'unit',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      rules: 'required',
      label: '包装单位',
      fieldName: 'package_unit',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '换算率',
      fieldName: 'package_ratio',
    },
    {
      component: 'Select',
      componentProps: {
        options: []
      },
      rules: 'required',
      label: '销售单位',
      fieldName: '销售单位',
      formItemClass: 'col-start-1',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '换算率',
      fieldName: 'package_ratio',
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider2',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Input',
      label: '正常出厂价',
      fieldName: 'normal_factory_price',
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
    // {
    //   component: 'Divider',
    //   label: '',
    //   fieldName: '_divider3',
    //   formItemClass:'col-span-3',
    //   hideLabel: true,
    // },
    // {
    //   component: 'Upload',
    //   label: '药品图片',
    //   fieldName: 'drug_files',
    //   formItemClass:'col-span-3',
    // },
    // {
    //   component: 'Divider',
    //   label: '',
    //   fieldName: '_divider4',
    //   formItemClass:'col-span-3',
    //   hideLabel: true,
    // },
    // {
    //   component: 'Upload',
    //   label: '其他附件',
    //   fieldName: 'other_files',
    //   formItemClass:'col-span-3',
    // },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider5',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Select',
      label: '质量管理员结论',
      fieldName: 'quality_administrator_conclusion',
      componentProps: {
        options: isTransText('是', '否'),
        disabled: true,
      },
    },
    {
      component: 'DatePicker',
      label: '签字日期',
      fieldName: 'quality_administrator_date',
      componentProps: {
        disabled: true
      },
    },
    {
      component: 'Input',
      label: '质量管理员结论备注',
      fieldName: 'quality_administrator_conclusion_memo',
      componentProps: {
        type: 'textarea',
        disabled: true
      },
      formItemClass:'col-start-1',
    },
    {
      component: 'Select',
      label: '质量负责人意见',
      fieldName: 'quality_responsible_audit_opinion',
      componentProps: {
        options: isTransText('是', '否'),
        disabled: true,
      },
      formItemClass:'col-start-1',
    },
    {
      component: 'DatePicker',
      label: '签字日期',
      fieldName: 'quality_responsible_audit_date',
      componentProps: {
        disabled: true,
      },
    },
    {
      component: 'Input',
      label: '质量负责人审批结论',
      fieldName: 'quality_responsible_audit_opinion_memo',
      componentProps: {
        disabled: true,
        type: 'textarea'
      },
      formItemClass:'col-start-1',
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
