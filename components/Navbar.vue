<template>
    <header class="flex items-center">
        <div style="height: 54px" class="pr-5">
            <img src="/logo.svg" alt="logo" class="h-full" />
        </div>
        <ul class="flex items-center">
            <li>
                <NuxtLink class="text-white hover:text-teal-500 text-lg px-4 py-3" to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-white hover:text-teal-500 text-lg px-4 py-3" to="/projects">Project</NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-white hover:text-teal-500 text-lg px-4 py-3" to="/features">Features</NuxtLink>
            </li>
            <li>
                <NuxtLink class="text-white hover:text-teal-500 text-lg px-4 py-3" to="/story">Success Stories</NuxtLink>
            </li>
        </ul>
        <ul class="flex ml-auto items-center mt-2">
            <li>
                <NuxtLink to="/register"
                    class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4">
                    Sign Up
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/login"
                    class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full">
                    My Account
                </NuxtLink>
            </li>
        </ul>
    </header>
</template>