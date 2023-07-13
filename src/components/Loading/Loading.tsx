import { Backdrop, CircularProgress } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React from 'react'
import useRootStore from '../../Hooks/useRootStore'

const Loading = () => {
    const { visiable, hide } = useRootStore().visibleStore
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, }}
            open={visiable.loading}
            onClick={() => hide("loading")}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default observer(Loading)
