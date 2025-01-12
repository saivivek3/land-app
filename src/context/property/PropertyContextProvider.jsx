import Button from '@/components/ui/Button';
import PropertySidebar from '@/pages/property/PropertySidebar.jsx';
import { ArrowLeft } from 'lucide-react';
import { createContext, useCallback, useState } from 'react';
import UploadIcon from '@/assets/upload-cloud.svg';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const PropertyDetailsContext = createContext(null);

export function PropertyDetailsContextProvider({ children, nextPath }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateFile = file => {
    const allowedTypes = [
      'image/svg+xml',
      'image/png',
      'image/jpeg',
      'image/gif',
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const maxDimension = 800;

    if (!allowedTypes.includes(file.type)) {
      return 'File type not supported. Please upload SVG, PNG, JPG or GIF only.';
    }

    if (file.size > maxSize) {
      return 'File size exceeds 5MB limit.';
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > maxDimension || img.height > maxDimension) {
          reject('Image dimensions exceed 800×400px limit.');
        }
        resolve(null);
      };
      img.onerror = () => reject('Failed to load image.');
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileUpload = async newFiles => {
    setError('');
    const file = newFiles[0];

    try {
      const validationError = await validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      const newFile = {
        id: Date.now(),
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        progress: 0,
        type: file.type.split('/')[1],
      };

      setFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      const interval = setInterval(() => {
        setFiles(prev =>
          prev.map(f => {
            if (f.id === newFile.id && f.progress < 100) {
              return { ...f, progress: f.progress + 10 };
            }
            return f;
          }),
        );
      }, 500);

      setTimeout(() => clearInterval(interval), 5000);
    } catch (err) {
      setError(err.toString());
    }
  };

  const handleDrop = useCallback(e => {
    e.preventDefault();
    handleFileUpload([...e.dataTransfer.files]);
  }, []);

  const handleFileInput = e => {
    handleFileUpload([...e.target.files]);
  };
  console.log(files, 'files');
  return (
    <PropertyDetailsContext.Provider value={{ files, error }}>
      <div className="w-full  p-6 bg-white flex gap-4">
        <PropertySidebar />
        <section className="flex-1">
          <div
            className="flex items-center mb-4 text-gray-600"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to</span>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Property Documents</h1>
          <p className="text-gray-600 mb-6">Documents</p>

          {/*{error && (*/}
          {/*  <Alert variant="destructive" className="mb-4">*/}
          {/*    <AlertDescription>{error}</AlertDescription>*/}
          {/*  </Alert>*/}
          {/*)}*/}
          <div>
            <div
              className="border-2  border-[#9E77ED] rounded-xl p-8 mb-6 text-center"
              onDrop={handleDrop}
              onDragOver={e => e.preventDefault()}
            >
              <input
                type="file"
                className="hidden "
                id="fileInput"
                onChange={handleFileInput}
                accept=".svg,.png,.jpg,.jpeg,.gif"
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center gap-1"
              >
                <img src={UploadIcon} alt="upload icon" />
                <div className=" mb-1 text-[11px]">
                  <span className="hover:underline text-buttontertiary">
                    Click to upload
                  </span>{' '}
                  <span className="text-tertiary">or drag and drop</span>
                </div>
                <div className="text-tertiary text-[11px] ">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </div>
              </label>
            </div>

            {children}
          </div>

          <Button
            className="bg-primary text-white w-1/3 hover:bg-primary/50"
            onClick={() => navigate(nextPath)}
          >
            Continue
          </Button>
        </section>
      </div>
    </PropertyDetailsContext.Provider>
  );
}
