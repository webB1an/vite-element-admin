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
    todoList: JSON.parse(CookiesGet('todoList') || '[]') as ITodo[],
    all: Number(CookiesGet('todo-all')), // 总计
    over: Number(CookiesGet('todo-over')), // 完成
    del: Number(CookiesGet('todo-del')) // 删除
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
      this.all += 1
      CookiesSet('todo-all', String(this.all))
      CookiesSet('todoList', JSON.stringify(this.todoList))
    },
    doTodo(id: string) {
      this.todoList = this.todoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      this.over += 1
      CookiesSet('todo-over', String(this.over))
      CookiesSet('todoList', JSON.stringify(this.todoList))
    },
    delTodo(index: number) {
      this.todoList.splice(index, 1)
      this.todoList = [...this.todoList]
      this.del += 1
      CookiesSet('todo-del', String(this.del))
      CookiesSet('todoList', JSON.stringify(this.todoList))
    }
  }
})
