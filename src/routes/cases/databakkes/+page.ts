import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

// Draft case: visible in dev only, a plain 404 in production until it is ready.
export const prerender = false;

export const load = () => {
	if (!dev) error(404, 'Not found');
};
