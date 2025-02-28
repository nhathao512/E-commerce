import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { SideBarProvider } from '@/contexts/SideBarProvider';

function App() {
  return (
    <SideBarProvider>
      <SideBar />

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {/* hiệu ứng loading */}
          <Routes>
            {
              routers.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={<item.component />} />
                );
              })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
