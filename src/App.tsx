import React, { memo, useState} from 'react';
import styles from './App.module.scss'
let App: React.FC<{ title?: string }> = ({title}) => {
  const [titles,setTitles]=useState<string>('张三')
  return <>
    <h1 className={styles.tit}> {titles}</h1>
    <button onClick={()=>setTitles('李四')}>改变标题样式</button>
  </>
}
export default memo(App)