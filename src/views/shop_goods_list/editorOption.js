export default // 富文本编辑器配置
{
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
      ['blockquote', 'code-block'], // 引用  代码块
      [{ header: 1 }, { header: 2 }], // 1、2 级标题
      [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
      [{ script: 'sub' }, { script: 'super' }], // 上标/下标
      [{ indent: '-1' }, { indent: '+1' }], // 缩进
      [{ direction: 'rtl' }], // 文本方向
      [{ size: ['12', '14', '16', '18', '20', '22', '24', '28', '32', '36'] }], // 字体大小
      [{ header: [1, 2, 3, 4, 5, 6] }], // 标题
      [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
      // [{ font: ['songti'] }], // 字体种类
      [{ align: [] }], // 对齐方式
      ['clean'], // 清除文本格式
      ['image', 'video'] // 链接、图片、视频
    ]
  },
  placeholder: '请输入正文'
}
