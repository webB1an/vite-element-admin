import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

import todoStore, { ITodo } from '@/store/todo'

export enum TodoType {
  all,
  completed,
  incomplete
}

export default function () {
  const todo = ref<string>('')
  const list = ref<ITodo[]>([])
  const active = ref(TodoType.all)

  const store = todoStore()
  const { todoList, completed, incomplete } = storeToRefs(store)

  const addTodo = (description: string): void => {
    store.addTodo(description)
    todo.value = ''
  }

  const doTodo = (id: string): void => store.doTodo(id)

  const delTodo = (index: number): void => store.delTodo(index)

  const seeDifferentTodo = (type: TodoType): void => {
    switch (type) {
      case TodoType.all:
        list.value = todoList.value
        active.value = TodoType.all
        break
      case TodoType.completed:
        list.value = completed.value
        active.value = TodoType.completed
        break
      case TodoType.incomplete:
        list.value = incomplete.value
        active.value = TodoType.incomplete
        break
    }
  }

  onMounted(() => {
    seeDifferentTodo(TodoType.all)
  })

  watch(todoList, () => {
    seeDifferentTodo(active.value)
  })

  return {
    active,
    list,
    todo,
    todoList,
    incomplete,
    completed,
    addTodo,
    doTodo,
    delTodo,
    seeDifferentTodo
  }
}
