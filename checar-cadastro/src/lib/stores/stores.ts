import { writable } from 'svelte/store';


export const userNome = writable('');
export const userEmail = writable('');
export const userSenha = writable('');

let inome:string = '';
let iemail:string = '';
let isenha:string = '';

$: {
    userNome.set(inome);
    userEmail.set(iemail);
    userSenha.set(isenha);
}