import { Box, Typography } from "@mui/material"

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type HeaderProps = {
  isLiked: boolean;
}
export const Header = ({ isLiked }: HeaderProps) => (
  <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
    <Typography>Storybook sandbox</Typography>
    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
  </Box>
)