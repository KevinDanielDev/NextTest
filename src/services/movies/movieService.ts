import axiosInstance from '@/api/axios';
import { IDataMovie } from '@/models';

export async function getMovies() {
  try {
    const response = await axiosInstance.get<IDataMovie[]>('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

export async function getMovieById(id: number, token: string | null) {
  try {
    const response = await axiosInstance.get<IDataMovie>(`/movies/${id}`, {
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