import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Typography } from '@mui/material'
import { green } from '@mui/material/colors'

const primary = green[500]

type Page404Props = {
  description?: string | null
}

export const Page404: FC<Page404Props> = ({ description }) => {
  const navigate = useNavigate()

  const handleClick = () => navigate(-1)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}>
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        {description || 'Страница, которую вы ищете, не существует.'}
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Вернуться назад
      </Button>
    </Box>
  )
}
