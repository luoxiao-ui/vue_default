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

const tabs = useTabs()
const router = useRouter()
const [BaseForm, formApi] = useVbenForm({
  showCollapseButton: false,
  showDefaultActions: false,
  commonConfig: {
    colon: true,
    labelWidth: 150,
    disabled: true,
    componentProps: {
      placeholder: ''
    }
  },
  layout: 'horizontal',
  actionWrapperClass: 'text-right',
  wrapperClass: 'grid-cols-3',
  schema: [
    {
      component: 'Input',
      label: '客户编号',
      fieldName: 'client_code',
    },
    {
      component: 'Input',
      label: '客户名称',
      fieldName: 'name',
    },
    {
      component: 'Input',
      label: '拼音码',
      fieldName: 'short_code',
    },
    {
      component: 'Input',
      label: '注册地址',
      fieldName: 'address',
    },
    {
      component: 'Input',
      label: '仓库地址',
      fieldName: 'storehouse_address',
    },
    {
      component: 'Select',
      label: '客户机构',
      fieldName: 'customer_type',
      componentProps: {
        options: customerType
      }
    },
    {
      component: 'Input',
      label: '公司电话',
      fieldName: 'company_tel',
    },
    {
      component: 'Input',
      label: '联系人',
      fieldName: 'contact',
    },
    {
      component: 'Input',
      label: '建档时间',
      fieldName: 'create_time',
    },
    {
      component: 'Input',
      label: 'GSP/GMP证书编号',
      fieldName: 'certificate_number',
    },
    {
      component: 'Input',
      label: '联系电话',
      fieldName: 'tel',
    },
    {
      component: 'Input',
      label: '药监入网编号',
      fieldName: 'drug_supervision_code',
    },
    {
      component: 'Select',
      componentProps: {
        options: businessTypes
      },
      label: '经营方式',
      fieldName: 'business_type',
    },
    {
      component: 'Input',
      label: '委托书有效期',
      fieldName: 'certificate_validity',
    },
    {
      component: 'Input',
      label: '质量认证情况',
      fieldName: 'quality_certification',
    },
    {
      component: 'Input',
      label: '首营客户编号',
      fieldName: 'code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '质量机构负责人',
      fieldName: 'quality_institution_principal',
    },
    {
      component: 'Input',
      label: '质保协议起始日期',
      fieldName: 'quality_assurance_agreement_start_date',
    },
    {
      component: 'Input',
      label: '质保协议有效期',
      fieldName: 'quality_assurance_agreement_validity',
    },
    {
      component: 'Select',
      componentProps: {
        options: specialDrugTypes,
        multiple: true
      },
      label: '特殊药品经营范围',
      fieldName: 'merchant_person',
    },
    {
      component: 'Select',
      componentProps: {
        options: drugCateGory,
        multiple: true,
      },
      label: '药品经营范围控制',
      fieldName: 'medicine_category',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea',
      },
      label: '备注',
      fieldName: 'memo',
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider1',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    // {
    //   component: 'Upload',
    //   label: '许可证附件',
    //   fieldName: 'license_files',
    //   formItemClass:'col-span-3',
    // },
    {
      component: 'Input',
      label: '许可证名称',
      fieldName: 'license_name',
    },
    {
      component: 'Input',
      label: '许可证编号',
      fieldName: 'license_number',
    },
    {
      component: 'Input',
      label: '发证机关',
      fieldName: 'issuing_authority',
    },
    {
      component: 'Input',
      label: '负责人',
      fieldName: 'principal',
    },
    {
      component: 'Input',
      label: '发证日期',
      fieldName: 'date',
    },
    {
      component: 'Input',
      label: '有效期至',
      fieldName: 'valid_until',
    },
    {
      component: 'CheckboxGroup',
      label: '',
      fieldName: 'can_operate_cold_storage',
      componentProps: {
        options: [
          { label: '可经营冷藏品', value: 'can_operate_cold_storage' },
        ],
      },
      formItemClass: 'col-start-1',
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
      label: '统一社会信用代码',
      fieldName: 'social_credit_code',
    },
    {
      component: 'Select',
      componentProps: {
        options: businessTypes
      },
      label: '经营方式',
      fieldName: 'business_type',
    },
    {
      component: 'Input',
      label: '发照机关',
      fieldName: 'management_issue_authority',
    },
    {
      component: 'Input',
      label: '发照日期',
      fieldName: 'management_issue_date',
    },
    {
      component: 'Input',
      label: '法定代表人',
      fieldName: 'legal_representative',
    },
    {
      component: 'Input',
      label: '注册资金',
      fieldName: 'registered_capital',
    },
    {
      component: 'Input',
      label: '执照有效期',
      fieldName: 'license_validity',
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider3',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Input',
      label: '开户行',
      fieldName: 'bank_name',
    },
    {
      component: 'Input',
      label: '开户名',
      fieldName: 'account_name',
    },
    {
      component: 'Input',
      label: '银行帐号',
      fieldName: 'bank_account',
    },
    {
      component: 'Input',
      label: '税号',
      fieldName: 'tax_number',
    },
    {
      component: 'Select',
      label: '结算模式',
      fieldName: 'settlement_mode',
      componentProps: {
        options: settleTypes
      }
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider4',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Input',
      label: '应收额',
      fieldName: 'receivable_money',
    },
    {
      component: 'Input',
      label: '应付额',
      fieldName: 'payable_money',
    },
    {
      component: 'Input',
      label: '预收款',
      fieldName: 'advance_payment',
    },
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
    // }
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
