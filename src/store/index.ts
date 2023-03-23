import { configureStore } from '@reduxjs/toolkit'
import dataList from './dataList'
export default configureStore( {
    reducer: {
        dataList
    }
})