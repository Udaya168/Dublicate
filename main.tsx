import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import { QuickEditLayout } from './Frontend/layout';
import { QuickEditUploadScreen } from './Frontend/upload-screen';
import { QuickEditStyleScreen } from './Frontend/style-screen';
import { QuickEditProcessingScreen } from './Frontend/Processingscreen';
import { QuickEditResultScreen } from './Frontend/resultscreen';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/quick-edit/upload" replace />} />
          <Route element={<QuickEditLayout />}>
            <Route path="/quick-edit/upload" element={<QuickEditUploadScreen />} />
            <Route path="/quick-edit/style" element={<QuickEditStyleScreen />} />
            <Route path="/quick-edit/processing" element={<QuickEditProcessingScreen />} />
            <Route path="/quick-edit/result" element={<QuickEditResultScreen />} />
          </Route>
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/quick-edit/upload" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
