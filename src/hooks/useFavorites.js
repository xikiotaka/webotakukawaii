// src/hooks/useFavorites.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../data/authService";

function getStorageKey() {
  const user = getCurrentUser();
  return user ? `favoritos_${user.id}` : "favoritos_guest";
}

export function useFavorites() {
  const queryClient = useQueryClient();
  const storageKey = getStorageKey();

  const favQuery = useQuery({
    queryKey: ["favoritos", storageKey],
    queryFn: () => {
      try {
        const legacy = localStorage.getItem("favoritos");
        if (legacy && storageKey !== "favoritos_guest") {
          const legacyList = JSON.parse(legacy);
          const currentRaw = localStorage.getItem(storageKey);
          const currentList = currentRaw ? JSON.parse(currentRaw) : [];
          const merged = Array.from(new Set([...currentList, ...legacyList]));
          localStorage.setItem(storageKey, JSON.stringify(merged));
          localStorage.removeItem("favoritos");
          return merged;
        }

        const raw = localStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.error("Error leyendo favoritos", e);
        return [];
      }
    },
  });

  const setStorage = (list) => {
    localStorage.setItem(storageKey, JSON.stringify(list));
    return list;
  };

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
      queryClient.setQueryData(["favoritos", storageKey], data);
    },
  });

  const removeFavorite = useMutation({
    mutationFn: (mangaId) => {
      const current = favQuery.data || [];
      const updated = current.filter((id) => id !== mangaId);
      return setStorage(updated);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["favoritos", storageKey], data);
    },
  });

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
