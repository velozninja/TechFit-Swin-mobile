import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "jwt_token";
const TOKEN_EXPIRATION = "token_expiration"

export async function saveToken(token, expiration) {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
    await SecureStore.setItemAsync(TOKEN_EXPIRATION, String(expiration))
}

export async function getToken() {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    const exp = await SecureStore.getItemAsync(TOKEN_EXPIRATION);
    return {token, expo};
}

export async function deleteToken() {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.getItemAsync(TOKEN_EXPIRATION);
}