import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

const initialState = {
    loading: false,
    login: false
}

export const POST_LOGIN = 'POST_LOGIN'
export const LOADING = 'LOADING'

export const signIn = (_: { cpf: string, senha: string }): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: LOADING })
    setTimeout(() => {
        dispatch({ type: POST_LOGIN });
    }, 500);

}

export function login(state = initialState, action: {
    type: string,
    payload: any
}) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case POST_LOGIN:
            return {
                ...state,
                login: true,
                loading: false
            }
        default:
            return state
    }
}