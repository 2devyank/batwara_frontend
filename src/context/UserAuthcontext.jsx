import { createContext, useContext } from "react";

const UserAuth=createContext();

const name="dev"

const UserAuthProvider=({children})=>{
    return(
        <UserAuth.Provider value={{name}}>
            {children}
        </UserAuth.Provider>
    )

}
export default UserAuthProvider;

export function useUserAuth(){
    return useContext(UserAuth);
}

