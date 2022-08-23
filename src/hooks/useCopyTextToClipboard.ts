import { ElMessage } from 'element-plus'

export function useCopyTextToClipboard(copied: string) {
  if (!copied || !copyTextToClipboard(copied)) return ElMessage.warning('请输入内容！')

  copyTextToClipboard(copied) && ElMessage.success('复制成功')
}

function copyTextToClipboard(copied: string) {
  const element = document.createElement('textarea')

  element.setAttribute('readonly', 'readonly') // 防止弹出输入编辑
  element.value = copied //将需要拷贝的内容设置到textarea元素中。

  document.body.appendChild(element)
  element.select() //选中textarea元素，以备调用系统copy函数复制其中的内容。

  const isSuccess = document.execCommand('copy') //调用操作系统复制api，返回是否复制成功。true或false！
  document.body.removeChild(element)

  return isSuccess
}
