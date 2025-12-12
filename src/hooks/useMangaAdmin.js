// src/hooks/useMangaAdmin.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { mangaService } from "../data/mangaservice";

const MANGAS_KEY = ["mangas-admin"];

export function useAdminMangas() {
  return useQuery({
    queryKey: MANGAS_KEY,
    queryFn: () => mangaService.getAll(),
  });
}

export function useCreateManga() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mangaData) => mangaService.create(mangaData),
    onSuccess: () => {
      queryClient.invalidateQueries(MANGAS_KEY);
    },
  });
}

export function useUpdateManga() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => mangaService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(MANGAS_KEY);
    },
  });
}

export function useDeleteManga() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => mangaService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(MANGAS_KEY);
    },
  });
}
