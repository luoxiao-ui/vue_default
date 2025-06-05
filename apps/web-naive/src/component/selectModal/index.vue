<script setup lang="ts">
import {NButton, NInput} from "naive-ui";
import {AddIcon} from "@vben/icons";
import {useVbenModal} from "@vben/common-ui";
import {selectOptions} from "#/component/selectModal/constant";
import {useVbenVxeGrid} from "#/adapter/vxe-table";
import {storageApi} from "#/views/baseInfo/storage/api";
import TreeModal from "#/component/tree/index.vue";
import {ref} from "vue";


defineOptions({
  name: "SelectModal",
})

export interface selectModalProps {
  type?: 'Input' | 'Button'
  multiple: boolean
  selectType: 'drug'
  selected: any[]
  keyField: string
}
const defaultData = ref({})
const {type = 'Button', selectType, multiple, selected, keyField = 'id'} = defineProps<selectModalProps>()
const {title, gridOptions, formOptions} = selectOptions[selectType]
const emit = defineEmits(['confirm'])
const [Modal, modalApi] = useVbenModal({
  centered: true,
  title,
  class: 'selectModal',
  onConfirm: ()=> {
    emit('confirm', gridApi.grid.getCheckboxRecords())
    modalApi.close()
  },
  onOpened: ()=> {
    if(selected) {
      gridApi.grid.setCheckboxRowKey(selected.map((v: any)=> v[keyField]), true)
    }
  }
})
const columns = gridOptions.columns!
if(!columns.some(v=> v.title === '序号')) {
  columns.unshift({
    type: multiple ? 'checkbox' : 'radio',
    title: '序号',
    width: '100'
  })
}
const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions: {
    ...gridOptions,
    columns,
    rowConfig: {
      keyField
    },
  },
  formOptions,
  separator: false
})
const queryTable = async () => {}
</script>

<template>
  <div>
    <Modal>
      <Grid>
        <template #left>
          <TreeModal
              :default-data="defaultData"
              :query-table="queryTable"
              :api="{
              getTree: storageApi.queryTree,
              addTree: storageApi.addTree,
              deleteTree: storageApi.deleteTree,
              updateTree: storageApi.updateTree,
            }"
          />
        </template>
      </Grid>
    </Modal>
    <n-button v-if="type === 'Button'" @click="()=> modalApi.open()" type="info" class="buttonWidth">
      <template #icon>
        <AddIcon/>
      </template>
      新增
    </n-button>
    <n-input readonly :value="selected?.map(v=> v.name).join(',')" @click="()=> modalApi.open()" v-else/>
  </div>
</template>
