import Stack from '@mui/material/Stack'
import { flexbox, palette, shadows } from '@mui/system'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'

import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

// Icons
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ChatIcon from '@mui/icons-material/Chat'

const MainSidebar = (props) => {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    bgcolor: 'primary.main',
    alignItems: 'center',
    marginTop: '1em',
    boxShadow: '3'
  }

  return (
    <Box sx={sidebarStyle}>
      <div>
        <List>
          <ListItem>
            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
            <ListItemText><Link href='/profile' underline='none' sx={{ color: 'black' }}>Profile</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <ListItemText><Link href='/topics' underline='none' sx={{ color: 'black' }}>topics</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <ListItemText><Link href='/topics' underline='none' sx={{ color: 'black' }}>topics</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <ListItemText><Link href='/topics' underline='none' sx={{ color: 'black' }}>topics</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <ListItemText><Link href='/topics' underline='none' sx={{ color: 'black' }}>topics</Link></ListItemText>
          </ListItem>
        </List>
      </div>
    </Box>
  )
}

export default MainSidebar
