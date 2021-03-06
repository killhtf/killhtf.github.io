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
                mainPage: {
                    mainTitle: 'About me',
                    cookies: 'DoubleCookies',
                    programmingTitle: 'Programming',
                    programmingIntro: 'Now programming is my main activity. I\'m Java-developer with 3 years of experience; ' +
                        'familiar with technologies like: Spring Boot, JUnit, БД (SQL and NoSQL). ' +
                        'I have experience in creating new large project and in reworking some existing projects. ' +
                        'Also I have experience with JS (React, Typescript), HTML and CSS.',
                    programmingOpenSource: 'Sometimes I make contribution in Open Source — I have my own repositories on GitHub and contribution in other projects.',
                    programmingPreLink: 'More information about me can be found in ',
                    programmingLink: 'this section.',
                    fandomTitle: 'FANDOM',
                    fandomIntro: 'FANDOM is one of the biggest wiki hosting and fan-site in the world. I actively edit on it since 2016. ' +
                        'The main direction is to maintain the technical part of project (templates, CSS, JS, even Lua modules); also I improve articles and write new ones.',
                    fandomVanguard: 'Since 2019 I\'m Vanguard member - team which helps make Fandom\'s content available on the widest possible range of devices.',
                    fandomPreLink: 'More details about me you can find ',
                    fandomLink: 'here.',
                    hobbiesTitle: 'Hobbies',
                    hobbiesLink: 'Photography, books, chess and other things!',
                    intro: 'Hello! I am DoubleCookies — person who loves programming, eating cookies, check statistics and many other things!' +
                        'More details about me and my activities can be found below.',
                },
                aboutThisPage: {
                    title: 'This page uses following technologies:',
                    antd: 'For most of components (menu, pictures, even this popover)',
                    createReactApp: 'Starting point for project',
                    ghPages: 'This page host',
                    i18next: 'For internationalization',
                    reactRouter: 'For navigation',
                    cookie: 'I\'m smart cookie. Understand those things.',
                },
            },
            ru: {
                mainPage: {
                    mainTitle: 'Обо мне',
                    cookies: 'DoubleCookies',
                    programmingTitle: 'Программирование',
                    programmingIntro: 'Сейчас программирование является моей основной сферой деятельности. Кратко о себе: Java-разработчик с 3 годами опыта работы; ' +
                        'знаком с различными связанными технологиями: Spring Boot, JUnit, БД (SQL и NoSQL). ' +
                        'За этот период времени принял участие как в создании нового масштабного проекта, так и в доработке ряда уже существующих. ' +
                        'Также есть опыт работы с JS (React, Typescript), HTML и CSS.',
                    programmingOpenSource: 'Вношу свой небольшой вклад в Open Source — на GitHub работаю над своими проектами и немного помогаю другим.',
                    programmingPreLink: 'Больше информации обо мне можно найти в ',
                    programmingLink: 'соответствующем разделе.',
                    fandomTitle: 'FANDOM',
                    fandomIntro: 'FANDOM — это один из крупнейших вики-хостингов и сайтов для фанатов. Активно редактирую на нём начиная с ' +
                        '2016 года. Основным направлением является поддержание технической части википроектов (шаблоны, CSS, JS, в редких случаях — Lua); помимо этого ' +
                        'дорабатываю имеющиеся статьи и иногда создаю новые.',
                    fandomVanguard: 'С 2019 года являюсь членом команды Vanguard, которая делает контент ФЭНДОМа доступным для как можно большего количества устройсв.',
                    fandomPreLink: 'Подробнее о моей деятельности написано ',
                    fandomLink: 'здесь.',
                    hobbiesTitle: 'Увлечения',
                    hobbiesLink: 'Фотография, чтение книг, шахматы и не только! ',
                    intro: 'Всем привет! С вами DoubleCookies — тот, кто любит программировать, кушать печенье, изучать статистику и многое другое. ' +
                        'Более подробно обо мне и моей деятельности можно будет прочитать ниже.',
                },
                aboutThisPage: {
                    title: 'Эта страница написана с использованием следующих технологий:',
                    antd: 'Для множества компонентов (меню, изображения, даже это всплывающее окно)',
                    createReactApp: 'Стартовая точка создания',
                    ghPages: 'Место размещение web-страницы',
                    i18next: 'Для поддержки разных языков',
                    reactRouter: 'Для навигации',
                    cookie: 'Я весьма умное печенье. Разбираюсь во всём этом.'
                },
                programmingProject: {
                    title: 'Проекты',
                    intro: 'На моей GitHub-странице находятся ряд репозиториев с проектами:',
                    GDStatistics: 'Проект, посвящённый сбору статистики из игры Geometry Dash.',
                    stats4wiki: 'Похож на предыдущий проект, но более узконаправленный.',
                    StringSwap: 'Небольшое приложение для работы с текстом',
                    MazeGeneratorAndSolver: 'Проект по генерации и решения лабиринтов. Присутствует отрисовка всего процесса создания и решения.',
                    AssociativeRules: 'Старый проект, созданный ещё в университете. Позволяет произвести анализ ассоциативных правил в рамках задачи медицинской диагностики.',
                },
                programmingSection: {
                    exp: 'Навыки',
                    start: 'Разработкой программного обеспечения занимаюсь на протяжении уже более трёх лет. За это время успел познакомиться и использовать следующие технологии:',
                    javaExp: '"Основной" язык, на котором программирую большую часть времени. За это время познакомился со следующими технологиями:',
                    jsExp: 'Второй язык программирования, который тоже часто использую.',
                    otherExp: 'Прочее',
                    githubStats: 'Статистика на GitHub',
                }
            }
        }
    });

export default i18n;