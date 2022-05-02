import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DescriptionIcon from "@mui/icons-material/Description";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const menuList = [
  {
    text: "Pacientes",
    icon: <EmojiEmotionsIcon></EmojiEmotionsIcon>,
    path: "/",
  },
  {
    text: "Historias clinicas",
    icon: <DescriptionIcon></DescriptionIcon>,
    path: "/",
  },
];

const Sidebar = () => {
  return (
    <Drawer>
      <List>
        {menuList.map((item) => {
          return (
            <ListItem key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
