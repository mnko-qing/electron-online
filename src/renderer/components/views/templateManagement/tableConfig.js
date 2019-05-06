export const templateTableConfig = [
  {
    title: '模板名称',
    key: 'name',
  },
  {
    title: '模板类型',
    key: 'type',
    filters: [],
    filterMultiple: false,
    filterMethod (value, row) {

    }
  },
  {
    title: '模板分类',
    key: 'classify',
    filters: [],
    filterMultiple: false,
    filterMethod (value, row) {

    }
  },
  {
    title: '编码规则',
    key: 'rule_name',
  },
  {
    title: '创建时间',
    key: 'create_time',
    sortable: true
  }
]