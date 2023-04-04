import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const defaultDemoRouteData = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        label: 'Option 1',
        key: 'setting:1',
      },
      {
        label: 'Option 2',
        key: 'setting:2',
      },
    ]
  }
]

function useGetRouteData (routes: MenuProps['items']): MenuProps['items'] {
  return defaultDemoRouteData
}

export default useGetRouteData

