<script setup lang="ts">
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {NCard} from 'naive-ui'
const [BaseForm] = useVbenForm({
  showCollapseButton: false,
  resetButtonOptions: {
    show: false
  },
  submitButtonOptions: {
    content: '保存',
  },
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
</script>
<template>
  <Page content-class="flex flex-col gap-4">
    <n-card title="参数配置">
      <BaseForm />
    </n-card>
  </Page>
</template>
