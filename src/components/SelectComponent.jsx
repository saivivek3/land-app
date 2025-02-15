import cn from '@/lib/cn';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useDispatch } from 'react-redux';
import { setDistrictId } from '@/features/property/propertySlice';
function SelectComponent({
  placeholder,
  className,
  options,
  inputvalue,
  setValue,
  name,
}) {
  const dispatch = useDispatch();
  return (
    <Select
      onValueChange={value => {
        setValue(prevValue => ({
          ...prevValue,
          [name]: {
            [`${name}ID`]: value.id,
            label: value.label,
            value: value.value,
          },
        }));
        dispatch(setDistrictId(value.id));
      }}
    >
      <SelectTrigger className={cn('w-full', className)}>
        <SelectValue placeholder={placeholder}>
          {inputvalue?.[name]?.label || placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {options?.map(option => (
            <SelectItem key={option.id} value={option}>
              {option.label}
            </SelectItem>
          ))}
        </div>
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
