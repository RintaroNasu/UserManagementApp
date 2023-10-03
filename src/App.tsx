import {ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter} from 'react-router-dom';

import theme from './theme/theme';
import { Router } from './components/router/Router';
import { HeaderLayout } from './components/template/HeaderLayout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout><Router /></HeaderLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
