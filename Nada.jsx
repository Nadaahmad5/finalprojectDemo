import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Nada from '../imgs.png/Nada.jpeg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Link from '@mui/material/Link';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';


export default function ImageAvatars() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box style={{backgroundColor:"black"}}>
    <span>
    <Stack direction="row" spacing={2}>
      <Avatar  alt="Remy Sharp" src={Nada} />
      <span style={{color:"white"}}>Nada.Haj.Ahmad</span>
      <Button style={{backgroundColor:"white", color:"black"}} variant="contained">Edit Profile</Button>
      <Button style={{backgroundColor:"white", color:"black"}} variant="contained">View Actions</Button>
      <SettingsIcon style={{color:"white"}}/>
      </Stack>
      <br>
      </br>

<Stack direction="row" spacing={2}>
    <span style={{color:"white"}}>32 Posts</span>
    <span style={{color:"white"}}>142 Followers</span>
    <span style={{color:"white"}}>3792 Following</span>
    </Stack>

    <span style={{color:"white"}}>"The things You own end up owning you."</span>
    {/* <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link
    </Link>
     */}
    <Tabs style={{ color:"#1D1D1D"}}
     
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
     >
     {/* <Tab icon={<PhoneIcon />} label="top" /> */}
       <Tab style={{ color:"white" }} icon={<AppsIcon/>} iconPosition="start" label="POSTS" />
       <Tab style={{ color:"white"}} icon={<BookmarkBorderIcon/>} iconPosition="start" label="REELS" />
       <Tab style={{ color:"white"}} icon={<AssignmentIndIcon />} iconPosition="start" label="TAGGED" />
     </Tabs>

     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            
          />
        </ImageListItem>
      ))}
    </ImageList>
    </span>
    </Box>
      
  );
}
const itemData = [
    
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
   
  ];