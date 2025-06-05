<script setup lang="ts">
import {NDropdown, NTree} from "naive-ui";
import {h, onMounted, ref} from "vue";
import {AddIcon, DeleteIcon, EditIcon} from "@vben/icons";
import {useVbenForm} from "#/adapter/form";
import {commonFormConfig} from "#/util/constant";
import {useVbenModal} from "@vben/common-ui";
export interface treeProps {
  defaultData: any
  queryTable: Function
  api: {
    getTree: Function,
    addTree: Function,
    deleteTree: Function,
    updateTree: Function,
  }
}
const treeData = ref<any>([])
const x = ref(0)
const y = ref(0)
const showDropdown = ref(false)
defineOptions({
  name: 'TreeModal'
})
const { defaultData, queryTable } = defineProps<treeProps>()
const options = ref([
  {label: '新增', key: 'add', icon: ()=> h(AddIcon, {})},
  {label: '更新', key: 'update', icon: ()=> h(EditIcon, {})},
  {label: '删除', key: 'delete', icon: ()=> h(DeleteIcon, {})}
])
const [BaseForm, formApi] = useVbenForm({
  ...commonFormConfig,
  wrapperClass: 'grid-cols-1',
  schema: [
    {
      label: '上级名称',
      component: 'Select',
      rules: 'required',
      fieldName: 'parent_id',
      componentProps: {
        options: [],
        disabled: true
      }
    },
    {
      label: '分类名称',
      component: 'Input',
      rules: 'required',
      fieldName: 'name'
    }
  ]
})
const [Modal, modalApi] = useVbenModal({
  centered: true,
  onConfirm: ()=> {
    formApi.validate().then(res=> {
      if(res.valid) {
        modalApi.close()
      }
    })
  }
})
const handleSelect = (key) => {
  showDropdown.value = !showDropdown.value
  modalApi.open()
}
const initTree = async () => {
  treeData.value = [
    {
      label: 'parent 1',
      key: '0-0',
      children: [
        {
          label: 'parent 1-0',
          key: '0-0-0',
          children: [
            {
              label: 'leaf',
              key: '0-0-0-0',
            },
            {
              label: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
      ],
    }]
  // const result = await api.queryTree()
  // if(result.code === 200) {
  // }
}
onMounted(() => {
  initTree().then()
})
</script>
<template>
  <div style="width: 200px;padding: 10px 0;text-align: center;border: 1px solid #ccc;height: 100%;border-right: none;border-radius: 4px;">
    <Modal title="分类">
      <BaseForm />
    </Modal>
    <n-tree
        :show-line="true"
        default-expand-all
        :data="treeData"
        cancelable
        :selectedKeys="[defaultData.category_id || '']"
        :node-props="(options)=> {
                return {
                  onClick: () => {
                    defaultData = {
                      category_id: defaultData.category_id === options.option.key ? '' : options.option.key
                    }
                    queryTable()
                  },
                  onContextmenu: (e) => {
                    console.log('------右键')
                    showDropdown = true
                    x = e.clientX
                    y = e.clientY
                    e.preventDefault()
                  }
                }
              }"
    />
    <n-dropdown
        trigger="manual"
        placement="bottom-start"
        :show="showDropdown"
        :options="options as any"
        :x="x"
        :y="y"
        @select="handleSelect"
        @clickoutside="()=> showDropdown = false"
    />
  </div>
</template>
