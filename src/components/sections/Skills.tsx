import { Box } from "@mui/material";
import Command from "../Command";

export default function Skills() {
  return (
    <Box className="sections">

      {/* Texto */}
      <Command command="$ cat skills.json | jq" />

    </Box>
  );
}