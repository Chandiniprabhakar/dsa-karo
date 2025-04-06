// lib/appwrite.ts
import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('http://localhost:5173') // or your self-hosted endpoint
  .setProject('67f20042000dac5da3f0'); // from Appwrite console

const account = new Account(client);

export { client, account };
