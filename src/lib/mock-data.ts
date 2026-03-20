export type DashboardItemTypeId =
  | "snippet"
  | "prompt"
  | "command"
  | "note"
  | "file"
  | "image"
  | "link";

export type DashboardItemType = {
  id: DashboardItemTypeId;
  name: string;
  label: string;
  count: number;
};

export type DashboardCollection = {
  id: string;
  name: string;
  description: string;
  itemTypeIds: DashboardItemTypeId[];
  itemCount: number;
  isFavorite: boolean;
};

export type DashboardItem = {
  id: string;
  title: string;
  description: string;
  content: string;
  itemTypeId: DashboardItemTypeId;
  collectionId: string;
  fileExtension: string;
  tags: string[];
  isPinned: boolean;
  lastViewedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type DashboardUser = {
  id: string;
  name: string;
  email: string;
  avatarLabel: string;
};

export const mockDashboardData: {
  user: DashboardUser;
  itemTypes: DashboardItemType[];
  collections: DashboardCollection[];
  items: DashboardItem[];
} = {
  user: {
    id: "user-john-doe",
    name: "John Doe",
    email: "john@example.com",
    avatarLabel: "JD",
  },
  itemTypes: [
    { id: "snippet", name: "Snippets", label: "Code snippets", count: 24 },
    { id: "prompt", name: "Prompts", label: "AI prompts", count: 18 },
    { id: "command", name: "Commands", label: "CLI commands", count: 15 },
    { id: "note", name: "Notes", label: "Markdown notes", count: 12 },
    { id: "file", name: "Files", label: "Reference files", count: 5 },
    { id: "image", name: "Images", label: "Saved images", count: 3 },
    { id: "link", name: "Links", label: "Useful links", count: 8 },
  ],
  collections: [
    {
      id: "collection-react-patterns",
      name: "React Patterns",
      description: "Common React patterns and hooks",
      itemTypeIds: ["snippet", "note", "link"],
      itemCount: 12,
      isFavorite: true,
    },
    {
      id: "collection-python-snippets",
      name: "Python Snippets",
      description: "Useful Python code snippets",
      itemTypeIds: ["snippet", "file"],
      itemCount: 8,
      isFavorite: false,
    },
    {
      id: "collection-context-files",
      name: "Context Files",
      description: "AI context files for projects",
      itemTypeIds: ["file", "note"],
      itemCount: 5,
      isFavorite: true,
    },
    {
      id: "collection-interview-prep",
      name: "Interview Prep",
      description: "Technical interview preparation",
      itemTypeIds: ["file", "snippet", "link", "prompt"],
      itemCount: 24,
      isFavorite: false,
    },
    {
      id: "collection-git-commands",
      name: "Git Commands",
      description: "Frequently used git commands",
      itemTypeIds: ["command", "file"],
      itemCount: 15,
      isFavorite: true,
    },
    {
      id: "collection-ai-prompts",
      name: "AI Prompts",
      description: "Curated AI prompts for coding",
      itemTypeIds: ["prompt", "link", "file"],
      itemCount: 18,
      isFavorite: false,
    },
  ],
  items: [
    {
      id: "item-use-auth-hook",
      title: "useAuth Hook",
      description: "Custom authentication hook for React applications",
      content:
        "A reusable hook that exposes the current user, loading state, and auth actions for protected UI flows.",
      itemTypeId: "snippet",
      collectionId: "collection-react-patterns",
      fileExtension: ".ts",
      tags: ["react", "auth", "hooks"],
      isPinned: true,
      lastViewedAt: "2026-01-15T09:00:00.000Z",
      createdAt: "2025-12-08T10:30:00.000Z",
      updatedAt: "2026-01-15T09:00:00.000Z",
    },
    {
      id: "item-api-error-handling",
      title: "API Error Handling Pattern",
      description: "Wrapper with exponential backoff retry logic",
      content:
        "Centralize fetch failures, status checks, and retry decisions so dashboard actions can show consistent feedback.",
      itemTypeId: "snippet",
      collectionId: "collection-react-patterns",
      fileExtension: ".ts",
      tags: ["api", "error-handling", "typescript"],
      isPinned: true,
      lastViewedAt: "2026-01-12T14:20:00.000Z",
      createdAt: "2025-11-22T08:10:00.000Z",
      updatedAt: "2026-01-12T14:20:00.000Z",
    },
    {
      id: "item-react-memo-note",
      title: "React.memo",
      description: "Quick note on avoiding unnecessary re-renders",
      content:
        "Use React.memo when props are stable and re-renders are more expensive than the comparison cost.",
      itemTypeId: "note",
      collectionId: "collection-react-patterns",
      fileExtension: ".md",
      tags: ["react", "performance"],
      isPinned: false,
      lastViewedAt: "2026-01-10T11:45:00.000Z",
      createdAt: "2025-10-11T13:15:00.000Z",
      updatedAt: "2026-01-10T11:45:00.000Z",
    },
    {
      id: "item-python-json-script",
      title: "JSON Cleanup Script",
      description: "Tiny script for normalizing nested JSON data",
      content:
        "Read malformed payloads, coerce empty values, and rewrite the data into a dashboard-friendly shape.",
      itemTypeId: "snippet",
      collectionId: "collection-python-snippets",
      fileExtension: ".py",
      tags: ["python", "json"],
      isPinned: false,
      lastViewedAt: "2026-01-07T16:05:00.000Z",
      createdAt: "2025-09-30T15:00:00.000Z",
      updatedAt: "2026-01-07T16:05:00.000Z",
    },
    {
      id: "item-project-context-template",
      title: "Project Context Template",
      description: "Starter file for AI and onboarding context",
      content:
        "Capture the product goal, key flows, data model, and implementation notes in one reusable template.",
      itemTypeId: "file",
      collectionId: "collection-context-files",
      fileExtension: ".md",
      tags: ["context", "docs"],
      isPinned: false,
      lastViewedAt: "2026-01-09T08:50:00.000Z",
      createdAt: "2025-12-02T09:40:00.000Z",
      updatedAt: "2026-01-09T08:50:00.000Z",
    },
    {
      id: "item-system-design-checklist",
      title: "System Design Checklist",
      description: "Core prompts for architecture interviews",
      content:
        "A compact checklist covering requirements, scale estimates, data flow, storage, and reliability tradeoffs.",
      itemTypeId: "file",
      collectionId: "collection-interview-prep",
      fileExtension: ".md",
      tags: ["interview", "system-design"],
      isPinned: false,
      lastViewedAt: "2026-01-11T19:25:00.000Z",
      createdAt: "2025-10-18T17:30:00.000Z",
      updatedAt: "2026-01-11T19:25:00.000Z",
    },
    {
      id: "item-git-rebase-command",
      title: "Interactive Rebase Cheatsheet",
      description: "Common commands for cleaning up commit history",
      content:
        "Reference for squashing, rewording, dropping, and fixing up commits before opening a pull request.",
      itemTypeId: "command",
      collectionId: "collection-git-commands",
      fileExtension: ".sh",
      tags: ["git", "cli"],
      isPinned: false,
      lastViewedAt: "2026-01-08T07:40:00.000Z",
      createdAt: "2025-09-12T12:10:00.000Z",
      updatedAt: "2026-01-08T07:40:00.000Z",
    },
    {
      id: "item-bugfix-prompt",
      title: "Bugfix Prompt Template",
      description: "Prompt for isolating regressions and testing fixes",
      content:
        "Use this prompt to describe the bug, likely root cause, expected behavior, and validation steps for an AI assistant.",
      itemTypeId: "prompt",
      collectionId: "collection-ai-prompts",
      fileExtension: ".prompt",
      tags: ["ai", "debugging", "prompt"],
      isPinned: false,
      lastViewedAt: "2026-01-06T10:15:00.000Z",
      createdAt: "2025-12-14T11:00:00.000Z",
      updatedAt: "2026-01-06T10:15:00.000Z",
    },
  ],
};
