import authReducer from "../../reducers/auth";

test("should set uid on LOGIN", () => {
    const uid = "1123"
    const action = {
        type: "LOGIN",
        uid
    }

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid)
});

test("should clear uid on LOGOUT", () => {
    const action = {
        type: "LOGOUT",
    }

    const state = authReducer({uid: "anything"}, action);
    expect(state).toEqual({});
});