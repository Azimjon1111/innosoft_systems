import { API_URL } from "./constants";

export interface Localized {
  uz: string;
  ru: string;
  en: string;
}

export interface Project {
  id: string;
  slug: string;
  title: Localized;
  description: Localized;
  duration?: Localized;
  image: string;
  gallery?: string[];
  technologies: string[];
  url?: string;
  category?: { title: Localized; slug: string };
  order?: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  order?: number;
}

export interface BlogPost {
  _id: string;
  slug?: string | Partial<Localized>;
  title: Localized;
  excerpt: Localized;
  image?: string;
  createdAt?: string;
  readingTime?: number;
}

/** Nisbiy /uploads/... yo'lini absolyut URL'ga aylantiradi */
export function mediaUrl(path?: string): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${API_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

async function apiFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return (json?.data ?? fallback) as T;
  } catch {
    // API tushib qolsa sahifa buzilmaydi — seksiya bo'sh holatga o'tadi
    return fallback;
  }
}

export async function getProjects(): Promise<Project[]> {
  const data = await apiFetch<Project[]>("/api/projects", []);
  return Array.isArray(data) ? data : [];
}

export async function getPartners(): Promise<Partner[]> {
  const data = await apiFetch<{ items: Partner[] } | Partner[]>("/api/partners", { items: [] });
  const items = Array.isArray(data) ? data : (data?.items ?? []);
  return [...items].sort((a, b) => (b.order ?? 0) - (a.order ?? 0));
}

export async function getBlogs(limit = 3): Promise<BlogPost[]> {
  const data = await apiFetch<BlogPost[]>(`/api/blogs?limit=${limit}`, []);
  return Array.isArray(data) ? data.slice(0, limit) : [];
}
