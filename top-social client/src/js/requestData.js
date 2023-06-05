import { getPath } from "./utils";
import axios from "axios";

// function to call API
export async function callApi(path) {
  try {
    return await axios.get(path);
  } catch (error) {
    console.error(error);
  }
}

export async function getProfile() {
  const path = getPath("profile");
  const response = await callApi(path);
  return response.data.data;
}

export async function getCards() {
  const path = getPath("cards");
  const response = await callApi(path);
  return response.data.data;
}

export async function getHighline() {
  const path = getPath("highline");
  const response = await callApi(path);
  return response.data.data;
}

export async function getMessage() {
  const path = getPath("message");
  const response = await callApi(path);
  return response.data.data;
}

export async function getRequest() {
  const path = getPath("request");
  const response = await callApi(path);
  return response.data.data;
}

export const cards = await getCards();
export const profile = await getProfile();
export const highline = await getHighline();
export const message = await getMessage();
export const request = await getRequest();
