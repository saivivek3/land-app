import { useCallback, useState } from 'react';

function usePropertyDocumentHook() {
  console.log('called');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

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

  return { files, error, handleDrop, handleFileInput };
}

export default usePropertyDocumentHook;
