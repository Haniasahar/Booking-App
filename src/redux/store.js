import { createStore } from "redux";

const reducer = (state = "", action) => {

    switch (action.type) {

        case "BOOKED":
            return "Room Booked !";

        case "A-BOOKED":
            return "Room Already Booked!";

        default:
            return state;

    }

}

export const store = createStore(reducer);