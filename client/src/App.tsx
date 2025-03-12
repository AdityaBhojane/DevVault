import React from 'react';
import { ConfigProvider, Switch, theme } from 'antd';
import { useTheme } from './zustand/Theme Store/useTheme';
import { Moon,  Sun } from 'lucide-react';
import AppRoutes from './Routes/AppRoutes';

const App: React.FC = () => {
  const currentTheme = useTheme((state) => state.currentTheme);
  const setCurrentTheme = useTheme((state) => state.setCurrentTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        
      }}
    >
      <div className={`w-full h-screen ${currentTheme ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className='absolute right-5 top-5 flex items-center gap-2'>
          {currentTheme? <Moon className='text-white'/>:<Sun/>}
          <Switch defaultChecked onChange={setCurrentTheme}/>
        </div>
        <AppRoutes/>
      </div>
    </ConfigProvider>
  );
}

export default App;