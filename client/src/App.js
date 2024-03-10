import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    const upload = async () => {
      if (file) {
        setIsLoading(true); 
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
    upload();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>File Flow!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={onUploadClick}>Upload</button>
        <input 
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {isLoading && (
          <div className="loading-wrapper">
            <div className="loading-circle"></div>
          </div>
        )}

        {result && <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>}
      </div>
    </div>
  );
}

export default App;
