<template>
    <div class="landing-page">
        <section class="landing-hero pt-5">
            <div class="header__bg"></div>
            <div class="container mx-auto relative">
                <Navbar />
                <div class="flex items-center pt-10 px-5 md:px-0">
                    <div class="w-1/2">
                        <h1 class="text-4xl text-white mb-5">
                            We helps <u class="hero-underline">startup</u> to <br />
                            getting started & <u class="hero-underline">funding</u> <br />
                            their truly needs
                        </h1>
                        <p class="text-white text-xl font-light mb-8">
                            Fund the best idea to become <br />
                            a real product and be the contributor
                        </p>
                        <button @click="$router.push({ path: '/' })"
                            class="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full">
                            Find a Project
                        </button>
                    </div>
                    <div class="w-1/2 flex justify-center">
                        <img src="/hero-image@2x.png" alt="crowdfunding project" />
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto pt-24">
            <div class="flex justify-between items-center mb-10">
                <div class="w-auto">
                    <h2 class="text-3xl text-gray-900 mb-8">
                        Only 3 steps to execute <br />
                        your bright ideas
                    </h2>
                </div>
            </div>
            <div class="flex">
                <div class="w-full px-56 mb-5">
                    <img src="/line-step.svg" alt="" class="w-full" />
                </div>
            </div>
            <div class="flex justify-between items-center text-center">
                <div class="w-1/3">
                    <figure class="flex justify-center items-center">
                        <img src="/step-1-illustration.svg" alt="" class="h-30 mb-8" />
                    </figure>
                    <div class="step-content">
                        <h3 class="font-medium">Sign Up</h3>
                        <p class="font-light">
                            Sign Up account and start <br />funding project
                        </p>
                    </div>
                </div>
                <div class="w-1/3">
                    <figure class="flex justify-center items-center -mt-24">
                        <img src="/step-2-illustration.svg" alt="" class="h-30 mb-8" />
                    </figure>
                    <div class="step-content">
                        <h3 class="font-medium">Open Project</h3>
                        <p class="font-light">
                            Choose some project idea, <br />
                            and start funding
                        </p>
                    </div>
                </div>
                <div class="w-1/3">
                    <figure class="flex justify-center items-center -mt-48">
                        <img src="/step-3-illustration.svg" alt="" class="h-30 mb-8" />
                    </figure>
                    <div class="step-content">
                        <h3 class="font-medium">Execute</h3>
                        <p class="font-light">
                            Time to makes dream <br />
                            comes true
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto pt-24">
            <div class="flex justify-between items-center">
                <div class="w-auto">
                    <h2 class="text-3xl text-gray-900 mb-8">
                        New projects you can <br />
                        taken care of
                    </h2>
                </div>
                <div class="w-auto mt-5">
                    <NuxtLink class="text-gray-900 hover:underline text-md font-medium" to="">View All</NuxtLink>
                </div>
            </div>
            <div class="flex mt-3 -mx-6">
                <div class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20">
                    <div class="item">
                        <figure class="item-image">
                            <img src="/project-thumbnail-1.jpg" alt="" class="rounded-20 w-full" />
                        </figure>
                        <div class="item-meta">
                            <h4 class="text-3xl font-medium text-gray-900 mt-5">
                                Robotic Hand
                            </h4>
                            <p class="text-md font-light text-gray-900 h-12">
                                Creating robotic hand for better movement
                            </p>
                            <div class="relative pt-4 progress-bar">
                                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg">
                                    <div style="width: 20%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped">
                                    </div>
                                </div>
                            </div>
                            <div class="flex progress-info">
                                <div>20%</div>
                                <div class="ml-auto font-semibold">Rp 100.000.000</div>
                            </div>
                        </div>
                        <NuxtLink to="/projects/1"
                            class="text-center mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full">
                            Fund Now
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto pt-24">
            <div class="flex justify-between items-center">
                <div class="w-auto">
                    <h2 class="text-3xl text-gray-900 mb-8">
                        See What Our <br />
                        Happy Clients Say
                    </h2>
                </div>
            </div>
            <div class="flex mb-10">
                <div class="w-2/12 flex justify-center items-start">
                    <img src="/testimonial-line.svg" alt="" />
                </div>
                <div class="w-8/12 mt-16">
                    <h2 class="text-3xl text-gray-900 font-light">
                        “Funding at Bucker is very easy and comfortable. <br />
                        Just need to find an idea, click and already funding.”
                    </h2>
                    <div class="testimonial-info mt-8">
                        <div class="name text-xl font-semibold">Shopie Nicole</div>
                        <div class="title text-xl font-light text-gray-400">
                            Project Manager
                        </div>
                    </div>
                    <div class="testimonial-icon mt-10">
                        <img src="/testimonial-1-icon.png" alt=""
                            class="w-20 mr-5 inline-block testimonial-user rounded-full" />
                        <img src="/testimonial-2-icon.png" alt=""
                            class="w-20 mr-5 inline-block testimonial-user rounded-full" />
                        <img src="/testimonial-3-icon.png" alt=""
                            class="w-20 mr-5 inline-block testimonial-user active rounded-full" />
                    </div>
                </div>
                <div class="w-2/12"></div>
            </div>
        </section>
        <div class="cta-clip -mt-20"></div>
        <CallToAction />
        <Footer />
    </div>
</template>