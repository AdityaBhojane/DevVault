import React from 'react';
import { ConfigProvider,  theme } from 'antd';
import { useTheme } from './zustand/Theme Store/useTheme';
import AppRoutes from './Routes/AppRoutes';

const App: React.FC = () => {
  const currentTheme = useTheme((state) => state.currentTheme);


  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        
      }}
    >
      <div className={`w-full h-screen ${currentTheme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        
        <AppRoutes/>
      </div>
    </ConfigProvider>
  );
}

export default App;