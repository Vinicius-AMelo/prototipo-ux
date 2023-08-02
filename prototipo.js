const UX_Prototype = {
    handleSettings() {
        const icon = document.querySelector('.ux-navbar__menu--icon')
        const dropdown = document.querySelector('.ux-navbar__menu--dropdown')
        const overlay = document.querySelector('.overlay')
        const video = document.querySelector("body > div > div.ux-screen > div > video");

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
                    video.play();
                    video.currentTime = 30;
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
            video.src = 'xbox.mp4'
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
            video.pause();
        })
    },

    async init() {
        this.handleSettings()
    }
};

document.addEventListener('DOMContentLoaded', () => {
    UX_Prototype.init();
})