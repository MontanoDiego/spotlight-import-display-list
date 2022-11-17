const SUPABASE_URL = 'https://mjwfhlyotmsokgnuhrbi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qd2ZobHlvdG1zb2tnbnVocmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMTA4NjQsImV4cCI6MTk4MzY4Njg2NH0.59u5grTqRbWsLqKJ26MiKt2xRJVQ5w3o-GhxYYUQvMA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// write a fetch function for each of the 4 domains

export async function fetchMovies() {
    const response = await client.from('movies').select('*');
    return response.data;
}

export async function fetchDrugs() {
    const response = await client.from('drugs').select('*');
    return response.data;
}

export async function fetchCars() {
    const response = await client.from('cars').select('*');
    return response.data;
}

export async function fetchUsers() {
    const response = await client.from('users').select('*');
    return response.data;
}