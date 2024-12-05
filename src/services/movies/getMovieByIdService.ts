import axiosInstance from '@/api/axios';
import { IDataMovie } from '@/models';

export async function getMovieById(id: number) {
    const token = localStorage.getItem('token');
  try {
    const response = await axiosInstance.get<IDataMovie[]>(`/movies/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return [];
  }
}
