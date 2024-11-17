export default function AppReducer(state, action) {
    switch(action.type) {
        case 'edit': {
            // Handle edit action
            const updatedState = state.map(car =>
                car.id === action.payload.id
                    ? { ...car, ...action.payload.newData } 
                    : car
            );
            return updatedState;
        }
        case 'rate': {
            
            const updatedState = state.map(car =>
                car.id === action.payload.id
                    ? { ...car, rating: action.payload.newRating }
                    : car
            );
            return updatedState;
        }
        case 'delete': {
          
            const updatedState = state.filter(car => car.id !== action.payload.id);
            return updatedState;
        }
        default:
            return state;
    }
}
