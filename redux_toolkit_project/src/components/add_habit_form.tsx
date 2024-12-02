import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="습관을 입력해주세요!"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>습관 빈도</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="daily">매일</MenuItem>
            <MenuItem value="weekly">일주일</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          습관추가
        </Button>
      </Box>
    </div>
  );
};

export default AddHabitForm;
