import React from 'react';

import {  fireEvent, render } from '@testing-library/react';
import { Login } from '.';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers'
import { act } from 'react-dom/test-utils';
import { AuthProvider } from '../../hook/login';
import * as batatinha from '../../hook/login'

const store = createStore(rootReducer, applyMiddleware(thunk));
describe('<Login/>', () => {

    const wrapper: React.FC = ({children}) => (
        <Provider store={store}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </Provider>
    )
  
    it('should render', () => {
      const component = render(<Login />, {wrapper});
      expect(component).toBeTruthy();
    });

    it('should render 2', () => {
        const component = render(<Login />, {wrapper});
        const btnContext = component.getByTestId('btn-context')
        const btnRedux = component.getByTestId('btn-redux')

        act(() => {
            fireEvent.click(btnContext)
            fireEvent.click(btnRedux)
        })
        expect(component).toBeTruthy();
      });

      it('should render with spyon', () => {
        const signIn = jest.fn()
        jest.spyOn(batatinha, 'useLogin').mockReturnValueOnce({
            signIn,
            loading: false,
            login: false,
        });
        const component = render(<Login />, {wrapper});
        const btnContext = component.getByTestId('btn-context')
        const btnRedux = component.getByTestId('btn-redux')

        act(() => {
            fireEvent.click(btnContext)
            fireEvent.click(btnRedux)
        })
        expect(signIn).toHaveBeenCalled();

        jest.clearAllMocks()

      });

      it('should render button', () => {
        jest.spyOn(batatinha, 'useLogin').mockRestore()
        const component = render(<Login />, {wrapper});
        const btnContext = component.getByTestId('btn-context')

        expect(btnContext).toHaveStyle({color: '#FFFFFF'});
        expect(btnContext).toHaveStyle({background: '#04C45C'});
        
      });
  

  });