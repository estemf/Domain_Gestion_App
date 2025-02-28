import React, { useState } from "react";

const ShowPassword = ({ password, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                className="shadow appearance-none border border-white rounded-lg w-full py-2 px-3 bg-transparent text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-[-1px] right-0 flex items-center justify-center px-3 py-2 text-sm text-white"
            >
                {showPassword ? (
                    <img src="../../public/picture/eye-closed.png" alt="Hide" className="h-6 w-auto" />
                ) : (
                    <img src="../../public/picture/eye-open.png" alt="Show" className="h-6 w-auto" />
                )}
            </button>
        </div>
    );
};

export default ShowPassword;