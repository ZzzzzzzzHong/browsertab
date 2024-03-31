import {
  GithubOutlined,
  SettingOutlined,
  SearchOutlined,
  TagsOutlined
} from '@ant-design/icons-vue'

const iconComponents = {
  GithubOutlined,
  SettingOutlined,
  SearchOutlined,
  TagsOutlined
}

export default function (app) {
  Object.keys(iconComponents).forEach(iconName => {
    app.component(
      // 注册的名字
      iconName,
      // 组件的实现
      iconComponents[iconName]
    )
  })
}
