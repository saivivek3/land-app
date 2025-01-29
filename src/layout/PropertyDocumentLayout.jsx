import React, { useContext } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import UploadIcon from '@/assets/upload-cloud.svg';
import usePropertyDocumentHook from '@/hooks/usePropertyDocumentHook';
import PropertySidebar from '@/pages/property/PropertySidebar';
import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider';

function PropertyDocumentLayout({ children, nextPath, stepIndex }) {
  const { handleDrop, handleFileInput, files } = usePropertyDocumentHook();
  const navigate = useNavigate();
  const { handleSteps, handleStepsBack } = useContext(PropertyDetailsContext);
  return (
    <div className="w-full  p-6 bg-white flex gap-6  max-w-6xl mx-auto  rounded-lg shadow-sm">
      <PropertySidebar />
      <section className="flex-1">
        <div
          className="flex items-center mb-4 text-gray-600"
          onClick={() => {
            handleStepsBack(stepIndex);
            navigate(-1);
          }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-[18px] font-bold">Back to</span>
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
            className="border  border-[#9E77ED] rounded-xl p-8 mb-6 text-center"
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

          {/* Render children and pass `files` to them */}
          {React.cloneElement(children, { files })}
        </div>

        <Button
          className="bg-primary text-white w-1/3 hover:bg-primary/50"
          onClick={() => {
            handleSteps(stepIndex);
            navigate(nextPath);
          }}
        >
          Continue
        </Button>
      </section>
    </div>
  );
}

export default PropertyDocumentLayout;
