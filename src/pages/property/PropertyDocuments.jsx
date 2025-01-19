import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider';
import cn from '@/lib/cn';
import { Check } from 'lucide-react';
import { useContext } from 'react';

function PropertyDocuments() {
  const { files } = useContext(PropertyDetailsContext);
  return (
    <div className="space-y-4">
      {files.map(file => (
        <div
          key={file.id}
          className={cn(
            'flex items-center p-3 border-bSecondary border bg-white rounded-lg',
            file.progress < 100 ? `bg-[#fafafa]` : 'bg-white',
          )}
        >
          <div className="w-10 h-10 rounded bg-purple-500 flex items-center justify-center text-white">
            {file.type.toUpperCase()}
          </div>
          <div className="ml-3 flex-grow">
            <div className="text-xs font-medium text-secondary">
              {file.name}
            </div>
            <div className="text-xs  text-tertiary ">
              {file.size} – {file.progress}% uploaded
            </div>
          </div>
          {file.progress === 100 ? (
            <Check className="w-4 h-4 bg-[#079455] text-white rounded-full" />
          ) : (
            <div className="w-7 h-7 border-[3px] border-t-brandTertiary rounded-full animate-spin transition-all duration-500" />
          )}
        </div>
      ))}
    </div>
  );
}

export default PropertyDocuments;
