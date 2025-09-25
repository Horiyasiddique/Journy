import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // my appwrite endpoint
    .setProject("68d4408a00090a5465a1"); // my appwrite your project ID

export const account = new Account(client);
export const databases = new Databases(client);
