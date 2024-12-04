import axiosInstance from "@/api/axios";

export async function register(email: string, password: string) {
    try {
        const response = await axiosInstance.post('/auth/register', { email, password });
        const token = response.data.token;
        return token;
    } catch (error) {
        console.error('Error login:', error);
        return [];
    }
}