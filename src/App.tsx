import AntdProvider from './lib/antd';
import AosProvider from './lib/aos';
import LanguageProvider from './lib/language';
import ReduxProvider from './lib/redux';
import RouterProvider from './lib/router';

function App() {
  return (
    <LanguageProvider>
      <ReduxProvider>
        <AntdProvider>
          <AosProvider>
            <RouterProvider />
          </AosProvider>
        </AntdProvider>
      </ReduxProvider>
    </LanguageProvider>
  );
}

export default App;
