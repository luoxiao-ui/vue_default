<script setup lang="ts">
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {NCard, NButton} from 'naive-ui'
import {
  businessCategoryTypes,
  businessTypes,
  drugCateGory,
  settleTypes,
  specialDrugTypes
} from "#/views/gsp/firstEnter/constant";
import {isTransText} from "#/util";
import {useTabs} from "@vben/hooks";
import {useRouter} from "vue-router";

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
      label: '企业名称',
      fieldName: 'name',
    },
    {
      component: 'Select',
      componentProps: {
        options: businessCategoryTypes
      },
      rules: 'required',
      label: '生产经营类别',
      fieldName: 'business_category',
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
      label: '拼音码',
      fieldName: 'short_code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '注册地址',
      fieldName: 'address',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '仓库地址',
      fieldName: 'storehouse_address',
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
      label: '主要产品',
      fieldName: 'main_product',
    },
    {
      component: 'Input',
      componentProps: {
        type: 'textarea'
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
    //   rules: 'required',
    //   label: '许可证附件',
    //   fieldName: 'license_files',
    //   formItemClass:'col-span-3'
    // },
    {
      component: 'Input',
      rules: 'required',
      label: '许可证名称',
      fieldName: 'license_name',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '许可证编号',
      fieldName: 'license_number',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '发证机关',
      fieldName: 'issuing_authority',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '负责人',
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
      }
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
    //   rules: 'required',
    //   label: '营业执照附件',
    //   fieldName: 'business_license_files',
    //   formItemClass:'col-span-3'
    // },
    {
      component: 'Input',
      rules: 'required',
      label: '统一社会信用代码',
      fieldName: 'social_credit_code',
    },
    {
      component: 'Select',
      componentProps: {
        options: businessTypes
      },
      rules: 'required',
      label: '经营方式',
      fieldName: 'business_type',
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
    },
    {
      component: 'Input',
      rules: 'required',
      label: '经济性质',
      fieldName: 'economic_nature',
    },
    {
      component: 'Input',
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
      rules: 'required',
      label: '质量认证情况',
      fieldName: 'quality_certification',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '质量机构负责人',
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
      rules: 'required',
      label: '委托有效期',
      fieldName: 'entrust_validity',
    },
    {
      component: 'DatePicker',
      rules: 'required',
      label: '质保协议起始日期',
      fieldName: 'quality_assurance_agreement_start_date',
    },
    {
      component: 'DatePicker',
      rules: 'required',
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
      rules: 'required',
      label: '开户行',
      fieldName: 'bank_name',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '开户名',
      fieldName: 'account_name',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '银行帐号',
      fieldName: 'bank_account',
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
      rules: 'required',
      componentProps: {
        options: settleTypes
      },
      fieldName: 'settlement_mode',
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
    //   rules: 'required',
    //   label: '其他附件',
    //   fieldName: 'other_files',
    //   formItemClass:'col-span-3'
    // },
    {
      component: 'Divider',
      label: '',
      fieldName: '_divider7',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Select',
      label: '网上核查',
      fieldName: 'online_query',
      componentProps: {
        options: isTransText('已核查', '未核查'),
        disabled: true,
      },
      formItemClass:'col-start-1',
    },
    {
      component: 'Select',
      label: '质量管理员结论',
      fieldName: 'quality_administrator_conclusion',
      componentProps: {
        options: isTransText('是', '否'),
        disabled: true,
      },
      formItemClass:'col-start-1',
    },
    {
      component: 'DatePicker',
      label: '签字日期',
      fieldName: 'quality_administrator_date',
      componentProps: {
        options: isTransText('是', '否'),
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
      component: 'Divider',
      label: '',
      fieldName: '_divider8',
      formItemClass:'col-span-3',
      hideLabel: true,
    },
    {
      component: 'Select',
      label: '质量负责人意见',
      fieldName: 'quality_responsible_audit_opinion',
      componentProps: {
        options: isTransText('是', '否'),
        disabled: true,
      },
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
