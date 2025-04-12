import React, {useState, useContext} from "react";
import axiosInstance from "./index.js";

// Initialize OAuth2.0 flow for Gmail by making a request to the backend server
export const initiateOAuth2Flow = async (userId) => {
    try {
        const response = await axiosInstance.get(`/auth/gmail/${userId}`);
        console.log(response);
        return response.data;
    } catch (err) {
        if (err.response) {
            return err.response.data;
        }
        return {
            success: false,
            message: 'An error occurred'
        }
    }
}

