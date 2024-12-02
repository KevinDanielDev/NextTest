import axiosInstance from '@/api/axios';
import { IDataMovie } from '@/models';

export async function getMovies() {
  try {
    const response = await axiosInstance.get<IDataMovie[]>('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Error fetching movies');
  }
}
