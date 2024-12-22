import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  SelectChangeEvent 
} from '@mui/material';

interface User {
  id: number;
  name: string;
}

interface UserSelectProps {
  users: User[];
  value: number | '';
  onChange: (userId: number | '') => void;
}

export function UserSelect({ users, value, onChange }: UserSelectProps) {
  const handleChange = (event: SelectChangeEvent<number | ''>) => {
    onChange(event.target.value as number | '');
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="user-select-label">User</InputLabel>
      <Select
        labelId="user-select-label"
        id="user-select"
        value={value}
        label="User"
        onChange={handleChange}
      >
        {users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}