const UX_Prototype = {
    date: new Date(),
    volume: 0.3,

    handleSettings() {
        const icon = document.querySelector('.ux-navbar__menu--icon')
        const dropdown = document.querySelector('.ux-navbar__menu--dropdown')
        const overlay = document.querySelector('.overlay')
        const video = document.querySelector("body > div > div.ux-screen > div > video");
        video.volume = this.volume;
        document.querySelector('.ux-content__top-buttons--channels-item.ps').classList.add('empty')

        icon.addEventListener('click', () => {
            dropdown.classList.add('ux-active')
            overlay.classList.add('ux-active')
        })
        overlay.addEventListener('click', () => {
            dropdown.classList.remove('ux-active')
            overlay.classList.remove('ux-active')
        })

        document.querySelectorAll('.ux-content__top-buttons--channels-item').forEach(item => {
            item.addEventListener('mousedown', (e) => {
                e.target.classList.add('ux-active')
            })
        })

        document.querySelectorAll('.ux-content__top-buttons--channels-item').forEach(item => {
            item.addEventListener('mouseup', (e) => {
                e.target.classList.remove('ux-active')
            })
        })

        document.querySelectorAll('.ux-content__console-control--actions-item').forEach(item => {
            item.addEventListener('mousedown', (e) => {
                e.target.classList.add('ux-active')
            })
        })

        document.querySelectorAll('.ux-content__console-control--actions-item').forEach(item => {
            item.addEventListener('mouseup', (e) => {
                e.target.classList.remove('ux-active')
            })
        })

        document.querySelectorAll('.ux-content__top-buttons--off').forEach(item => {
            item.addEventListener('mousedown', (e) => {
                e.target.classList.add('ux-active')
                document.querySelector('.video-overlay').classList.toggle('ux-active')
                setTimeout(() => {
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                }, 100)
            })
        })

        document.querySelectorAll('.ux-content__top-buttons--off').forEach(item => {
            item.addEventListener('mouseup', (e) => {
                e.target.classList.remove('ux-active')
            })
        })

        document.querySelector('.ux-content__top-buttons--channels-item.xbox').addEventListener('click', (e) => {
            document.querySelector('.ux-control').classList.add('console-control')
            video.pause();
            video.src = 'xbox_ch.mp4'
            video.load();
            video.play();
        })

        document.querySelector('.ux-content__top-buttons--channels-item.gnt').addEventListener('click', (e) => {
            document.querySelector('.ux-control').classList.remove('console-control')
            video.pause();
            video.src = 'gnt_ch.mp4'
            video.load();
            video.play();
            video.currentTime = 30;
        })

        document.querySelector('.ux-content__top-buttons--channels-item.globo').addEventListener('click', (e) => {
            document.querySelector('.ux-control').classList.remove('console-control')
            video.pause();
            video.src = 'globo_ch.mp4'
            video.load();
            video.play();
        })

        document.querySelector('.ux-content__console-control--actions-item.a-btn').addEventListener('click', (e) => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        })

        document.querySelector("body > div > div.ux-control > nav > button").addEventListener('click', (e) => {
            document.querySelector('.ux-control').classList.remove('console-control')
        })

        document.querySelector("body > div > div.ux-control > div.ux-content__control > div.ux-content__bottom-buttons > div.ux-content__bottom-buttons--central > span:nth-child(5)").addEventListener('click', (e) => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        })

        document.querySelector("body > div > div.ux-control > div.ux-content__control > div.ux-content__bottom-buttons > div:nth-child(1) > span.plus").addEventListener('click', (e) => {
            if (this.volume < 1) {
                this.volume += 0.1;
                video.volume = this.volume;
            }

        })
        document.querySelector("body > div > div.ux-control > div.ux-content__control > div.ux-content__bottom-buttons > div:nth-child(1) > span.minus").addEventListener('click', (e) => {
            console.log(this.volume)
            if (this.volume > 0.1) {
                this.volume -= 0.1;
                video.volume = this.volume;
            }
        })

        document.querySelector(".ux-content__top-buttons--channels-item.ps.empty").addEventListener('click', (e) => {
            if (document.querySelector('.select-icon img')) {
                document.querySelector('.select-icon').classList.add('ux-active')
            }
        })

        document.querySelector('.select-icon img').addEventListener('click', (e) => {
            document.querySelector('.select-icon').classList.remove('ux-active')
            document.querySelector('.ux-content__top-buttons--channels-item.ps').classList.remove('empty')
            document.querySelector('.ux-content__top-buttons--channels-item.ps').append(e.target)
        })
    },

    async init() {
        this.handleSettings()
    }
};

document.addEventListener('DOMContentLoaded', () => {
    UX_Prototype.init();
})