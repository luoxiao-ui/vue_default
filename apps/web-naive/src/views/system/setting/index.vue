<script setup lang="ts">
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {NButton, NCard, useDialog} from 'naive-ui'
import {BackIcon, SaveIcon} from "@vben/icons";
import {useRouter} from "vue-router";
import {useTabs} from "@vben/hooks";
import {onMounted} from "vue";
const router = useRouter()
const tabs = useTabs()
const dialog = useDialog()
const [BaseForm] = useVbenForm({
  showCollapseButton: false,
  showDefaultActions: false,
  commonConfig: {
    colon: true,
  },
  layout: 'horizontal',
  actionWrapperClass: 'text-right',
  wrapperClass: 'grid-cols-4',
  schema: [
    {
      component: 'Input',
      label: '药品税率维护',
      fieldName: 'tex_number',
    },
  ]
})
const init = async () => {
  // const result = await settingApi.query()
  // if (result.code === 200) {
  //   await formApi.setFieldValue('tex_number', result.data.tex_number)
  // }
}
onMounted(()=> {
  init()
})
const goBack = () => {
  tabs.closeCurrentTab()
  router.back()
}
const saveItem = async () => {
  dialog.warning({
    title: '保存提示',
    content: '确定要保存吗？',
    positiveText: '保存',
    negativeText: '取消',
    onPositiveClick: async () => {
      // const values = await formApi.getValues()
      // const result = await settingApi.update({...values})
      // if (result.code === 200) {
      //   dialog.success({
      //     title: '保存成功',
      //   })
      // }
    },
  })
}
</script>
<template>
  <Page content-class="flex flex-col gap-4">
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
    <n-card title="参数配置">
      <BaseForm />
    </n-card>
  </Page>
</template>
