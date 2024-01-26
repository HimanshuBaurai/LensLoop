import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,//ts showing .env is not in importmeta, so let ts know this by creating a new vite-env.d.ts file in root
    url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);