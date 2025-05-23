<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {NCard} from "naive-ui";
import {Page} from "@vben/common-ui";
import {useVbenForm} from "#/adapter/form";
import {useTabs} from "@vben/hooks";

const route = useRoute()
const router = useRouter()
const tabs = useTabs()
const [BaseForm] = useVbenForm({
  handleReset: () => {
    tabs.closeCurrentTab()
    router.back()
  },
  handleSubmit: async (values) => {
    console.log(values)
    if(route.query.id === '-1') {
      // const result = await houseApi.add({...values})
    } else {
      // const result = await houseApi.update({...values})
    }
  },
  showCollapseButton: false,
  resetButtonOptions: {
    content: '返回',
  },
  commonConfig: {
    colon: true,
  },
  layout: 'horizontal',
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
onMounted(()=> {
  if(route.query.id !== '-1') {
    // 进行初始化请求
  }
})
</script>
<template>
  <Page content-class="flex flex-col gap-4">
    <n-card title="仓库详情">
      <BaseForm />
    </n-card>
    <div class="formWidth"></div>
  </Page>
</template>
