import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Option } from "../../types/option";
import { SortOrder } from "../../types/sortOrder";

type Props = {
  label: string;
  value: SortOrder;
  onChange: (value: SortOrder) => void;
  options: Option[];
};

const SortDropdown = ({ label, value, onChange, options }: Props) => {
  return (
    <FormControl sx={{ minWidth: 200 }} variant="outlined">
      <InputLabel id={`${label}-sort-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-sort-label`}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
