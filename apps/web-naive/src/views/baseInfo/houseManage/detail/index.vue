<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {NButton, NCard} from "naive-ui";
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {useTabs} from "@vben/hooks";
import {houseApi} from "#/views/baseInfo/houseManage/api";
import {commonFormConfig} from "#/util/constant";
import {BackIcon, SaveIcon} from '@vben/icons';

const route = useRoute()
const router = useRouter()
const tabs = useTabs()
const [BaseForm, formApi] = useVbenForm({
  ...commonFormConfig,
  wrapperClass: 'grid-cols-3',
  schema: [
    {
      component: 'Input',
      rules: 'required',
      label: '仓库代码',
      fieldName: 'code',
    },
    {
      component: 'Input',
      rules: 'required',
      label: '仓库名称',
      fieldName: 'name',
    },
    {
      component: 'Input',
      label: '仓库地址',
      fieldName: 'address',
    },
    {
      component: 'Input',
      label: '仓库面积(m²)',
      fieldName: 'area',
    },
    {
      component: 'Input',
      label: '联系人',
      fieldName: 'contact',
    },
    {
      component: 'Input',
      label: '联系电话',
      fieldName: 'tel',
    },
    {
      component: 'Switch',
      label: '是否启用',
      fieldName: 'status',
    },
  ]
})
onMounted(() => {
  if (route.query.id !== '-1') {
    // 进行初始化请求
  }
})
const goBack = () => {
  tabs.closeCurrentTab()
  router.back()
}
const saveItem = async () => {
  formApi.validate().then(validRes => {
    if (validRes.valid) {
      formApi.getValues().then(async (res) => {
        let result
        if (route.query.id === '-1') {
          result = await houseApi.add({...res})
        } else {
          result = await houseApi.update({...res})
        }
        if (result.code === 200) {
          goBack()
        }
      })
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
    <n-card title="仓库详情">
      <BaseForm />
    </n-card>
  </Page>
</template>
