import { account, ID } from "@/api/appwrite";

export async function signup(email, password, name) {
  return await account.create(ID.unique(), email, password, name);
}

export async function login(email, password) {
  return await account.createEmailPasswordSession(email, password);
}

export async function getCurrentUser() {
  return await account.get();
}

export async function logout() {
  return await account.deleteSession("current");
}
