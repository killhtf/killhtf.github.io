import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

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
    .use(detector)
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
                    mainTitle: 'Обо мне',
                    cookies: 'DoubleCookies',
                    programmingTitle: 'Программирование',
                    fandomTitle: 'FANDOM',
                    hobbiesTitle: 'Увлечения',
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
                    cookie: 'Знаете ли, я весьма умное печенье. Разбираюсь в используемых технологиях.'

                },
                programming: {
                    title: 'Программирование',
                    intro: 'Сейчас программирование является моей основной сферой деятельности. Кратко о себе: Java-разработчик с 3 годами опыта работы; ' +
                        'знаком с различными связанными технологиями: Spring Boot, JUnit, БД (SQL и NoSQL). ' +
                        'За этот период времени принял участие как в создании нового масштабного проекта, так и в доработке ряда уже существующих. ' +
                        'Также есть опыт работы с JS (React, Typescript), HTML и CSS.',
                    openSource: 'Вношу свой небольшой вклад в Open Source — на GitHub работаю над своими проектами и немного помогаю другим.',
                    preLink: 'Больше информации обо мне можно найти в ',
                    link: 'соответствующем разделе.'
                },
                programmingProject: {
                    title: 'Проекты',
                    intro: 'На моей GitHub-странице находятся ряд репозиториев с проектами:',
                    GDStatistics: ' — проект, посвящённый сбору статистики из игры Geometry Dash.'
                },
                fandom: {
                    intro: 'FANDOM — это один из крупнейших вики-хостингов. Активно редактирую на нём начиная с ' +
                        '2016 года. Основным направлением является поддержание технической части википроектов (шаблоны, CSS, JS, в редких случаях — Lua); помимо этого ' +
                        'дорабатываю имеющиеся статьи и иногда создаю новые.',
                    vanguard: 'С 2019 года являюсь членом команды Vanguard, которая помогает википроектам переходить на новые технологии.',
                    preLink: 'Подробнее о моей деятельности написано ',
                    link: 'здесь.'
                },
                hobbies: {
                    link: 'Фотография, чтение книг, шахматы и не только! '
                },
                photography: {
                    intro: 'Фотография — это моё хобби. ',
                }
            }
        }
    });

export default i18n;