
type User = {
    id: number;
    name: string,
    email: string
}
type Credentials = {
    email: string,
    password: string
}

type RegistrationInfo = {
    email: string,
    name: string,
    password: string,
    password_confirmation: string,
}
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);

    const isLoggedIn = computed(()=> !!user.value);

    const fetchUser = async () => {
        const {data, error} = await useApiFetch("/api/user");
        console.log(error.value)
        user.value = data.value as User;

    }

    const login = async (credentials: Credentials) => {
        await useApiFetch("/sanctum/csrf-cookie")

        const login = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        })

        await fetchUser();

        return login;

    }

    const logout = async () => {
        await useApiFetch("/logout", {
            method: "POST"
        });

        user.value = null;
        navigateTo("/login");
    }

    const register = async (info: RegistrationInfo) => {
        await useApiFetch("/sanctum/csrf-cookie")

        const register = await useApiFetch("/register", {
            method: "POST",
            body: info,
        })

        await fetchUser();

        return register;
    }


    return { user, login, isLoggedIn, fetchUser, logout, register }
})