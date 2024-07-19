import { TextField } from "@mui/material";
import { useDebouncedCallback } from "use-debounce";

type ApplicationFilterProps = {
  onSearchFilterChanged: (filter: { searchKeyword: string }) => void;
};

export const ApplicationFilter = (props: ApplicationFilterProps) => {
  const debouncedCallback = useDebouncedCallback((value) => {
    props.onSearchFilterChanged({ searchKeyword: value });
  }, 500);
  return (
    <TextField
      label="Search"
      variant="outlined"
      onChange={(e) => debouncedCallback(e.target.value)}
    />
  );
};
