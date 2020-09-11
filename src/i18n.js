import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    //.use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    //.use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: true,
        lng: 'ru',

        resources: {
            en: {
                about: {
                    title: 'hello from namespace 1'
                },
                namespace2: {
                    key: 'hello from namespace 2'
                }
            },
            ru: {
                about: {
                    title: 'Обо мне',
                    intro: 'Всем привет! С вами DoubleCookies — тот, кто любит программировать, кушать печенье, изучать статистику и многое другое. ' +
                        'Более подробно обо мне и моей деятельности можно будет прочитать ниже.'
                },
                thisPage: {
                    title: 'Эта страница написана с использованием следующих технологий:',
                    antd: 'Для множества компонентов (меню, изображения, даже это всплывающее окно)',
                    createReactApp: 'Стартовая точка создания',
                    ghPages: 'Место размещение web-страницы',
                    i18next: 'Для поддержки разных языков',
                    reactRouter: 'Для навигации',
                    cookie: 'Знаете ли, я весьма умное печенье.'

                },
                programming: {
                    title: 'Программирование',
                    intro: 'На данный момент — основная сфера деятельности. Этому занятию посвящаю большую часть своего времени ' +
                        '(как и на работе, так и в свободное от неё время).',
                    preLink: 'Подробнее об этом можно прочитать в ',
                    link: 'соответствующем разделе.'
                },
                programmingProject: {
                    title: 'Проекты',
                    intro: 'На моей GitHub-странице находятся ряд репозиториев с проектами:',
                    GDStatistics: ' — проект, посвящённый сбору статистики из игры Geometry Dash.'
                },
                fandom: {
                    intro: 'FANDOM — это крупнейший в мире развлекательный сайт для фанатов, а также один из крупнейших вики-хостингов.'
                },
                photography: {
                    title: 'Фото',
                    intro: 'Фотографии — это хорошо. Когда ты сам можешь их делать — это отлично!',
                }
            }
        }
    });


export default i18n;