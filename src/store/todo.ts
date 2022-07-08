import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

import { CookiesGet, CookiesSet } from '@/utils/cookie'

export interface ITodo {
  id: string,
  completed: boolean,
  description: string
}

export default defineStore('todo', {
  state: () => ({
    todoList: JSON.parse(CookiesGet('todoList')) as ITodo[]
  }),
  getters: {
    completed: (state) => state.todoList.filter(todo => todo.completed),
    incomplete: (state) => state.todoList.filter(todo => !todo.completed)
  },
  actions: {
    addTodo(description: string) {
      if (!description) return
      if (this.todoList.some(todo => todo.description === description)) return
      const newTodo: ITodo = {
        id: nanoid(),
        completed: false,
        description
      }
      this.todoList = [newTodo, ...this.todoList]
      CookiesSet('todoList', JSON.stringify(this.todoList))
    },
    doTodo(id: string) {
      this.todoList = this.todoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      CookiesSet('todoList', JSON.stringify(this.todoList))
    },
    delTodo(index: number) {
      this.todoList.splice(index, 1)
      CookiesSet('todoList', JSON.stringify(this.todoList))
    }
  }
})
