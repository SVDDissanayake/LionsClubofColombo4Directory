import projectsData from '@/data/projects.json';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  image: string;
  impact: string;
  featured: boolean;
}

const localProjects: Project[] = [...(projectsData as Project[])];

export const projectService = {
  async getProjects() {
    return { data: localProjects, error: null as Error | null };
  },
};
