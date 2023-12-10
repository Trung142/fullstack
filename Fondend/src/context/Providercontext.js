const { createContext, useState } = require("react");

const UserContext = createContext({ name: '', auth: false });

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', uath: true });
    // Login updates the user data with a name parameter
    const login = (name, data) => {
        setUser((user) => ({
            name: name,
            uath: true
        }))
        localStorage.getItem('data', data)
        localStorage.getItem('name', name)
    }
    // logout updates the user data to default
    const logout = () => {
        localStorage.removeItem('data');
        localStorage.removeItem('name');
        setUser((user) => ({
            name: '',
            uath: false
        }))
    }
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }