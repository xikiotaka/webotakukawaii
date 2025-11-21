// src/hooks/useFavorites.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useFavorites() {
  const queryClient = useQueryClient();

  // Traer favoritos desde localStorage
  const favQuery = useQuery({
    queryKey: ["favoritos"],
    queryFn: () => {
      const stored = localStorage.getItem("favoritos");
      return stored ? JSON.parse(stored) : [];
    },
  });

  const setStorage = (list) => {
    localStorage.setItem("favoritos", JSON.stringify(list));
    return list;
  };

  // Agregar favorito
  const addFavorite = useMutation({
    mutationFn: (mangaId) => {
      const current = favQuery.data || [];
      if (!current.includes(mangaId)) {
        const updated = [...current, mangaId];
        return setStorage(updated);
      }
      return current;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["favoritos"], data);
    },
  });

  // Quitar favorito
  const removeFavorite = useMutation({
    mutationFn: (mangaId) => {
      const current = favQuery.data || [];
      const updated = current.filter((id) => id !== mangaId);
      return setStorage(updated);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["favoritos"], data);
    },
  });

  // Toggle (si está, lo quita; si no, lo agrega)
  const toggleFavorite = (mangaId) => {
    const current = favQuery.data || [];
    const yaEsFavorito = current.includes(mangaId);

    if (yaEsFavorito) {
      removeFavorite.mutate(mangaId);
    } else {
      addFavorite.mutate(mangaId);
    }
  };

  const isFavorite = (mangaId) => {
    const current = favQuery.data || [];
    return current.includes(mangaId);
  };

  return {
    favoritos: favQuery.data || [],
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    isLoading:
      favQuery.isLoading ||
      addFavorite.isLoading ||
      removeFavorite.isLoading,
    isError:
      favQuery.isError || addFavorite.isError || removeFavorite.isError,
  };
}
