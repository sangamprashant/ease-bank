import { useState, type FC } from "react";
import { IoMailOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthenticationContext";
import { apiRequest } from "../../utilities";
import { errorMessage } from "../../utilities/apis/apiRequest";
import { toast } from "react-toastify";

export const LoginForm = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();

            if (!trimmedEmail || !trimmedPassword) {
                throw new Error("Please fill all the fields")
            }
            if (trimmedPassword.length < 6) {
                throw new Error("Password must be at least 6 characters");
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
                throw new Error("Please enter a valid email address");
            }

            setLoading(true);

            navigate("/");

            const res = await apiRequest("/auth/login", {
                method: "POST",
                body: {
                    email: trimmedEmail, password: trimmedPassword
                }
            })

            login(res.data.user, res.data.token)

        } catch (error) {
            toast.error(errorMessage(error))
        } finally {
            setLoading(false)
        }

    };

    return (
        <form onSubmit={handleLogin}>
            <InputField label="Email Address" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} Icon={IoMailOutline} />

            <InputField label="Password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} Icon={showPassword ? MdOutlineRemoveRedEye : LuEyeClosed} onClick={() => setShowPassword(pre => !pre)} />

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ?
                    <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </span> :
                    "Sign In"
                }
            </button>
        </form>
    )
}


interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Icon?: React.ElementType;
    onClick?: () => void
}

const InputField: FC<InputFieldProps> = ({ label, type, placeholder, value, onChange, Icon, onClick }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder={placeholder}
                    autoComplete="false"
                    value={value}
                    onChange={onChange}
                />
                {Icon && <Icon className={`absolute right-2 top-4 w-6 h-6 text-gray-400 ${type !== "email" && "cursor-pointer"} `} onClick={onClick} />}
            </div>
        </div>
    );
};