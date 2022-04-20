import data from '../initialData.json'

const initialState = {
    BookList: []
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getBook":
            return { BookList: data }
        default:
            return state
    }
}

export const updateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateState":
            return { BookList: action.payload.data }
        default:
            return state
    }
}