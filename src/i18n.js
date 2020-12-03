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
                    title: 'hello from namespace 1'
                }
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
                    fandomIntro: 'FANDOM — это один из крупнейших вики-хостингов. Активно редактирую на нём начиная с ' +
                        '2016 года. Основным направлением является поддержание технической части википроектов (шаблоны, CSS, JS, в редких случаях — Lua); помимо этого ' +
                        'дорабатываю имеющиеся статьи и иногда создаю новые.',
                    fandomVanguard: 'С 2019 года являюсь членом команды Vanguard, которая помогает википроектам переходить на новые технологии.',
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