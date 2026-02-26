import { FadeIn } from '@/components/FadeIn';

export const ServiceCards = () => {
    return (
        <section className="relative w-full bg-white py-[40px] md:py-[60px] lg:py-[80px]">
            <div className="mx-auto max-w-[1920px] px-[20px] md:px-[40px] lg:px-[87px]">

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes elegantPopIn {
                        0% { opacity: 0; transform: scale(0.85) translateY(40px); filter: blur(10px); }
                        100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
                    }
                    @keyframes gentleCardFloat {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-8px); }
                    }
                    @keyframes ringBell {
                        0%, 60%, 100% { transform: rotate(0deg); }
                        10%, 30%, 50% { transform: rotate(15deg); }
                        20%, 40% { transform: rotate(-15deg); }
                    }
                    @keyframes spinSlow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes bouncePulse {
                        0%, 100% { transform: translateY(0) scale(1); }
                        50% { transform: translateY(-6px) scale(1.05); }
                    }
                    @keyframes imageContinuousZoom {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.08); }
                    }
                    .animate-continuous-float {
                        animation: gentleCardFloat 6s ease-in-out infinite calc(var(--anim-delay, 0s));
                    }
                    .image-zoom-loop {
                        animation: imageContinuousZoom 20s ease-in-out infinite;
                    }
                    .hover-card-lift {
                        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    /* Notice: We remove hover scale on touch devices intuitively due to Tailwind's default non-hover on touch, but can specify media if needed. */
                    .hover-card-lift:hover {
                        transform: translateY(-12px) md:scale(1.02);
                        box-shadow: 0 25px 35px rgba(0,0,0,0.1);
                        z-index: 10;
                    }
                `}} />

                {/* Grid Layout: 2x2 cards on left + large image on right */}
                <div className="flex flex-col lg:flex-row gap-[16px] md:gap-[24px]">

                    {/* Left Side: Grids (1 col on mobile, 2 col on md+) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] flex-shrink-0 w-full lg:w-[750px]">

                        {/* Card 1: Book Your Service (Red) */}
                        <FadeIn delay={100} direction="up" className="h-full">
                            <div
                                className="relative bg-[#EF3C38] rounded-[20px] min-h-[250px] md:min-h-[329px] h-full p-[20px] md:p-[20px] lg:p-[30px] overflow-hidden flex flex-col justify-end animate-continuous-float hover-card-lift group"
                                style={{ '--anim-delay': '0.1s' } as React.CSSProperties}
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
                                {/* Bell Icon */}
                                <div className="absolute top-[20px] left-[20px]">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'ringBell 4s ease-in-out infinite', transformOrigin: 'top center' }}>
                                        <rect width="60" height="60" rx="30" fill="white" />
                                        <path d="M40.2594 35.2434C39.6523 34.1978 38.75 31.2392 38.75 27.375C38.75 25.0544 37.8281 22.8288 36.1872 21.1878C34.5462 19.5469 32.3206 18.625 30 18.625C27.6794 18.625 25.4538 19.5469 23.8128 21.1878C22.1719 22.8288 21.25 25.0544 21.25 27.375C21.25 31.2403 20.3466 34.1978 19.7395 35.2434C19.5845 35.5093 19.5023 35.8113 19.5013 36.119C19.5002 36.4267 19.5803 36.7293 19.7335 36.9962C19.8867 37.2631 20.1076 37.4848 20.3738 37.6391C20.64 37.7934 20.9423 37.8748 21.25 37.875H25.7136C25.9155 38.8628 26.4523 39.7506 27.2334 40.3882C28.0145 41.0258 28.9918 41.374 30 41.374C31.0082 41.374 31.9855 41.0258 32.7666 40.3882C33.5477 39.7506 34.0845 38.8628 34.2864 37.875H38.75C39.0576 37.8746 39.3597 37.7931 39.6258 37.6387C39.8919 37.4843 40.1126 37.2625 40.2657 36.9957C40.4187 36.7288 40.4987 36.4263 40.4976 36.1187C40.4965 35.8111 40.4143 35.5092 40.2594 35.2434ZM30 39.625C29.4573 39.6248 28.928 39.4565 28.4849 39.1431C28.0419 38.8297 27.7068 38.3867 27.5259 37.875H32.4741C32.2932 38.3867 31.9581 38.8297 31.5151 39.1431C31.072 39.4565 30.5427 39.6248 30 39.625ZM21.25 36.125C22.0922 34.6769 23 31.3212 23 27.375C23 25.5185 23.7375 23.738 25.0503 22.4253C26.363 21.1125 28.1435 20.375 30 20.375C31.8565 20.375 33.637 21.1125 34.9497 22.4253C36.2625 23.738 37 25.5185 37 27.375C37 31.318 37.9056 34.6736 38.75 36.125H21.25Z" fill="#EF3C38" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-white font-medium leading-tight md:leading-[34px] mb-[5px] md:mb-[10px] mt-[60px] md:mt-[40px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 4vw, 28px)' }}
                                    >
                                        Book Your Service
                                    </h3>
                                    <p
                                        className="text-white/80 md:text-white/60 font-normal leading-snug md:leading-[22px] max-w-[280px] md:max-w-none"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 2.5vw, 18px)' }}
                                    >
                                        Reach out to us, pick a service, and schedule a visit that suits your time.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Card 2: Get a Free Assessment (Light) */}
                        <FadeIn delay={300} direction="up" className="h-full">
                            <div
                                className="relative bg-[#EDEDED] rounded-[20px] min-h-[250px] md:min-h-[329px] h-full p-[20px] md:p-[20px] lg:p-[30px] overflow-hidden flex flex-col justify-end animate-continuous-float hover-card-lift group"
                                style={{ '--anim-delay': '0.3s' } as React.CSSProperties}
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(239,60,56,0.05),transparent_50%)]" />
                                {/* Settings Icon */}
                                <div className="absolute top-[20px] left-[20px]">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'spinSlow 15s linear infinite', transformOrigin: 'center center' }}>
                                        <rect width="60" height="60" rx="30" fill="#121010" />
                                        <path d="M30 24.7498C28.9616 24.7498 27.9466 25.0577 27.0832 25.6346C26.2199 26.2115 25.547 27.0314 25.1496 27.9907C24.7523 28.95 24.6483 30.0056 24.8509 31.024C25.0534 32.0424 25.5535 32.9779 26.2877 33.7121C27.0219 34.4463 27.9574 34.9464 28.9758 35.1489C29.9942 35.3515 31.0498 35.2475 32.0091 34.8502C32.9684 34.4528 33.7883 33.7799 34.3652 32.9165C34.9421 32.0532 35.25 31.0382 35.25 29.9998C35.2485 28.6079 34.695 27.2733 33.7107 26.2891C32.7264 25.3048 31.3919 24.7513 30 24.7498ZM30 33.4998C29.3078 33.4998 28.6311 33.2945 28.0555 32.9099C27.4799 32.5254 27.0313 31.9787 26.7664 31.3392C26.5015 30.6997 26.4322 29.9959 26.5672 29.317C26.7023 28.6381 27.0356 28.0144 27.5251 27.5249C28.0146 27.0354 28.6382 26.7021 29.3172 26.5671C29.9961 26.432 30.6998 26.5013 31.3394 26.7662C31.9789 27.0311 32.5255 27.4797 32.9101 28.0553C33.2947 28.6309 33.5 29.3076 33.5 29.9998C33.5 30.9281 33.1312 31.8183 32.4749 32.4747C31.8185 33.1311 30.9282 33.4998 30 33.4998ZM39.625 30.2361C39.6294 30.0786 39.6294 29.9211 39.625 29.7636L41.2569 27.7248C41.3424 27.6178 41.4017 27.4921 41.4298 27.358C41.4579 27.2239 41.4541 27.085 41.4187 26.9526C41.1512 25.947 40.751 24.9815 40.2287 24.0815C40.1604 23.9637 40.0654 23.8636 39.9515 23.7889C39.8376 23.7143 39.7078 23.6673 39.5725 23.6517L36.9781 23.3629C36.8702 23.2492 36.7608 23.1398 36.65 23.0348L36.3437 20.4339C36.328 20.2985 36.2808 20.1686 36.206 20.0547C36.1312 19.9408 36.0308 19.8459 35.9128 19.7776C35.0125 19.2563 34.047 18.8565 33.0417 18.5887C32.9092 18.5535 32.7703 18.5499 32.6362 18.5782C32.5021 18.6065 32.3765 18.6659 32.2695 18.7517L30.2362 20.3748C30.0787 20.3748 29.9212 20.3748 29.7637 20.3748L27.725 18.7462C27.6179 18.6606 27.4923 18.6014 27.3582 18.5733C27.2241 18.5452 27.0852 18.549 26.9528 18.5843C25.9474 18.8523 24.9819 19.2525 24.0817 19.7743C23.9639 19.8427 23.8637 19.9377 23.7891 20.0516C23.7145 20.1655 23.6675 20.2953 23.6519 20.4306L23.3631 23.0293C23.2494 23.138 23.14 23.2474 23.035 23.3575L20.4341 23.6561C20.2987 23.6718 20.1688 23.719 20.0549 23.7938C19.9409 23.8686 19.8461 23.969 19.7778 24.087C19.2565 24.9873 18.8567 25.9528 18.5889 26.9581C18.5537 27.0906 18.5501 27.2295 18.5784 27.3636C18.6067 27.4977 18.6661 27.6233 18.7519 27.7303L20.375 29.7636C20.375 29.9211 20.375 30.0786 20.375 30.2361L18.7464 32.2748C18.6608 32.3819 18.6016 32.5075 18.5735 32.6416C18.5454 32.7757 18.5491 32.9146 18.5845 33.047C18.852 34.0526 19.2522 35.0181 19.7745 35.9181C19.8429 36.0359 19.9378 36.1361 20.0518 36.2107C20.1657 36.2853 20.2955 36.3323 20.4308 36.3479L23.0251 36.6367C23.1338 36.7504 23.2432 36.8598 23.3533 36.9648L23.6562 39.5657C23.672 39.7011 23.7192 39.831 23.794 39.9449C23.8688 40.0588 23.9692 40.1537 24.0872 40.222C24.9875 40.7433 25.9529 41.1431 26.9583 41.4109C27.0908 41.4461 27.2297 41.4497 27.3638 41.4214C27.4979 41.3931 27.6235 41.3337 27.7305 41.2479L29.7637 39.6248C29.9212 39.6292 30.0787 39.6292 30.2362 39.6248L32.275 41.2567C32.382 41.3422 32.5077 41.4015 32.6418 41.4296C32.7759 41.4577 32.9148 41.4539 33.0472 41.4186C34.0528 41.151 35.0183 40.7509 35.9183 40.2286C36.036 40.1602 36.1362 40.0652 36.2109 39.9513C36.2855 39.8374 36.3325 39.7076 36.3481 39.5723L36.6369 36.9779C36.7506 36.87 36.86 36.7606 36.965 36.6498L39.5659 36.3436C39.7013 36.3278 39.8312 36.2806 39.9451 36.2058C40.059 36.131 40.1539 36.0306 40.2222 35.9126C40.7435 35.0123 41.1433 34.0469 41.4111 33.0415C41.4463 32.909 41.4499 32.7701 41.4216 32.636C41.3933 32.5019 41.3339 32.3763 41.2481 32.2693L39.625 30.2361ZM37.8641 29.5251C37.8826 29.8413 37.8826 30.1583 37.8641 30.4745C37.851 30.691 37.9188 30.9046 38.0544 31.0739L39.6064 33.0131C39.4283 33.5791 39.2003 34.1281 38.925 34.6537L36.4531 34.9337C36.2378 34.9576 36.0391 35.0605 35.8953 35.2225C35.6848 35.4592 35.4605 35.6835 35.2237 35.894C35.0618 36.0378 34.9589 36.2366 34.935 36.4518L34.6605 38.9215C34.1349 39.1969 33.5859 39.425 33.0198 39.6029L31.0795 38.0509C30.9243 37.9268 30.7314 37.8593 30.5326 37.8595H30.4801C30.164 37.8781 29.847 37.8781 29.5308 37.8595C29.3143 37.8465 29.1007 37.9143 28.9314 38.0498L26.9867 39.6029C26.4207 39.4248 25.8717 39.1968 25.3461 38.9215L25.0661 36.4529C25.0422 36.2377 24.9393 36.0389 24.7773 35.8951C24.5405 35.6846 24.3163 35.4603 24.1058 35.2236C23.962 35.0616 23.7632 34.9587 23.548 34.9348L21.0783 34.6592C20.8029 34.1336 20.5748 33.5846 20.3969 33.0186L21.9489 31.0782C22.0844 30.9089 22.1522 30.6953 22.1392 30.4789C22.1206 30.1627 22.1206 29.8457 22.1392 29.5295C22.1522 29.313 22.0844 29.0994 21.9489 28.9301L20.3969 26.9865C20.575 26.4205 20.803 25.8715 21.0783 25.3459L23.5469 25.0659C23.7621 25.042 23.9609 24.9391 24.1047 24.7771C24.3152 24.5404 24.5395 24.3161 24.7762 24.1056C24.9389 23.9617 25.0422 23.7625 25.0661 23.5467L25.3406 21.0781C25.8662 20.8027 26.4152 20.5746 26.9812 20.3967L28.9216 21.9487C29.0909 22.0842 29.3045 22.1521 29.5209 22.139C29.8371 22.1204 30.1541 22.1204 30.4703 22.139C30.6868 22.1521 30.9004 22.0842 31.0697 21.9487L33.0133 20.3967C33.5793 20.5748 34.1283 20.8028 34.6539 21.0781L34.9339 23.5467C34.9578 23.7619 35.0607 23.9607 35.2226 24.1045C35.4594 24.315 35.6837 24.5393 35.8942 24.7761C36.038 24.938 36.2368 25.0409 36.452 25.0648L38.9217 25.3393C39.1971 25.8649 39.4252 26.4139 39.6031 26.98L38.0511 28.9203C37.9143 29.091 37.8464 29.3068 37.8608 29.5251H37.8641Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[#121010] font-medium leading-tight md:leading-[34px] mb-[5px] md:mb-[10px] mt-[60px] md:mt-[40px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 4vw, 28px)' }}
                                    >
                                        Get a Free Assessment
                                    </h3>
                                    <p
                                        className="text-[#121010]/80 md:text-[#121010]/60 font-normal leading-snug md:leading-[22px] max-w-[280px] md:max-w-none"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 2.5vw, 18px)' }}
                                    >
                                        Contact us, choose a service, and schedule your convenient visit.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Card 3: We Get to Work (Light) */}
                        <FadeIn delay={500} direction="up" className="h-full">
                            <div
                                className="relative bg-[#EDEDED] rounded-[20px] min-h-[250px] md:min-h-[329px] h-full p-[20px] md:p-[20px] lg:p-[30px] overflow-hidden flex flex-col justify-end animate-continuous-float hover-card-lift group"
                                style={{ '--anim-delay': '0.5s' } as React.CSSProperties}
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(239,60,56,0.05),transparent_50%)]" />
                                {/* Chat Icon */}
                                <div className="absolute top-[20px] left-[20px]">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'bouncePulse 4s ease-in-out infinite' }}>
                                        <rect width="60" height="60" rx="30" fill="#121010" />
                                        <path d="M31.3125 30.0002C31.3125 30.2598 31.2355 30.5136 31.0913 30.7294C30.9471 30.9452 30.7421 31.1135 30.5023 31.2128C30.2624 31.3121 29.9985 31.3381 29.7439 31.2875C29.4893 31.2369 29.2555 31.1119 29.0719 30.9283C28.8884 30.7447 28.7634 30.5109 28.7127 30.2563C28.6621 30.0017 28.6881 29.7378 28.7874 29.4979C28.8867 29.2581 29.055 29.0531 29.2708 28.9089C29.4867 28.7647 29.7404 28.6877 30 28.6877C30.3481 28.6877 30.6819 28.826 30.9281 29.0721C31.1742 29.3183 31.3125 29.6521 31.3125 30.0002ZM25.1875 28.6877C24.9279 28.6877 24.6742 28.7647 24.4583 28.9089C24.2425 29.0531 24.0742 29.2581 23.9749 29.4979C23.8756 29.7378 23.8496 30.0017 23.9002 30.2563C23.9509 30.5109 24.0759 30.7447 24.2594 30.9283C24.443 31.1119 24.6768 31.2369 24.9314 31.2875C25.186 31.3381 25.4499 31.3121 25.6898 31.2128C25.9296 31.1135 26.1346 30.9452 26.2788 30.7294C26.423 30.5136 26.5 30.2598 26.5 30.0002C26.5 29.6521 26.3617 29.3183 26.1156 29.0721C25.8694 28.826 25.5356 28.6877 25.1875 28.6877ZM34.8125 28.6877C34.5529 28.6877 34.2992 28.7647 34.0833 28.9089C33.8675 29.0531 33.6992 29.2581 33.5999 29.4979C33.5006 29.7378 33.4746 30.0017 33.5252 30.2563C33.5759 30.5109 33.7009 30.7447 33.8844 30.9283C34.068 31.1119 34.3018 31.2369 34.5564 31.2875C34.811 31.3381 35.0749 31.3121 35.3148 31.2128C35.5546 31.1135 35.7596 30.9452 35.9038 30.7294C36.048 30.5136 36.125 30.2598 36.125 30.0002C36.125 29.6521 35.9867 29.3183 35.7406 29.0721C35.4944 28.826 35.1606 28.6877 34.8125 28.6877ZM41.375 30.0002C41.3754 31.9641 40.8674 33.8946 39.9004 35.6039C38.9333 37.3132 37.5403 38.7429 35.8567 39.7541C34.1732 40.7652 32.2565 41.3233 30.2933 41.3739C28.3301 41.4246 26.3872 40.966 24.6537 40.043L20.9295 41.2844C20.6212 41.3873 20.2903 41.4022 19.974 41.3275C19.6576 41.2529 19.3683 41.0916 19.1385 40.8618C18.9086 40.6319 18.7473 40.3426 18.6727 40.0263C18.598 39.7099 18.613 39.379 18.7158 39.0707L19.9572 35.3465C19.1458 33.8209 18.6926 32.1306 18.632 30.4038C18.5714 28.677 18.905 26.959 19.6075 25.3804C20.31 23.8017 21.3628 22.4038 22.6862 21.2929C24.0096 20.1819 25.5687 19.387 27.2451 18.9685C28.9216 18.55 30.6713 18.519 32.3616 18.8777C34.0518 19.2365 35.6381 19.9755 37.0001 21.0389C38.3621 22.1022 39.4639 23.4618 40.2219 25.0146C40.9799 26.5673 41.3743 28.2723 41.375 30.0002ZM39.625 30.0002C39.6246 28.5238 39.2845 27.0672 38.6311 25.7433C37.9777 24.4193 37.0285 23.2634 35.8568 22.365C34.6852 21.4666 33.3226 20.8498 31.8744 20.5622C30.4263 20.2747 28.9314 20.3242 27.5054 20.7068C26.0794 21.0895 24.7606 21.7951 23.6509 22.769C22.5413 23.7429 21.6706 24.959 21.1061 26.3233C20.5417 27.6876 20.2987 29.1634 20.3959 30.6367C20.4931 32.1099 20.9279 33.541 21.6667 34.8193C21.7287 34.9266 21.7672 35.0459 21.7797 35.1692C21.7921 35.2925 21.7782 35.417 21.7389 35.5346L20.375 39.6252L24.4656 38.2613C24.5547 38.2309 24.6482 38.2154 24.7423 38.2154C24.896 38.2156 25.0469 38.2564 25.1798 38.3335C26.6431 39.1801 28.3034 39.6264 29.9939 39.6274C31.6844 39.6285 33.3453 39.1843 34.8096 38.3396C36.2739 37.4948 37.4899 36.2794 38.3352 34.8154C39.1805 33.3515 39.6254 31.6907 39.625 30.0002Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[#121010] font-medium leading-tight md:leading-[34px] mb-[5px] md:mb-[10px] mt-[60px] md:mt-[40px]"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(22px, 4vw, 28px)' }}
                                    >
                                        We Get to Work
                                    </h3>
                                    <p
                                        className="text-[#121010]/80 md:text-[#121010]/60 font-normal leading-snug md:leading-[22px] max-w-[280px] md:max-w-none"
                                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(14px, 2.5vw, 18px)' }}
                                    >
                                        Message us, choose your service, and arrange a visit at your convenience.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Card 4: Image Card (Worker) */}
                        <FadeIn delay={700} direction="up" className="h-full">
                            <div
                                className="relative bg-[#EDEDED] rounded-[20px] min-h-[250px] md:min-h-[329px] h-full overflow-hidden animate-continuous-float hover-card-lift group"
                                style={{ '--anim-delay': '0.7s' } as React.CSSProperties}
                            >
                                <img
                                    src="/home10.png"
                                    alt="Solar Panel Installation Worker"
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 image-zoom-loop"
                                />
                            </div>
                        </FadeIn>

                    </div>

                    {/* Right Side: Large Image */}
                    <FadeIn delay={900} direction="up" className="flex-1 w-full">
                        <div
                            className="rounded-[20px] overflow-hidden min-h-[300px] md:min-h-[682px] animate-continuous-float relative group h-full"
                            style={{ '--anim-delay': '0.9s' } as React.CSSProperties}
                        >
                            <img
                                src="/home11.png"
                                alt="Solar Panels on Roof"
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 image-zoom-loop"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                        </div>
                    </FadeIn>

                </div>

            </div>
        </section>
    );
};
