<template>
  <el-row class="todo-overview" :gutter="20">
    <el-col :span="6">
      <div class="todo-overview-wapper">
        <div class="todo-overview-icon todo-icon-overview">
          <svg-icon svg-class="el-icon" name="svg-todo-overview" />
        </div>
        <div class="todo-overview-description">
          <div class="todo-overview-text">总计</div>
          <div class="todo-overview-num">{{ all }}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="todo-overview-wapper">
        <div class="todo-overview-icon todo-icon-wait">
          <svg-icon svg-class="el-icon" name="svg-todo-wait" />
        </div>
        <div class="todo-overview-description">
          <div class="todo-overview-text">待做</div>
          <div class="todo-overview-num">{{ incomplete.length }}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="todo-overview-wapper">
        <div class="todo-overview-icon todo-icon-over">
          <svg-icon svg-class="el-icon" name="svg-todo-over" />
        </div>
        <div class="todo-overview-description">
          <div class="todo-overview-text">完成</div>
          <div class="todo-overview-num">{{ over }}</div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="todo-overview-wapper">
        <div class="todo-overview-icon todo-icon-del">
          <svg-icon svg-class="el-icon" name="svg-todo-del" />
        </div>
        <div class="todo-overview-description">
          <div class="todo-overview-text">删除</div>
          <div class="todo-overview-num">{{ del }}</div>
        </div>
      </div>
    </el-col>
  </el-row>

  <el-row class="mt20" :gutter="20">
    <todo />
    <el-col :span="12">
      <el-card>
        <el-table :data="tableData">
          <el-table-column prop="orderNo" label="ID" width="400px" />
          <el-table-column prop="num" label="数量" />
          <el-table-column label="状态">
            <template #default="scope">
              <el-tag
                :type="scope.row.status === 'success' ? scope.row.status : 'warning'"
              >
                {{ scope.row.status }}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { nanoid } from 'nanoid'

import todoStore from '@/store/todo'
import Todo from '@/components/Todo/index.vue'

interface IOrder {
  orderNo: string,
  num: number,
  status: 'success' | 'pending'
}

const todoInstance = todoStore()
const { all, incomplete, over, del } = storeToRefs(todoInstance)

const random = (max: number, min: number) : number => Math.floor(Math.random() * (max - min + 1) + min)

const orders: IOrder[] = []

for (let i = 0; i < 10; i++) {
  const num = random(1000, 1)
  orders.push({
    orderNo: nanoid(),
    num,
    status: num > 500 ? 'success' : 'pending'
  })
}

const tableData = ref<IOrder[]>(orders)
// import overview from '@/assets/logo.png'
// console.log(import.meta.globEager('../../icons/svg/**/*.svg'))
// const svg = import.meta.globEager('../../icons/svg/**/*.svg')
// Object.keys(svg).map(item => console.log(item))
</script>

<style lang="scss">
.todo-overview {
  &-wapper {
    display: flex;
    justify-content: space-between;
    // float: left;
    // width: 23%;
    height: 100px;
    padding: 14px;
    cursor: pointer;
    background-color: #fff;

    &:hover {
      .todo-overview-icon {
        border-radius: 4px;
      }

      .todo-icon-overview {
        background-color: #3ec1c1;
      }

      .todo-icon-wait {
        background-color: #7d79bc;
      }

      .todo-icon-over {
        background-color: #e88080;
      }

      .todo-icon-del {
        background-color: #9a1a93;
      }

      svg {
        color: #fff;
      }
    }
  }

  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;

    svg {
      font-size: 40px;
    }
  }

  &-description {
    margin: 10px 10px 10px 0;
  }

  &-text {
    color: #bebebe;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &-description {
    font-size: 18px;
    font-weight: bold;
  }
}

.todo-icon-overview {
  color: #3ec1c1;
}

.todo-icon-wait {
  color: #7d79bc;
}

.todo-icon-over {
  color: #e88080;
}

.todo-icon-del {
  color: #9a1a93;
}
</style>
