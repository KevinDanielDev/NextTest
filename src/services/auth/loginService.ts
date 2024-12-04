import axiosInstance from "@/api/axios";

export async function login(email: string, password: string) {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        const token = response.data.token;
        return token;
    } catch (error) {
        console.error('Error login:', error);
        return [];
    }
}