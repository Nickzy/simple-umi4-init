import React, { useState } from "react";
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import useGetRouteData from "./useGetRouteData";

function MenuNav<React, FC> (): JSX.Element {

  const [current, setCurrent] = useState('')
  const items = useGetRouteData([])

  function onClick (e: MenuInfo) {
    console.log(e)
    setCurrent(e.key);
  }

  return <div>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  </div>
}

export default MenuNav;
