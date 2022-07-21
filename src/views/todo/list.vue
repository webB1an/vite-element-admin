<template>
  <el-row>
    <el-col :span="6">
      <el-card>
        <template #header>
          <el-input v-model="todo" placeholder="Todo List" @keydown.enter="addTodo(todo)" />
        </template>
        <ul class="todo-list">
          <el-scrollbar height="200px">
            <li
              v-for="(item, index) in list"
              :key="item.id"
              class="todo-list-item"
              :class="{ checked: item.completed }"
              @click="doTodo(item.id)"
            >
              <div :class="{ 'radio-checked': item.completed }" class="todo-list-item-radio"></div>
              <span class="todo-list-item-des">{{ item.description }}</span>
              <span class="todo-list-item-close" @click.stop="delTodo(index)">✕</span>
            </li>
          </el-scrollbar>
        </ul>
        <div class="todo-bottom">
          {{ incomplete.length }} 条未完成
          <el-check-tag :checked="active === TodoType.all" @click="seeDifferentTodo(TodoType.all)">
            所有
          </el-check-tag>
          <el-check-tag
            :checked="active === TodoType.completed"
            type="info"
            @click="seeDifferentTodo(TodoType.completed)"
          >
            已完成
          </el-check-tag>
          <el-check-tag
            :checked="active === TodoType.incomplete"
            type="warning"
            @click="seeDifferentTodo(TodoType.incomplete)"
          >
            未完成
          </el-check-tag>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import useTodo, { TodoType } from '@/hooks/useTodo'

const { active, todo, list, incomplete, addTodo, doTodo, delTodo, seeDifferentTodo } = useTodo()
</script>

<style lang="scss">
$todoH: 50px;

.el-card {
  &__header {
    padding: 0;
  }

  &__body {
    padding-top: 0;
    padding-bottom: 0;
  }
}

.el-input {
  height: $todoH;

  &__wrapper {
    border-radius: unset;
    box-shadow: unset;

    &:hover {
      box-shadow: unset;
    }

    &.is-focus {
      box-shadow: unset;
    }
  }
}

.todo-list {
  &-item {
    position: relative;
    display: flex;
    width: 100%;
    height: $todoH;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid #e9e9e9;

    // &:not(:last-child) {

    // }

    &:hover {
      .todo-list-item-close {
        visibility: visible;
      }
    }

    &.checked {
      color: #e9e9e9;

      .todo-list-item-des {
        text-decoration: line-through;
      }
    }

    &-radio {
      display: inline-block;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px solid #e9ebf0;

      &.radio-checked {
        border: 1px solid #6dea6d;

        &::after {
          content: '✓';
          color: #6dea6d;
          font-size: 20px;
        }
      }
    }

    &-close {
      visibility: collapse;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      text-decoration: unset;
      color: #f5a9a9;
    }
  }
}

.todo-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: #c8c9cc;
  font-size: 12px;
}
</style>
