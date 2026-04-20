import { Box } from "@mui/material";
import Header from "./Header";
import TabMenu from "./TabMenu";

export default function Terminal() {

  return (
    <Box
      className="terminal"
    >
      <Header/>
      <TabMenu/>
    </Box>
  )
}
