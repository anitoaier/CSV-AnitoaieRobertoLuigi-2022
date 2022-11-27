import React from "react";
import { useAlert } from "react-bootstrap-hooks-alert";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/AuthContext";
import { PagesPaths } from "../../pages/types";

const LogoutButton = () => {
    const { logOut } = useUserAuth();
    const navigate  = useNavigate();
    const { success, danger } = useAlert();


    const logOutHandler =  async() => {
        try{
            await logOut();
            navigate(PagesPaths.LANDING);
            success("Logged out successfully", {timeout:3000})
        }catch(err){
            danger('couldnt log out');
            console.log(err)
        }
    }

    return(
        <button className="btn btn-grad" onClick={logOutHandler}>
            Log Out
        </button>
    )
}

export default LogoutButton;