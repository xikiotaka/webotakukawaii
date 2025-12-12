// src/hooks/useReadTomos.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../data/authService";

function makeStorageKey(userId) {
  return `tomos_leidos_${userId}`;
}

// Guarda cada tomo leído como string "mangaId-tomoId"
export function useReadTomos() {
  const queryClient = useQueryClient();
  const user = getCurrentUser();
  const storageKey = user ? makeStorageKey(user.id) : null;

  const tomosQuery = useQuery({
    queryKey: ["tomos-leidos", user?.id],
    enabled: Boolean(user),
    queryFn: () => {
      if (!storageKey) return [];
      const raw = localStorage.getItem(storageKey);
      if (!raw) return [];
      try {
        const arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr : [];
      } catch {
        return [];
      }
    },
  });

  const saveTomos = (list) => {
    if (!storageKey) return [];
    localStorage.setItem(storageKey, JSON.stringify(list));
    return list;
  };

  const markAsRead = useMutation({
    mutationFn: ({ mangaId, tomoId }) => {
      if (!storageKey) return tomosQuery.data || [];
      const current = tomosQuery.data || [];
      const key = `${mangaId}-${tomoId}`;
      if (current.includes(key)) return current;
      const updated = [...current, key];
      return saveTomos(updated);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["tomos-leidos", user?.id], data);
    },
  });

  const isRead = (mangaId, tomoId) => {
    const current = tomosQuery.data || [];
    const key = `${mangaId}-${tomoId}`;
    return current.includes(key);
  };

  const count = (tomosQuery.data || []).length;

  return {
    tomosLeidos: tomosQuery.data || [],
    markAsRead,
    isRead,
    count,
    isLoading: tomosQuery.isLoading,
    isError: tomosQuery.isError,
  };
}
