import React from "react";

import Error from "@mui/icons-material/Error";

import { ScRoot } from "./styles";

const SubmitErrorBox = ({ children }) => {
    return (
        <ScRoot>
            <Error sx={{ fontSize: "20px", marginRight: "10px" }} />
            {children}
        </ScRoot>
    );
};

export default SubmitErrorBox;
