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
import {customerType} from "#/views/gsp/firstClient/constant";

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
      componentProps: {
        disabled: true,
      },
      label: '首营编号',
      fieldName: 'code',
    },
    {
      component: 'Input',
      rules: 'required',
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
      label: '药监入网编号',
      fieldName: 'drug_supervision_code',
    },
    {
      component: 'Input',
      label: '供方编号',
      fieldName: 'supplier_code',
    },
    {
      component: 'Input',
      label: '注册地址',
      rules: 'required',
      fieldName: 'address',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '仓库地址',
      fieldName: 'storehouse_address',
    },
    {
      component: 'Select',
      componentProps: {
        options: customerType
      },
      rules: 'required',
      label: '客户机构',
      fieldName: 'medication',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '联系人',
      fieldName: 'contact',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '联系电话',
      fieldName: 'tel',
    },
    {
      component: 'Input',
      label: '公司电话',
      fieldName: 'company_tel',
    },
    {
      component: 'Input',
      label: '邮政编码',
      fieldName: 'postal_code',
    },
    {
      component: 'Input',
      label: '邮件',
      fieldName: 'email',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '年产值',
      fieldName: 'annual_output_value',
    },
    {
      component: 'Input',
      label: '传真',
      fieldName: 'fax',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea',
      },
      label: '备注',
      fieldName: 'memo',
      formItemClass: 'col-start-1',
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
      rules: 'required',
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
      rules: 'required',
      fieldName: 'principal',
    },
    {
      component: 'DatePicker',
      rules: 'required',
      label: '发证日期',
      fieldName: 'issuing_date',
    },
    {
      component: 'DatePicker',
      rules: 'required',
      label: '有效期至',
      fieldName: 'valid_until',
    },
    {
      component: 'CheckboxGroup',
      label: '',
      fieldName: 'can_operate_cold_storage',
      componentProps: {
        name: 'cname',
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
    // {
    //   component: 'Upload',
    //   label: '许可证附件',
    //   fieldName: 'license_files',
    //   formItemClass:'col-span-3',
    // },
    {
      component: 'Input',
      rules: 'required',
      label: '统一社会信用代码',
      fieldName: 'social_credit_code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '发照机关',
      fieldName: 'management_issue_authority',
    },
    {
      component: 'DatePicker',
      rules: 'required',
      label: '发照日期',
      fieldName: 'management_issue_date',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '法定代表人',
      fieldName: 'legal_representative',
      formItemClass: 'col-start-1',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '经济性质',
      fieldName: 'economic_nature',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '注册资金',
      fieldName: 'registered_capital',
    },
    {
      component: 'DatePicker',
      rules: 'required',
      label: '执照有效期',
      fieldName: 'license_validity',
    },
    {
      component: 'Input',
      label: '经营范围',
      fieldName: 'sale_desc',
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
      component: 'Divider',
      label: '',
      fieldName: '_divider3',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Input',
      label: 'GSP/GMP证书编号',
      fieldName: 'certificate_number',
    },
    {
      component: 'DatePicker',
      label: '证书有效期',
      fieldName: 'certificate_validity',
    },
    {
      component: 'Input',
      label: '质量认证情况',
      fieldName: 'quality_certification',
    },
    {
      component: 'Input',
      label: '质量机构负责人',
      rules: 'required',
      fieldName: 'quality_institution_principal',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '质量机构人数',
      fieldName: 'quality_institution_number',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '质量机构联系方式',
      fieldName: 'quality_institution_contact',
    },
    {
      component: 'Select',
      componentProps: {
        options: specialDrugTypes,
        multiple: true,
      },
      rules: 'required',
      label: '特殊药品经营范围',
      fieldName: 'special_drug_type',
    },
    {
      component: 'Select',
      componentProps: {
        options: drugCateGory,
        multiple: true,
      },
      rules: 'required',
      label: '药品经营范围控制',
      fieldName: 'medicine_category',
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider4',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'DatePicker',
      label: '委托有效期',
      fieldName: 'entrust_validity',
      rules: 'required',
    },
    {
      component: 'DatePicker',
      rules: 'required',
      label: '质保协议起始日期',
      fieldName: 'quality_assurance_agreement_start_date',
    },
    {
      component: 'DatePicker',
      label: '质保协议有效期至',
      fieldName: 'quality_assurance_agreement_validity',
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
      label: '开户行',
      fieldName: 'bank_name',
      rules: 'required',
    },
    {
      component: 'Input',
      label: '开户名',
      fieldName: 'account_name',
      rules: 'required',
    },
    {
      component: 'Input',
      label: '银行帐号',
      fieldName: 'bank_account',
      rules: 'required',
    },
    {
      component: 'Input',
      label: '财务登记证',
      fieldName: 'finance_registration_certificate',
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
        options: settleTypes,
      },
    },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider6',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    // {
    //   component: 'Upload',
    //   label: '其他附件',
    //   fieldName: 'other_files',
    //   formItemClass:'col-span-3',
    // },
    // {
    //   component: 'Divider',
    //   label: '',
    //   fieldName: '_divider7',
    //   formItemClass:'col-span-3',
    //   hideLabel: true,
    // },
    {
      component: 'Select',
      label: '网上核查',
      fieldName: 'online_query',
      componentProps: {
        options: isTransText('已核查', '未核查'),
        disabled: true,
      },
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
