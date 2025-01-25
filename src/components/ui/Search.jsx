import useFormHook from '@/hooks/useFormHook';
import Input from './Input';
import { Search as SearchIcon } from 'lucide-react';
import cn from '@/lib/cn';

function Search({ className }) {
  const { register } = useFormHook();
  return (
    <div className="relative top-[18px] ">
      <SearchIcon className="absolute left-3 top-4 flex items-center text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search"
        className={cn(
          ' w-[250px] rounded-lg  border border-bPrimary p-0 h-10  pl-8 pr-14',
          className,
        )}
        name="search"
        register={register}
      />
      <p className="absolute right-3  top-3 border border-bSecondary rounded-[4px] p-1 text-xs text-quaternary font-medium ">
        ⌘K
      </p>
    </div>
  );
}

export default Search;
