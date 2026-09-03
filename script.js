// ─── TRANSLATIONS ───
const i18n = {
    bg: {
        robot_instr_title: "Инструкции на робота",

        robot_instr_desc: "Подробни PDF инструкции за сглобяване на нашия робот и приставки.",

        instr_robot: "Основен робот",

        instr_run: "Мисия",
        
        expert_name: "Д-р Иан Маклеод",
        expert_title: "Световноизвестен експерт по консервация · Западноавстралийски музей",
        quote_1: "„Мисля, че това е блестяща концепция.“",
        quote_2: "„Направихте това, което на мен ми отне десетилетия — да обясня работата си на някого за две минути.“",
        quote_3: "„14-годишни деца в България решиха този проблем, какво ви става на вас?“",
        project_model_hint: "Плъзни · Завърти · Мащабирай",
        site_logo: "Механо",
        nav_home: "Начало",
        nav_about: "За нас", nav_code: "Код", nav_project: "Проект",
        nav_docs: "Документи", nav_team: "Отбор", nav_location: "Място", nav_contact: "Свържи се",
        nav_models: "3D Модели",
        nav_more: "Още",
        hero_badge: "✨ FLL Отбор 2025-26",
        hero_sub: "Млад FIRST LEGO League отбор от инженери, мислители и мечтатели. Изграждаме роботи, решаваме проблеми и оставяме следа.",
        hero_btn1: "📄 Документи", hero_btn2: "💻 Код",
        stat_members: "Члена", stat_seasons: "Сезона", stat_dedication: "Отдаденост", stat_ideas: "Идеи",
        scroll: "Scroll", hero_loading: "Зареждане на 3D модел...",
        models_title: "3D Архив на Робота", models_desc: "Изберете модел от списъка, за да разгледате развитието на нашия робот.",
        models_viewer_hint: "Използвайте мишката или пръста си, за да въртите и мащабирате модела.",
        models_loading: "ЗАРЕЖДАНΕ...", models_main: "Основен Робот", models_run: "Мисия: Run",
        models_run_desc: "Специализирана конфигурация за мисия {run}. Оптимизирана за скорост и точност.",
        brief_models_desc: "Разгледайте нашите роботизирани конструкции в детайлен 3D формат. Вижте всяка част отблизо.",
        btn_reset: "НУЛИРАНЕ", btn_auto_rotate: "АВТО-РОТАЦИЯ",
        about_label: "За нас", about_title: "Кои сме ние",
        about_desc: "Отбор от девет младежи, обединени от страст към инженерството и иновациите.",
        gallery_label: "Галерия", gallery_title: "Нашите Моменти",
        gallery_desc: "Кадри от нашето пътешествие в света на роботиката и иновациите.",
        gallery_moment: "Момент от отбора",
        about_robot_title: "Дизайн на робот",
        about_robot_desc: "Проектираме, конструираме и програмираме LEGO® роботи, оптимизирани за прецизност и скорост.",
        about_presentation: "Презентация", about_folder: "Папка",
        about_project_title: "Иновативен проект",
        about_project_desc: "Решаваме реални проблеми с креативни инженерни идеи, вдъхновени от темата на сезона.",
        about_video: "Видео",
        about_values_title: "Основни ценности",
        about_values_desc: "Уважение, откритост, въздействие, приобщаване, работа в екип и забавление нашата ДНК.",
        code_label: "Код", code_title: "Нашият код на победата",
        code_desc: "Чист Python for SPIKE Prime. Open-source, модулен, оптимизиран.",
        project_label: "Проект", project_title: "Нашият иновативен проект",
        project_desc: "Решение, което прави света около нас по-добро място.",
        project_name: "Автоматизирана система за обесоляване на артефакти",
        project_problem_label: "Проблем",
        project_problem: "Традиционното обезсоляване на морски артефакти е бавен, изцяло ръчен и неточен процес, изискващ пътуване стотици километри за рутинни измервания.",
        project_solution_label: "Решение",
        project_solution: "Системата ASOA 2.0 автоматизира мониторинга чрез IoT платформа и научен алгоритъм, позволяващ наблюдение в реално време.",
        project_impact_label: "Въздействие",
        project_impact: "Съкращава времето за консервация с месеци, минимизира грешките и гарантира спасяването на световното подводно наследство.",
        project_docs: "📄 Документация", project_site: "🌐 Виж сайта",
        project_details_title: "Научноизследователски проект",
        back_to_project: "← Назад към проекта",
        project_doc_p1: "Нашето проучване започна с голямо вълнение и посещение в археологическия музей. В началото, вдъхновени от техниката, за момент обмисляхме създаването на робот за разкопки, но бързо разбрахме, че истинските предизвикателства пред археологията са съвсем други. Този първи ден ще го запомним с екстремното време – точно тогава бяха големите наводнения в Царево. Пътищата бяха блокирани, валеше, но ние бяхме там, решени да открием значима кауза.",
        project_doc_p2: "Второто ни посещение в музея съвпадна с юбилея „50 години от откриването на златните накити на жрицата Лесескепра“ в Бургас. Символично – пак валеше. На събитието имахме честта да разговаряме с директора на „Исторически музей община Поморие“. Като отбор от Бургас – град на морето – веднага почувствахме, че нашият проект трябва да е свързан с морската археология. Тя е част от нашия регион и ни се стори много по-интересна и значима. Разговорите ни насочиха към критичен момент: намирането на предмета е само началото, а истинската битка за неговото опазване започва след изваждането му от солената вода.",
        project_doc_p3: "Следващата ни стъпка беше среща с експертите от Центъра за подводна археология (ЦПА) в Созопол. Те ни изнесоха лекция за водещата роля на България в тази област и ни обясниха, че макар да разполагат с отлична техника за откриване на артефакти, процесът по тяхната консервация е изключително труден, бавен и се извършва изцяло ръчно.",
        project_doc_p4: "Преди да стигнем до финалното решение, преминахме през етап, в който обмисляхме създаването на защитен хидрогел. Бързо обаче си признахме, че химията не е нашата сила и трябва да се върнем към това, в което сме най-добри – инженерството, електрониката и програмирането.",
        project_doc_p5: "Всичко си дойде на мястото след онлайн среща с професионален консерватор. Тя ни разкри шокиращи детайли: артефактите от морето се разрушават за часове, ако не се обезсолят правилно. Разбрахме, че в момента консерваторите пътуват стотици километри (например от София до Созопол), само за да проверяват солеността на водата на ръка. Процесът на обезсоляване (дезалинация) е изцяло ръчен, бавен и изисква експерти да пътуват стотици километри за едно просто измерване. Разбрахме, че консерваторите нямат нужда някой да ги замества, а имат нужда от технология, която да работи за тях. Така се роди ASOA – не като нов контейнер, а като интелигентна електронна система за управление, която превръща всеки обикновен съд в автономна станция за консервация.",
        project_doc_h1: "Проблеми, които разрешава",
        project_doc_p6: "Когато един артефакт е престоял векове на дъното на морето, той е буквално „напит“ със сол до молекулярно ниво. Проблемът започва в момента, в който го извадим. Ако просто го оставим да изсъхне, солта вътре в порите му се превръща в кристали. Тези кристали се разширяват с такава сила, че буквално „взривяват“ предмета отвътре навън. За да го спасим, трябва да извлечем солта (процес, наречен дезалинация), но тук идва тънкият момент.",
        project_doc_p7: "Традиционно това се прави „на око“ или с ръчни замервания веднъж на две седмици. Ако консерваторът изпусне момента, в който водата се е наситила със сол, процесът спира, солта остава заклещена вътре и предметът започва да се разпада за часове. С ASOA решаваме точно това системата следи процеса всяка секунда и ни казва точно кога е достигнато „платото“.",
        project_doc_p8: "Освен техническия риск, има и чист логистичен абсурд. В момента един консерватор трябва да пътува стотици километри, само за да потопи един уред във ваната и да види едно число. Това е огромно разхищение на време. С нашето решение експертът вижда всичко в реално време на телефона си. А вместо да сменяме водата по график примерно на 14 дни ние я сменяме само когато е нужно. Ако артефактът е „пуснал“ солта си на третия ден, системата го засича, сменя водата автоматично и спестява 11 дни чакане. Така съкращаваме консервацията с месеци.",
        project_doc_h2: "Пътят на иновацията: Как сглобихме ASOA",
        project_doc_p9: "След като изяснихме концепцията, се заловихме за работа. Първата стъпка беше закупуването на сензора за електропроводимост (EC). Тук се сблъскахме с първия сериозен инженерен проблем – калибрацията. В кода бяхме заложили стандартните 25°C като референтна стойност, но реалната температура на разтвора беше различна и това постоянно „местеше“ резултатите ни. Разбрахме, че без да знаем точната температура във всяка секунда, измерванията ни са невалидни. Затова интегрирахме и температурния сензор, който да подава данни за автоматична корекция. Самият EC сензор, който избрахме, работи на 5V и е цифров, но най-важното е, че е с К = 10 което означава че специализиран за много солена вода и използва променлив ток (AC) за измерването. Това е критично, защото при постоянен ток йоните в солената вода се „залепват“ по сондите (поляризация), което бързо води до грешни данни и корозия. Променливият ток ни позволява да мерим чисто, точно и дългосрочно. След като подготвихме електронните компоненти, преминахме към изграждането на физическия макет. За осигуряване на научна точност, системата преобразува първичните данни от сензора (микросименс на сантиметър - µS/cm) в приложни величини. Докато мерната единица TDS (mg/L или ppm) е подходяща за фини примеси в питейна вода, за нуждите на морската археология използваме PPT (Parts Per Thousand). Тъй като морската соленост е висока (около 35 PPT), тази единица ни позволява да проследим прецизно „голямата картина“ на обезсоляването в грамове сол на литър вода (g/L). Чрез вграден софтуерен алгоритъм, електрониката автоматично превръща електропроводимостта в PPT стойности, като същевременно прилага температурна компенсация. Избрахме готов аквариум с размери 30х30х30 см, за да гарантираме пълна херметичност. За стабилност проектирахме специална ъглова поставка, която държи целия електронен блок над водата. За да тестваме системата, трябваше да пресъздадем солеността на Черно море. Смесихме 100 грама нейодирана хималайска сол в 5 литра вода. За да сме сигурни в точността на нашия EC сензор, направихме контролно замерване с рефрактометър, който потвърди концентрация от 20 промила (PPT). Още при проектирането на системата за ниво на водата, ние предвидяхме специфичен физичен проблем. Използвахме Lidar сензор, работещ с инфрачервена светлина, но знаехме, че този лъч се пречупва или абсорбира от водната повърхност и не се отразява правилно обратно. За да заобиколим това ограничение, приложихме инженерно решение: поставихме във водата лека топка (поплавък). Лидарът мери дистанцията до горната повърхност на топката, която следва прецизно нивото на течността, осигурявайки ни стабилни данни без грешки от пречупване. Друга важна иновация, която внедрихме, са въртящите се спирали. При добавяне на прясна вода от чешмата към гъстия солен разтвор, смесването не става мигновено поради разликата в плътността. Спиралите осигуряват хоμοгенност на разтвора, което е критично за точността на сензорите и за равномерното обезсоляване на самия артефакт. По време на първите ни реални изпитания се сблъскахме и с други предизвикателства. Направихме тестов артефакт от дърво, изхвърлено от морето, но той не потъваше. Оставихме го да се кисне цяла нощ в соления разтвор, за да се напоят порите му, но плаваемостта му остана висока – ценен урок за това колко специфични са материалите в морската археология. Важен етап от нашето развитие беше приятелското регионално състезание. Там бяхме подготвили макета с по-малко количество вода, за да е по-лесен за пренасяне. В тези условия успяхме да демонстрираме работата на системата при по-ниска концентрация – 5 промила. Това беше отлично доказателство, че електрониката ни е достатъчно чувствителна да засича и следи процеса дори в неговия финален етап, когато по-голямата част от солта вече е извлечена от артефакта.",
        project_doc_h3: "Хардуерна част",
        project_doc_p10: "Централният мозък на системата е микроконтролерът ESP8266, избран заради своята изчислителна мощ и вградена Wi-Fi свързаност. За постигане на максимална точност в измерванията на солеността, интегрирахме специализиран сензор за електропроводимост (EC) с константа К=10, който е проектиран за работа в силно солени среди. Критично инженерно решение тук е използването на променлив ток (AC) при измерването, което предотвратява поляризацията на йоните и корозията на сондите – често срещан проблем при стандартните сензори с постоянен ток. Тъй като електропроводимостта на водата силно се влияе от топлината, системата включва и прецизен температурен сензор, който подава данни за автоматична софтуерна компенсация на резултатите спрямо референтните 25°C. Следенето на нивото на течността се осъществява чрез Лидар (Lidar) сензор. Поради физичното ограничение на инфрачервения лъч, който се пречупва или абсорбира от водната повърхност, приложихме иновативен подход с използването на лек физически поплавък. Една част от информация се визуализира локално върху LCD дисплей, монтиран на електронния блок.",
        project_doc_h4: "Софтуерна част",
        project_doc_p11: "Софтуерното решение на ASOA 2.0 е проектирано като комплексна IoT платформа, която превръща суровите данни от сензорите в полезна и предсказателна информация за консерваторите. Системата се състои от уеб-базирано контролно табло (Dashboard), което осигурява пълен контрол върху процеса на обезсоляване в реално време.",
        project_doc_p12: "В основата на комуникацията стои протоколът MQTT, който позволява мигновена двупосочна връзка между хардуера (ESP8266) и софтуерния интерфейс. Чрез него системата не само получава данни за солеността и температурата, но и позволява на експертите да изпращат команди обратно към устройството – например за ръчно активиране на водните помпи или въртящите се спирали. Една от най-критичните функции на софтуера е алгоритъмът за засичане на „плато“ (Plateau Detection). Системата анализира динамиката на извличане на солта и автоматично идентифицира момента, в който концентрацията в разтвора спира да се покачва. Това е ключов индикатор, че водата е наситена и процесът на дезалинация е спрял. В този момент софтуерът може автономно да вземе решение за смяна на водата, оптимизирайки времето за консервация. За нуждите на научната отчетност, системата е интегрирана с облачна база данни (Supabase). Всеки артефакт се регистрира в цифров архив, където се съхранява пълната му история – от началната соленост при изваждането от морето до финалните стойности на пречистване. Софтуерът предлага и предиктивен анализ, който на базата на събраните данни прогнозира колко време ще отнеме пълното обезсоляване на конкретния предмет. Потребителският интерфейс е изграден с фокус върху функционалността и визуализацията. Чрез интерактивни графики (Chart.js) консерваторите могат да проследят целия процес на дезалинация визуално, което помага за бързото откриване на аномалии.",
        docs_label: "Документи", docs_title: "Архив на отбора",
        docs_desc: "Цялата ни работа на едно място открита и достъпна.",
        doc1: "Златните правила на Механо", doc2: "Инструкции на робота",
        doc3: "Инженерна тетрадка", doc4: "3D модели",
        doc_open: "Отвори", docs_cta: "📁 Отвори Google Drive →",
        team_label: "Отбор", mentors_label: "Ментори", players_label: "Играчи", team_title: "Хората зад Механо",
        team_desc: "Девет уникални умове. Една обща мисия.",
        mentor: "Ментор", role_mentor: "Ментор", role_programmer: "Програмист",
        role_tech: "Техник", role_builder: "Конструктор", role_3d: "3D моделиране", role_research: "Проучване",
        partner_label: "Партньор", partner_title: "Заедно правим бъдещето",
        partner_desc: "Отборът Power Vortex е от Шумен – град с богата история. Благодарим на нашия официален партньор за подкрепата, ресурсите и доверието. Вашият принос превръща мечтите ни в реалност.",
        location_label: "Място", location_title: "Където се случва магията",
        location_desc: "Тук се събираме, проектираме и програмираме нашия робот.",
        location_school: "Професионална гимназия по механоелектроника и електроника",
        location_school_desc: "Нашата база училищната STEM лаборатория, където се ражда всеки прототип и идея.",
        location_map_btn: "📍 Виж на картата",
        contact_label: "Контакт", contact_title: "Свържи се с нас",
        contact_desc: "Имаш въпрос, идея или искаш да си партньор? Пиши ни.",
        contact_email_label: "Имейл", contact_school_label: "Училище", contact_location_label: "Локация",
        contact_school_name: "ПГМЕΕ Бургас", contact_location_city: "Бургас, България",
        location_address: "ул. Стефан Стамболов 67, Бургас",
        value_teamwork: "Работа в екип", value_inclusion: "Приобщаване", value_impact: "Въздействие",
        footer_text: "© 2025 Механо. Всички права запазени.",
        gr_label: "Златните правила",
        gr_title: "Златните правила на Механо",
        gr_desc: "Нашата инженерна философия, кодекс за състезания и командния дух дистилирани в 30 правила, живяни на терена и в лабораторията.",
        gr_count: "30 Правила",
        gr_rule_num: "ПРАВИЛО",
        back_to_docs: "← Назад към документите",
        gr_rule_1: "Роботът винаги има строго фиксирана изходна позиция. Той трябва да сключва точен ъгъл с конкретно квадратче от базата, за да се гарантира правилната траектория.",
        gr_rule_2: "Никога не стартираμε робота под наклон. Стабилната повърхност в момента на старта е критична за работата на сензорите.",
        gr_rule_3: "Инженерна здравина: Всяка конструкция трябва да бъде максимално здрава. Не допускаме превъртане на зъбни колела, хлабави части или необичайни шумове – звукът на робота е индикатор за неговото здраве.",
        gr_rule_4: "Дизайнът на робота трябва да бъде плътен и специално оптимизиран за конкретните предизвикателства на текущото състезание.",
        gr_rule_5: "Хардуерът и софтуерът не са отделни части – те трябва винаги да си помагат и да работят в пълен синхрон.",
        gr_rule_6: "Експериментален подход: Всяка идея, колкото и нестандартна да е, трябва да бъде тествана на практика. Опитът е най-добрият учител.",
        gr_rule_7: "Ако нещо се обърка или мисията не бъде изпълнена – виновен е винаги „роботът“. Ние стоим един зад друг и не търсим вина в членовете на екипа!",
        gr_rule_8: "„Окото на страничния наблюдател“: Когато двама души работят по един механизъм дълго време, те спират да виждат грешките си. Трети човек винаги проверява сглобката или кода с „пресни очи“.",
        gr_rule_9: "Преди всяко състезателно пускане гумите се почистват. Прахът е единствената причина роботът да „излъже“ жироскопа при завой.",
        gr_rule_10: "След всяко прибиране в базата се проверява дали черните и сините щифтове са влезли докрай. Вибрациите на робота често ги разхлабват.",
        gr_rule_11: "Бърза смяна, спокоен ум (тунинг като за Шумахер): Смените се тренират „на сухо“, докато не станат автоматични движения. На масата не мислиш „как да сложа това“, просто действаш.",
        gr_rule_12: "Винаги гледаме какво правят другите, за да станем по-добри, но уважаваме труда им и търсим нашето собствено уникално решение.",
        gr_rule_13: "Когато някой каже „СТОП, има проблем“, целият отбор спира и слуша. Малките грешки, забелязани навреме, спасяват големи съστεзания.",
        gr_rule_14: "Когато е възможно, разпределяме тежестта на приставките симетрично. Робот, който натежава на една страна, винаги започва да „дрифти“.",
        gr_rule_15: "Роботът се строи така, че да можеш да смениш батерията или да включиш кабела за зареждане, без да го разглобяваш наполовина.",
        gr_rule_16: "Всеки блок или ред код трябва да има обяснение. След седмица няма да помниш защо си сложил точно този завой от 42 градуса.",
        gr_rule_17: "„Ако има проблеми, значи сме на правилния път“: Проблемите не са пречки, а стъпала. Всеки решен проблем прави робота по-умен, а нас – по-добри инженери.",
        gr_rule_18: "„Най-доброто решение е най-простото“: Ако една приставка е твърде сложна и често се чупи, значи трябва да я опростим. Сложността е враг на надеждността.",
        gr_rule_19: "Около компютъра с кода не се пият сокове и не се държат мазни банички. Един разлят сок може да сложи край на сезона по-бързо от всяка софтуерна грешка.",
        gr_rule_20: "„Роботът е член на семейството“: Обръщаμε се към него по име (или поне с уважение). Когато се грижиш за техниката, тя ти се отплаща с точност на полето.",
        gr_rule_21: "„Смехът е най-краткото разстояние между две идеи“: Когато зациклим на проблем, спираме и се шегуваме. Най-гениалните ни решения са родени именно между две шеги.",
        gr_rule_22: "„Законът за десетата от милиметъра“: Ако правилата казват, че роботът трябва да е в базата, използваме всеки милиметър до самата линия. Да си на косъм от фаул е изкуство, което печели ценно място.",
        gr_rule_23: "„Законът на Току-що тръгналия“: Машината винаги работи перфектно, когато никой не гледа. Щом дойде съдия или ментор – решава да си вземе почивка. Тестваме „под прикритие“.",
        gr_rule_24: "„Ако работи – не го пипай!“: Ако системата е заковала перфектния резултат 5 минути преди старта – забрави за „още една малка настройка“. Ръцете в джобовете!",
        gr_rule_25: "„Разпръснати като LEGO, сглобени като скалπέл“: Редът на бюрото е мит – творим сред планини от кабели и тухлички. Най-добрите ни иновации се раждат именно в този творчески безпорядък.",
        gr_rule_26: "Ако имаш само едно от нещо, то ще се счупи. Ако имаш пет, никога няма да ти потрябват. Винаги носи резервен мотор, кабел и батерия.",
        gr_rule_27: "„Ефектът на тениската на МЕХАНО“: Когато облечеш отборната тениска, спираш да си просто ученик и ставаш част от легенда. Отговорността е към тези преди теб и към тези след теб.",
        gr_rule_28: "Не четем правилата само за да разберем какво е позволено, а за да открием какво не е забранено. Ако не е изрично забранено, това е нашата тайна вратичка. Наричаμε го „оптимизация на регламента“.",
        gr_rule_29: "„Законът на чистата следа“: Когато видим други да пресичат линията на позволеното, не се ядосваме – амбицираме се. Честността винаги пробива, защото журито търσι характер.",
        gr_rule_30: "„След състезанието – пак ядем“: Независимо от резултата, отборът отива да празнува. Победите се споделят, но приятелството е това, което остава.",
        name_boyana: "Бояна Георгиева", name_nikola: "Никола Чанев", name_djefer: "Джефер Ходжов",
        name_boris: "Борис Царев", name_deyvid: "Дейвид Желязков", name_danail: "Данаил Хитров",
        name_ivan: "Иван Пашов", name_dilyan: "Дилян Йорданов", name_kristian: "Кристиян Петков",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Изпълни в GitHub →",
        code_snippet: `<span class="cm"># ⚙️ МЕХАНО v2.0 Секретен алгоритъм (не показвай на съдиите)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">надежда</span><span class="op">,</span> <span class="var">воля</span><span class="op">,</span> <span class="var">храна</span>

<span class="cls">РОБОТ</span>         <span class="op">=</span> <span class="str">"Робо"</span>   <span class="cm"># най-умният робот в Бургас</span>
<span class="cls">ХРАНА_ИЗЯДЕНА</span> <span class="op">=</span> <span class="num">47</span>            <span class="cm"># точно колкото commits</span>
<span class="cls">ВЕРОЯТНОСТ_ПОБЕДА</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># останалото е за всеки случай</span>
<span class="cls">МЕНТОР_СПИ</span>    <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># винаги True след 22:00</span>

<span class="kw">def</span> <span class="fn">зареди_робота</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>(<span class="str">"Екипът не може без храна 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Робо-9000 се събужда..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> <span class="str">"🤖 Готов за битка"</span>

<span class="kw">def</span> <span class="fn">изпълни_мисия</span>(<span class="var">мисия</span><span class="op">,</span> <span class="var">опити</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">опити</span>):
        <span class="kw">try</span>:
            <span class="var">робот</span>.<span class="fn">направи_нещо_умно</span>(<span class="var">мисия</span>)
            <span class="fn">print</span>(<span class="str">f"Мисия {мисия} успех! 🎉"</span>)
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoPадна</span>:
            <span class="fn">print</span>(<span class="str">"Не видяха... надявам се 🙈"</span>)

<span class="kw">def</span> <span class="fn">спечели_турнира</span>():
    <span class="fn">зареди_робота</span>()
    <span class="var">мисии</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">мисия</span> <span class="kw">in</span> <span class="var">мисии</span>:
        <span class="fn">изпълни_мисия</span>(<span class="var">мисия</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">ВЕРОЯТНОСТ_ПОБЕДА</span>:
        <span class="kw">return</span> <span class="str">"🏆 Трофей получен. Поръчваме храна."</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"😤"</span>

<span class="fn">print</span>(<span class="fn">спечели_турнира</span>())`,
    },
    
    en: {
        robot_instr_title: "Robot Instructions",

        robot_instr_desc: "Detailed PDF instructions for building our robot and attachments.",

        instr_robot: "Base Robot",

        instr_run: "Run",

        expert_name: "Dr. Ian MacLeod",
        expert_title: "World-renowned conservation expert · Western Australian Museum",
        quote_1: "\"So I think it's a brilliant concept.\"",
        quote_2: "\"You've done what took me decades to do — explaining my job in two minutes.\"",
        quote_3: "\"14 year old children in Bulgaria have solved this problem, what's the matter with you.\"",
        project_model_hint: "Drag · Rotate · Zoom",
        site_logo: "Mehano",
        nav_home: "Home",
        nav_about: "About", nav_code: "Code", nav_project: "Project",
        nav_docs: "Documents", nav_team: "Team", nav_location: "Location", nav_contact: "Contact",
        nav_models: "3D Models",
        nav_more: "More",
        hero_badge: "✨ FLL Team 2025-26",
        hero_sub: "A young FIRST LEGO League team of engineers, thinkers and dreamers. We build robots, solve problems and leave our mark.",
        hero_btn1: "📄 Documents", hero_btn2: "💻 Code",
        stat_members: "Members", stat_seasons: "Seasons", stat_dedication: "Dedication", stat_ideas: "Ideas",
        scroll: "Scroll", hero_loading: "Loading 3D model...",
        models_title: "3D Robot Archive", models_desc: "Select a model from the list to explore our robot's development.",
        models_viewer_hint: "Use your mouse or finger to rotate and zoom the model.",
        models_loading: "LOADING...", models_main: "Main Robot", models_run: "Mission: Run",
        models_run_desc: "Specialized configuration for mission {run}. Optimized for speed and precision.",
        brief_models_desc: "Explore our robotic designs in a detailed 3D format. See every part up close.",
        btn_reset: "RESET", btn_auto_rotate: "AUTO-ROTATE",
        about_label: "About us", about_title: "Who we are",
        about_desc: "A team of nine young people united by a passion for engineering and innovation.",
        gallery_label: "Gallery", gallery_title: "Our Moments",
        gallery_desc: "Snapshots from our journey in the world of robotics and innovation.",
        gallery_moment: "Team moment",
        about_robot_title: "Robot Design",
        about_robot_desc: "We design, build and program LEGO® robots optimized for precision and speed.",
        about_presentation: "Presentation", about_folder: "Folder",
        about_project_title: "Innovation Project",
        about_project_desc: "We solve real problems with creative engineering ideas inspired by the season's theme.",
        about_video: "Video",
        about_values_title: "Core Values",
        about_values_desc: "Respect, openness, impact, inclusion, teamwork and fun our DNA.",
        code_label: "Code", code_title: "Our Winning Code",
        code_desc: "Clean Python for SPIKE Prime. Open-source, modular, optimized.",
        project_label: "Project", project_title: "Our Innovation Project",
        project_desc: "A solution that makes the world around us a better place.",
        project_name: "Automated Artifact Desalination System",
        project_problem_label: "Problem",
        project_problem: "Traditional desalination of marine artifacts is a slow, entirely manual and inaccurate process requiring conservators to travel hundreds of kilometers for routine measurements.",
        project_solution_label: "Solution",
        project_solution: "ASOA 2.0 automates monitoring via an IoT platform and scientific algorithm, allowing experts to track the process in real time remotely.",
        project_impact_label: "Impact",
        project_impact: "ASOA 2.0 reduces conservation time by months, minimizes errors and logistics costs, ensuring the preservation of underwater cultural heritage.",
        project_docs: "📄 Documentation", project_site: "🌐 Visit Site",
        gr_rule_num: "RULE",
        project_details_title: "Research Project Documentation",
        back_to_project: "← Back to Project",
        project_doc_p1: "Our research began with great excitement and a visit to the archaeological museum. Initially inspired by the technology, we briefly considered creating a digging robot, but soon realized that the real challenges in archaeology are quite different. We will remember this first day for the extreme weather – that's when the big floods in Tsarevo happened. Roads were blocked, it was raining, but we were there, determined to find a significant cause.",
        project_doc_p2: "Our second visit to the museum coincided with the 50th anniversary of the discovery of the golden jewelry of the priestess Leseskepra in Burgas. Symbolically, it was raining again. At the event, we had the honor of speaking with the director of the Historical Museum of Pomorie Municipality. As a team from Burgas – a city on the sea – we immediately felt that our project should be related to marine archaeology. It is part of our region and seemed much more interesting and significant to us. Our conversations pointed to a critical moment: finding the object is only the beginning, and the real battle for its preservation starts after it is removed from the salty water.",
        project_doc_p3: "Our next step was a meeting with experts from the Center for Underwater Archaeology (CUA) in Sozopol. They gave us a lecture on Bulgaria's leading role in this field and explained that although they have excellent technology for finding artifacts, the process of their conservation is extremely difficult, slow, and performed entirely manually.",
        project_doc_p4: "Before reaching the final solution, we went through a stage where we considered creating a protective hydrogel. However, we quickly admitted that chemistry is not our strength and we should return to what we are best at – engineering, electronics, and programming.",
        project_doc_p5: "Everything fell into place after an online meeting with a professional conservator. She revealed shocking details: artifacts from the sea are destroyed in hours if not desalted correctly. We realized that currently, conservators travel hundreds of kilometers (for example, from Sofia to Sozopol) just to check the salinity of the water by hand. The desalination process is entirely manual, slow, and requires experts to travel hundreds of kilometers for a simple measurement. We realized that conservators don't need someone to replace them, but they need technology that works for them. Thus, ASOA was born – not as a new container, but as an intelligent electronic management system that turns any ordinary vessel into an autonomous conservation station.",
        project_doc_h1: "Problems it solves",
        project_doc_p6: "When an artifact has spent centuries at the bottom of the sea, it is literally \"soaked\" with salt at the molecular level. The problem starts the moment we take it out. If we just let it dry, the salt inside its pores turns into crystals. These crystals expand with such force that they literally \"explode\" the object from the inside out. To save it, we must extract the salt (a process called desalination), but here comes the tricky part.",
        project_doc_p7: "Traditionally, this is done \"by eye\" or with manual measurements once every two weeks. If the conservator misses the moment when the water is saturated with salt, the process stops, the salt remains trapped inside, and the object starts to decay within hours. With ASOA, we solve exactly that – the system monitors the process every second and tells us exactly when the \"plateau\" is reached.",
        project_doc_p8: "Besides the technical risk, there is a pure logistical absurdity. Currently, a conservator must travel hundreds of kilometers just to dip a device into the tub and see a number. This is a huge waste of time. With our solution, the expert sees everything in real time on their phone. And instead of changing the water on a schedule – say every 14 days – we only change it when needed. If the artifact has \"released\" its salt on the third day, the system detects it, changes the water automatically, and saves 11 days of waiting. Thus, we shorten conservation by months.",
        project_doc_h2: "The Innovation Path: How we built ASOA",
        project_doc_p9: "After clarifying the concept, we got to work. The first step was purchasing the electrical conductivity (EC) sensor. Here we faced the first serious engineering problem – calibration. In the code, we had set the standard 25°C as the reference value, but the real temperature of the solution was different, and this constantly \"shifted\" our results. We realized that without knowing the exact temperature every second, our measurements were invalid. Therefore, we integrated the temperature sensor to provide data for automatic correction. The EC sensor we chose works at 5V and is digital, but most importantly, it has K = 10, which means it is specialized for very salty water and uses alternating current (AC) for measurement. This is critical because with direct current, ions in the salty water \"stick\" to the probes (polarization), which quickly leads to wrong data and corrosion. Alternating current allows us to measure cleanly, accurately, and long-term. After preparing the electronic components, we moved to building the physical model. To ensure scientific accuracy, the system converts the raw data from the sensor (microsiemens per centimeter - µS/cm) into applied units. While the TDS unit (mg/L or ppm) is suitable for fine impurities in drinking water, for marine archaeology needs we use PPT (Parts Per Thousand). Since marine salinity is high (about 35 PPT), this unit allows us to precisely track the \"big picture\" of desalination in grams of salt per liter of water (g/L). Through a built-in software algorithm, the electronics automatically convert conductivity into PPT values while applying temperature compensation. We chose a ready-made aquarium with dimensions 30x30x30 cm to guarantee full airtightness. For stability, we designed a special corner stand that holds the entire electronic block above the water. To test the system, we had to recreate the salinity of the Black Sea. We mixed 100 grams of non-iodized Himalayan salt in 5 liters of water. To be sure of the accuracy of our EC sensor, we made a control measurement with a refractometer, which confirmed a concentration of 20 PPT. During the design of the water level system, we anticipated a specific physical problem. We used a Lidar sensor working with infrared light, but we knew this beam refracts or is absorbed by the water surface and does not reflect correctly back. To bypass this limitation, we applied an engineering solution: we placed a light ball (float) in the water. The Lidar measures the distance to the upper surface of the ball, which precisely follows the liquid level, providing us with stable data without refraction errors. Another important innovation we implemented are the rotating spirals. When adding fresh tap water to the thick salty solution, mixing is not instantaneous due to the density difference. The spirals ensure homogeneity of the solution, which is critical for sensor accuracy and for uniform desalination of the artifact itself. During our first real tests, we faced other challenges. We made a test artifact from wood thrown from the sea, but it wouldn't sink. We left it to soak overnight in the salty solution to soak its pores, but its buoyancy remained high – a valuable lesson on how specific materials are in marine archaeology. An important stage of our development was the friendly regional competition. There we had prepared the model with a smaller amount of water to be easier to carry. In these conditions, we successfully demonstrated the system's operation at a lower concentration – 5 PPT. This was excellent proof that our electronics are sensitive enough to detect and monitor the process even in its final stage when most of the salt has already been extracted from the artifact.",
        project_doc_h3: "Hardware Section",
        project_doc_p10: "The central brain of the system is the ESP8266 microcontroller, chosen for its computing power and built-in Wi-Fi connectivity. To achieve maximum accuracy in salinity measurements, we integrated a specialized electrical conductivity (EC) sensor with constant K=10, which is designed for operation in highly salty environments. A critical engineering decision here is the use of alternating current (AC) during measurement, which prevents ion polarization and probe corrosion – a common problem with standard DC sensors. Since water conductivity is strongly influenced by heat, the system also includes a precision temperature sensor that provides data for automatic software compensation of results relative to the reference 25°C. Monitoring the liquid level is carried out via a Lidar sensor. Due to the physical limitation of the infrared beam, which refracts or is absorbed by the water surface, we applied an innovative approach using a light physical float. Part of the information is visualized locally on an LCD display mounted on the electronic block.",
        project_doc_h4: "Software Section",
        project_doc_p11: "The ASOA 2.0 software solution is designed as a complex IoT (Internet of Things) platform that converts raw sensor data into useful and predictive information for conservators. The system consists of a web-based Dashboard that provides full control over the desalination process in real time.",
        project_doc_p12: "At the core of communication is the MQTT protocol, which allows instant two-way connection between the hardware (ESP8266) and the software interface. Through it, the system not only receives data on salinity and temperature but also allows experts to send commands back to the device – for example, to manually activate water pumps or rotating spirals. One of the most critical functions of the software is the Plateau Detection algorithm. The system analyzes the salt extraction dynamics and automatically identifies the moment when the concentration in the solution stops rising. This is a key indicator that the water is saturated and the desalination process has stopped. At this moment, the software can autonomously decide to change the water, optimizing conservation time. For scientific reporting needs, the system is integrated with a cloud database (Supabase). Each artifact is registered in a digital archive where its full history is stored – from initial salinity when removed from the sea to final purification values. The software also offers predictive analysis which, based on the collected data, forecasts how long full desalination of a specific object will take. The user interface is built with a focus on functionality and visualization. Through interactive graphs (Chart.js), conservators can track the entire desalination process visually, which helps in quickly detecting anomalies.",
        docs_label: "Documents", docs_title: "Team Archive",
        docs_desc: "All our work in one place open and accessible.",
        doc1: "Mehano Golden Rules", doc2: "Robot Instructions",
        doc3: "Engineering Notebook", doc4: "3D Models",
        doc_open: "Open", docs_cta: "📁 Open Google Drive →",
        team_label: "Team", mentors_label: "Mentors", players_label: "Players", team_title: "The People Behind Mehano",
        team_desc: "Nine unique minds. One shared mission.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programmer",
        role_tech: "Technician", role_builder: "Builder", role_3d: "3D Modeling", role_research: "Research",
        partner_label: "Partner", partner_title: "Building the Future Together",
        partner_desc: "Team Power Vortex is from Shumen a city with a rich history. We thank our official partner for their support, resources and trust. Your contribution turns our dreams into reality.",
        location_label: "Location", location_title: "Where the Magic Happens",
        location_desc: "Here we meet, design and program our robot.",
        location_school: "Professional High School of Mechatronics and Electronics",
        location_school_desc: "Our base the school STEM lab where every prototype, line of code and new idea is born.",
        location_map_btn: "📍 View on Map",
        contact_label: "Contact", contact_title: "Get in Touch",
        contact_desc: "Have a question, idea or want to be a partner? Write to us.",
        contact_email_label: "Email", contact_school_label: "School", contact_location_label: "Location",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgaria",
        location_address: "67 Stefan Stambolov St, Burgas",
        value_teamwork: "Teamwork", value_inclusion: "Inclusion", value_impact: "Impact",
        footer_text: "© 2025 Mehano. All rights reserved.",
        gr_label: "Golden Rules",
        gr_title: "Mehano Golden Rules",
        gr_desc: "Our engineering philosophy, competition code, and team spirit distilled into 30 rules, lived on the field and in the lab.",
        gr_count: "30 Rules",
        back_to_docs: "← Back to Documents",
        gr_rule_1: "The robot always has a strictly fixed starting position. It must form an exact angle with a specific square of the base to ensure the correct trajectory.",
        gr_rule_2: "We never start the robot on a slope. A stable surface at the moment of start is critical for the sensors' operation.",
        gr_rule_3: "Engineering strength: Every construction must be as strong as possible. We do not allow spinning gears, loose parts, or unusual noises – the sound of the robot is an indicator of its health.",
        gr_rule_4: "The robot's design must be dense and specifically optimized for the specific challenges of the current competition.",
        gr_rule_5: "Hardware and software are not separate parts – they must always help each other and work in full sync.",
        gr_rule_6: "Experimental approach: Every idea, no matter how unconventional, must be tested in practice. Experience is the best teacher.",
        gr_rule_7: "If something goes wrong or a mission is not completed – it is always the 'robot\'s' fault. We stand behind each other and do not look for blame in team members!",
        gr_rule_8: "“The eye of the bystander”: When two people work on one mechanism for a long time, they stop seeing their mistakes. MEHANO rule: “You look at it”. A third person always checks the assembly or the code with “fresh eyes”.",
        gr_rule_9: "Before every competition run, the tires are cleaned. Dust is the only reason the robot 'lies' to the gyroscope during a turn.",
        gr_rule_10: "After every return to base, check if the black and blue pins are fully inserted. The robot's vibrations often loosen them.",
        gr_rule_11: "Fast change, calm mind (tuning like Schumacher): Changes are practiced “dry” until they become automatic movements. On the table, you don't think “how to put this”, you just act.",
        gr_rule_12: "We always look at what others are doing to become better, but we respect their work and seek our own unique solution.",
        gr_rule_13: "When someone says “STOP, there is a problem”, the whole team stops and listens. Small mistakes that someone noticed in time save big competitions.",
        gr_rule_14: "Whenever possible, distribute the weight of attachments symmetrically. A robot that is heavy on one side always starts to “drift” (turn on its own).",
        gr_rule_15: "The robot is built so that you can change the battery or plug in the charging cable without taking it halfway apart.",
        gr_rule_16: "Every block or line of code must have an explanation. In a week, you won't remember why you put exactly that 42-degree turn.",
        gr_rule_17: "“If there are problems, then we are on the right path”: Problems are not obstacles, but steps. Every solved problem makes the robot smarter and us better engineers.",
        gr_rule_18: "“The best solution is the simplest one”: If an attachment is too complex and often breaks, it means we need to simplify it. Complexity is the enemy of reliability.",
        gr_rule_19: "No juice or greasy snacks are kept near the computer with the code. A spilled juice can end the season faster than any software error.",
        gr_rule_20: "“The robot is a family member”: We address it by name (or at least with respect). When you take care of the equipment, it rewards you with accuracy on the field.",
        gr_rule_21: "“Laughter is the shortest distance between two ideas”: When we get stuck on a problem, we stop and joke. Our most genius solutions were born exactly between two jokes.",
        gr_rule_22: "“The law of the tenth of a millimeter”: If the regulations say the robot must be in base, we use every millimeter to the line. Being a hair from a foul is an art that wins valuable space.",
        gr_rule_23: "“The law of 'Just Started'”: The machine always works perfectly when no one is watching. As soon as a judge or mentor comes – it decides to take a break. We test “undercover”.",
        gr_rule_24: "“If it works – don't touch it!”: If the system has nailed the perfect result 5 minutes before the start – forget about “small adjustments”. Hands in pockets, not on the machine.",
        gr_rule_25: "“Scattered like LEGO, assembled like a scalpel”: Order on the desk is a myth – we create among mountains of cables and bricks. Our best innovations are born in this creative disorder.",
        gr_rule_26: "If you have only one of something, it will break. If you have five, you will never need them. Always carry a spare motor, spare cable, and spare battery.",
        gr_rule_27: "“The MEHANO shirt effect”: When you put on the team shirt, you become part of a legend. The responsibility is to those before you and to those after you.",
        gr_rule_28: "We don't read the rules just to find out what is allowed, but to discover what is not forbidden. If not explicitly forbidden, it's our secret loophole. We call it “regulation optimization”.",
        gr_rule_29: "“The law of the clean track”: When others cross the line, we don't get angry – we get ambitious. We are so precise that even following every rule, we achieve more than those who cheat.",
        gr_rule_30: "“After the competition – we eat again”: Regardless of the result, the team celebrates. Victories are shared, but friendship is what remains after the robot is boxed.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Run on GitHub →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 Secret Algorithm (don't show the judges)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hope</span><span class="op">,</span> <span class="var">will</span><span class="op">,</span> <span class="var">food_items</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># the smartest robot in Burgas</span>
<span class="cls">FOOD_EATEN</span>    <span class="op">=</span> <span class="num">47</span>            <span class="cm"># exactly as many as commits</span>
<span class="cls">WIN_PROBABILITY</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># the rest is for bad luck</span>
<span class="cls">MENTOR_SLEEPING</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># always True after 10 PM</span>

<span class="kw">def</span> <span class="fn">charge_robot</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>(<span class="str">"Team can't work without food 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Robo-9000 is waking up..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> <span class="str">"🤖 Ready for battle"</span>

<span class="kw">def</span> <span class="fn">run_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">attempts</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">attempts</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">do_something_smart</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(<span class="str">f"Mission {mission} success! 🎉"</span>)
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoFellOff</span>:
            <span class="fn">print</span>(<span class="str">"They didn't see... hopefully 🙈"</span>)

<span class="kw">def</span> <span class="fn">win_tournament</span>():
    <span class="fn">charge_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">run_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">WIN_PROBABILITY</span>:
        <span class="kw">return</span> <span class="str">"🏆 Trophy received. Ordering food."</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"😤"</span>

<span class="fn">print</span>(<span class="fn">win_tournament</span>())`,
    },
    
    el: {
        robot_instr_title: "Οδηγίες Ρομπότ",

        robot_instr_desc: "Λεπτομερείς οδηγίες PDF για την κατασκευή του ρομπότ μας.",

        instr_robot: "Βασικό Ρομπότ",
        expert_name: "Δρ Ian MacLeod",
        expert_title: "Παγκοσμίου φήμης εμπειρογνώμονας συντήρησης · Μουσείο Δυτικής Αυστραλίας",
        quote_1: "\"Πιστεύω ότι είναι μια λαμπρή ιδέα.\"",
        quote_2: "\"Κάνατε αυτό που μου πήρε δεκαετίες — να εξηγήσω τη δουλειά μου σε κάποιον σε δύο λεπτά.\"",
        quote_3: "\"Παιδιά 14 ετών στη Βουλγαρία έλυσαν αυτό το πρόβλημα, εσείς τι κάνετε;\"",
        project_model_hint: "Σύρετε · Περιστρέψτε · Ζουμ",

        instr_run: "Run",
        site_logo: "Mehano",
        nav_home: "Αρχική",
        nav_about: "Σχετικά", nav_code: "Κώδικας", nav_project: "Έργο",
        nav_docs: "Έγγραφα", nav_team: "Ομάδα", nav_location: "Τοποθεσία", nav_contact: "Επικοινωνία",
        nav_models: "3D Μοντέλα",
        nav_more: "Περισσότερα",
        hero_badge: "✨ FLL Ομάδα 2025-26",
        hero_sub: "Μια νεανική ομάδα FIRST LEGO League από μηχανικούς, στοχαστές και ονειροπόλους.",
        hero_btn1: "📄 Έγγραφα", hero_btn2: "💻 Κώδικας",
        stat_members: "Μέλη", stat_seasons: "Σεζόν", stat_dedication: "Αφοσίωση", stat_ideas: "Ιδέες",
        scroll: "Κύλιση", hero_loading: "Φόρτωση 3D μοντέλου...",
        models_title: "3D Αρχείο Ρομπότ", models_desc: "Επιλέξτε ένα μοντέλο από τη λίστα για να εξερευνήσετε την ανάπτυξη του ρομπότ μας.",
        models_viewer_hint: "Χρησιμοποιήστε το ποντίκι ή το δάχτυλό σας για να περιστρέψετε και να ζουμάρετε το μοντέλο.",
        models_loading: "ΦΟΡΤΩΣΗ...", models_main: "Κύριο Ρομπότ", models_run: "Αποστολή: Run",
        models_run_desc: "Εξειδικευμένη διαμόρφωση για την αποστολή {run}. Βελτιστοποιημένη για ταχύτητα και ακρίβεια.",
        brief_models_desc: "Εξερευνήστε τα ρομποτικά μας σχέδια σε λεπτομερή τρισδιάστατη μορφή. Δείτε κάθε μέρος από κοντά.",
        btn_reset: "ΕΠΑΝΑΦΟΡΑ", btn_auto_rotate: "ΑΥΤΟΜΑΤΗ ΠΕΡΙΣΤΡΟΦΗ",
        about_label: "Σχετικά", about_title: "Ποιοι Είμαστε",
        about_desc: "Ομάδα εννέα νέων που ενώνει το πάθος για μηχανική και καινοτομία.",
        gallery_label: "Γκαλερί", gallery_title: "Οι Στιγμές Μας",
        gallery_desc: "Στιγμιότυπα από το ταξίδι μας στον κόσμο της ρομποτικής και της καινοτομίας.",
        gallery_moment: "Στιγμή της ομάδας",
        about_robot_title: "Σχεδιασμός Ρομπότ",
        about_robot_desc: "Σχεδιάζουμε και προγραμματίζουμε ρομπότ LEGO® βελτιστοποιημένα για ακρίβεια και ταχύτητα.",
        about_presentation: "Παρουσίαση", about_folder: "Φάκελος",
        about_project_title: "Καινοτόμο Έργο",
        about_project_desc: "Λύνουμε προβλήματα του πραγματικού κόσμου με μηχανικές ιδέες εμπνευσμένες από το θέμα της σεζόν.",
        about_video: "Βίντεο",
        about_values_title: "Βασικές Αξίες",
        about_values_desc: "Σεβασμός, ανοιχτό πνεύμα, αντίκτυπος, ένταξη, ομαδική εργασία και διασκέδαση.",
        code_label: "Κώδικας", code_title: "Προγραμματισμός",
        code_desc: "Εξερευνήστε τον κώδικα Python που κινεί το ρομπότ μας.",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Εκτέλεση στο GitHub →",
        code_snippet: `<span class="cm"># ⚙️ ΜΕΧΑΝΟ v2.0 Μυστικός Αλγόριθμος (μην τον δείξετε στους κριτές)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">ελπίδα</span><span class="op">,</span> <span class="var">θέληση</span><span class="op">,</span> <span class="var">φαγητό</span>

<span class="cls">ΡΟΜΠΟΤ</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># το πιο έξυπνο ρομπότ στο Μπουργκάς</span>
<span class="cls">ΦΑΓΗΤΟ_ΚΑΤΑΝΑΛΩΘΗΚΕ</span> <span class="op">=</span> <span class="num">47</span>            <span class="cm"># ακριβώς όσο και τα commits</span>
<span class="cls">ΠΙΘΑΝΟΤΗΤΑ_ΝΙΚΗΣ</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># το υπόλοιπο είναι για την τύχη</span>
<span class="cls">ΜΕΝΤΟΡΑΣ_ΚΟΙΜΑΤΑΙ</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># πάντα True μετά τις 10 μ.μ.</span>

<span class="kw">def</span> <span class="fn">φόρτιση_ρομπότ</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>(<span class="str">"Η ομάδα δεν μπορεί να λειτουργήσει χωρίς φαγητό 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Το Robo-9000 ξυπνάει..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> <span class="str">"🤖 Έτοιμο για μάχη"</span>

<span class="kw">def</span> <span class="fn">εκτέλεση_αποστολής</span>(<span class="var">αποστολή</span><span class="op">,</span> <span class="var">προσπάθειες</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">προσπάθειες</span>):
        <span class="kw">try</span>:
            <span class="var">ρομπότ</span>.<span class="fn">κάνε_κάτι_έξυπνο</span>(<span class="var">αποστολή</span>)
            <span class="fn">print</span>(<span class="str">f"Αποστολή {αποστολή} επιτυχία! 🎉"</span>)
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoΈπεσε</span>:
            <span class="fn">print</span>(<span class="str">"Δεν είδαν... ελπίζω 🙈"</span>)

<span class="kw">def</span> <span class="fn">νίκη_σε_τουρνουά</span>():
    <span class="fn">φόρτιση_ρομπότ</span>()
    <span class="var">αποστολές</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">αποστολή</span> <span class="kw">in</span> <span class="var">αποστολές</span>:
        <span class="fn">εκτέλεση_αποστολής</span>(<span class="var">αποστολή</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">ΠΙΘΑΝΟΤΗΤΑ_ΝΙΚΗΣ</span>:
        <span class="kw">return</span> <span class="str">"🏆 Τρόπαιο ελήφθη. Παραγγέλνουμε φαγητό."</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"😤"</span>

<span class="fn">print</span>(<span class="fn">νίκη_σε_τουρνουά</span>())`,
        project_label: "Έργο", project_title: "Καινοτόμο Έργο",
        project_name: "ASOA 2.0 - Αυτοματοποιημένο Σύστημα Αφαλάτωσης",
        project_desc: "Μια λύση που κάνει τον κόσμο καλύτερο μέσω της τεχνολογίας και της παρακολούθησης IoT.",
        project_problem_label: "Πρόβλημα",
        
        project_problem: "Τα αρχαιολογικά ευρήματα από τη θάλασσα καταστρέφονται γρήγορα λόγω των κρυστάλλων αλατιού εάν δεν αφαλατωθούν σωστά.",
        project_solution_label: "Λύση",
        project_solution: "Το σύστημα ASOA 2.0 αυτοματοποιεί την παρακολούθηση μέσω πλατφόρμας IoT και επιστημονικού αλγορίθμου.",
        project_impact_label: "Αντίκτυπος",
        project_impact: "Μειώνει τον χρόνο συντήρησης κατά μήνες και διασφαλίζει τη διάσωση της παγκόσμιας υποβρύχιας κληρονομιάς.",
        project_docs: "📄 Τεκμηρίωση", project_site: "🌐 Ιστότοπος",
        project_details_title: "Ερευνητικό Έργο",
        back_to_project: "← Πίσω στο έργο",
        project_doc_h1: "Προβλήματα που επιλύει",
        project_doc_p1: "Η έρευνά μας ξεκίνησε με μεγάλο ενθουσιασμό και μια επίσκεψη στο αρχαιολογικό μουσείο...",
        project_doc_p2: "Η δεύτερη επίσκεψή μας στο μουσείο συνέπεσε με την 50ή επέτειο από την ανακάλυψη των χρυσών κοσμημάτων...",
        project_doc_p3: "Το επόμενο βήμα μας ήταν μια συνάντηση με ειδικούς από το Κέντρο Υποβρύχιας Αρχαιολογίας...",
        project_doc_p4: "Πριν καταλήξουμε στην τελική λύση, περάσαμε από ένα στάδιο όπου εξετάσαμε τη δημιουργία μιας προστατευτικής υδρογέλης...",
        project_doc_p5: "Όλα μπήκαν στη θέση τους μετά από μια διαδικτυακή συνάντηση με έναν επαγγελματία συντηρητή...",
        docs_label: "Έγγραφα", docs_title: "Αρχείο Ομάδας",
        docs_desc: "Όλη η δουλειά μας σε ένα μέρος, ανοιχτή και προσβάσιμη.",
        doc1: "Χρυσοί Κανόνες της Mehano", doc2: "Οδηγίες Ρομπότ",
        doc3: "Μηχανικό Σημειωματάριο", doc4: "3D Μοντέλα",
        doc_open: "Άνοιγμα", docs_cta: "📁 Άνοιγμα Google Drive →",
        team_label: "Ομάδα", mentors_label: "Μέντορες", players_label: "Παίκτες", team_title: "Οι Άνθρωποι πίσω από τη Mehano",
        team_desc: "Εννέα μοναδικά μυαλά. Μία κοινή αποστολή.",
        mentor: "Μέντορας", role_mentor: "Μέντορας", role_programmer: "Προγραμματιστής",
        role_tech: "Τεχνικός", role_builder: "Κατασκευαστής", role_3d: "3D Μοντελοποίηση", role_research: "Έρευνα",
        name_boyana: "Μποϊάνα Γκεοργκίεβα", name_nikola: "Νικόλα Τσάνεφ", name_djefer: "Τζεφέρ Χόντζοφ",
        name_boris: "Μπόρις Τσάρεφ", name_deyvid: "Ντέιβιντ Ζελιάσκοφ", name_danail: "Νταναήλ Χίτροφ",
        name_ivan: "Ιβάν Πάσοφ", name_dilyan: "Ντιλιάν Γιορντάνοφ", name_kristian: "Κριστιγιάν Πέτκοφ",
        partner_label: "Συνεργάτης", partner_title: "Χτίζοντας το Μέλλον Μαζί",
        partner_desc: "Η ομάδα Power Vortex είναι από το Σούμεν. Ευχαριστούμε τον επίσημο συνεργάτη μας για την υποστήριξη και την εμπιστοσύνη.",
        location_label: "Τοποθεσία", location_title: "Εκεί που συμβαίνει η μαγεία",
        location_desc: "Εδώ συναντιόμαστε, σχεδιάζουμε και προγραμματίζουμε το ρομπότ μας.",
        location_school: "Επαγγελματικό Λύκειο Μηχανοτρονικής και Ηλεκτρονικής",
        location_school_desc: "Η βάση μας είναι το σχολικό εργαστήριο STEM όπου γεννιέται κάθε πρωτότυπο και ιδέα.",
        location_map_btn: "📍 Προβολή στο Χάρτη",
        contact_label: "Επικοινωνία", contact_title: "Ελάτε σε Επαφή",
        contact_desc: "Έχετε μια ερώτηση, ιδέα ή θέλετε να γίνετε συνεργάτης; Γράψτε μας.",
        contact_email_label: "Email", contact_school_label: "Σχολείο", contact_location_label: "Τοποθεσία",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgaria",
        location_address: "67 Stefan Stambolov St, Μπουργκάς",
        value_teamwork: "Ομαδική εργασία", value_inclusion: "Ένταξη", value_impact: "Αντίκτυπος",
        footer_text: "© 2025 Mehano. Με την επιφύλαξη παντός δικαιώματος.",
        gr_label: "Χρυσοί Κανόνες",
        gr_title: "Χρυσοί Κανόνες της Mehano",
        gr_desc: "Η μηχανική μας φιλοσοφία, ο κώδικας ανταγωνισμού και το ομαδικό πνεύμα αποσταγμένα σε 30 κανόνες.",
        gr_count: "30 Κανόνες",
        gr_rule_num: "ΚΑΝΟΝΑΣ",
        back_to_docs: "← Πίσω στα Έγγραφα",
        gr_rule_1: "Το ρομπότ έχει πάντα μια αυστηρά καθορισμένη αρχική θέση. Πρέπει να σχηματίζει μια ακριβή γωνία με ένα συγκεκριμένο τετράγωνο της βάσης για να διασφαλιστεί η σωστή τροχιά.",
        gr_rule_2: "Ποτέ δεν ξεκινάμε το ρομπότ σε κλίση. Μια σταθερή επιφάνεια κατά τη στιγμή της εκκίνησης είναι κρίσιμη για τη λειτουργία των αισθητήρων.",
        gr_rule_3: "Μηχανική αντοχή: Κάθε κατασκευή πρέπει να είναι όσο το δυνατόν πιο ισχυρή. Δεν επιτρέπουμε γρανάζια που γλιστρούν, χαλαρά μέρη ή ασυνήθιστους θορύβους – ο ήχος του ρομπότ είναι ένδειξη της υγείας του.",
        gr_rule_4: "Ο σχεδιασμός του ρομπότ πρέπει να είναι συμπαγής και ειδικά βελτιστοποιημένος για τις συγκεκριμένες προκλήσεις του τρέχοντος διαγωνισμού.",
        gr_rule_5: "Το υλικό και το λογισμικό δεν είναι χωριστά μέρη – πρέπει πάντα να αλληλοβοηθούνται και να λειτουργούν σε πλήρη συγχρονισμό.",
        gr_rule_6: "Πειραματική προσέγγιση: Κάθε ιδέα, όσο αντισυμβατική κι αν είναι, πρέπει να δοκιμάζεται στην πράξη. Η εμπειρία είναι ο καλύτερος δάσκαλος.",
        gr_rule_7: "Αν κάτι πάει στραβά ή μια αποστολή δεν ολοκληρωθεί – φταίει πάντα το 'ρομπότ'. Στεκόμαστε ο ένας δίπλα στον άλλο και δεν αναζητούμε ευθύνες στα μέλη της ομάδας!",
        gr_rule_8: "«Το μάτι του παρατηρητή»: Όταν δύο άτομα εργάζονται σε έναν μηχανισμό για μεγάλο χρονικό διάστημα, σταματούν να βλέπουν τα λάθη τους. Ένα τρίτο άτομο ελέγχει πάντα τη συναρμολόγηση ή τον κώδικα με «φρέσκια ματιά».",
        gr_rule_9: "Πριν από κάθε διαγωνιστική διαδρομή, τα λάστιχα καθαρίζονται. Η σκόνη είναι ο μόνος λόγος που το ρομπότ «λέει ψέματα» στο γυροσκόπιο κατά τη διάρκεια μιας στροφής.",
        gr_rule_10: "Μετά από κάθε επιστροφή στη βάση, ελέγξτε αν οι μαύροι και μπλε πείροι έχουν εισαχθεί πλήρως. Οι κραδασμοί του ρομπότ συχνά τους χαλαρώνουν.",
        gr_rule_11: "Γρήγορη αλλαγή, ήρεμο μυαλό (ρύθμιση όπως ο Schumacher): Οι αλλαγές εξασκούνται «στεγνά» μέχρι να γίνουν αυτόματες κινήσεις. Στο τραπέζι, δεν σκέφτεσαι, απλά ενεργείς.",
        gr_rule_12: "Πάντα κοιτάμε τι κάνουν οι άλλοι για να γίνουμε καλύτεροι, αλλά σεβόμαστε τη δουλειά τους και αναζητούμε τη δική μας μοναδική λύση.",
        gr_rule_13: "Όταν κάποιος λέει «ΣΤΟΠ, υπάρχει πρόβλημα», όλη η ομάδα σταματά και ακούει. Τα μικρά λάθη που εντοπίζονται εγκαίρως σώζουν μεγάλους διαγωνισμούς.",
        gr_rule_14: "Όποτε είναι δυνατόν, κατανέμετε το βάρος των εξαρτημάτων συμμετρικά. Ένα ρομπότ που είναι βαρύ από τη μία πλευρά αρχίζει πάντα να «ξεφεύγει» από την πορεία του.",
        gr_rule_15: "Το ρομπότ είναι κατασκευασμένο έτσι ώστε να μπορείτε να αλλάξετε την μπαταρία ή να συνδέσετε το καλώδιο φόρτισης χωρίς να το αποσυναρμολογήσετε μέχρι τη μέση.",
        gr_rule_16: "Κάθε μπλοκ ή γραμμή κώδικα πρέπει να έχει μια εξήγηση. Σε μια εβδομάδα, δεν θα θυμάστε γιατί βάλατε ακριβώς εκείνη τη στροφή 42 μοιρών.",
        gr_rule_17: "«Αν υπάρχουν προβλήματα, τότε είμαστε στο σωστό δρόμο»: Τα προβλήματα δεν είναι εμπόδια, αλλά βήματα. Κάθε λυμένο πρόβλημα κάνει το ρομπότ πιο έξυπνο και εμάς καλύτερους μηχανικούς.",
        gr_rule_18: "«Η καλύτερη λύση είναι η απλούστερη»: Εάν ένα εξάρτημα είναι πολύ περίπλοκο και σπάει συχνά, σημαίνει ότι πρέπει να το απλοποιήσουμε. Η πολυπλοκότητα είναι εχθρός της αξιοπιστίας.",
        gr_rule_19: "Δεν επιτρέπονται χυμοί ή λιπαρά σνακ κοντά στον υπολογιστή με τον κώδικα. Ένας χυμένος χυμός μπορεί να τερματίσει τη σεζόν γρηγορότερα από οποιοδήποτε σφάλμα λογισμικού.",
        gr_rule_20: "«Το ρομπότ είναι μέλος της οικογένειας»: Το προσφωνούμε με το όνομά του. Όταν φροντίζεις τον εξοπλισμό, σε ανταμείβει με ακρίβεια στο γήπεδο.",
        gr_rule_21: "«Το γέλιο είναι η συντομότερη απόσταση μεταξύ δύο ιδεών»: Όταν κολλάμε σε ένα πρόβλημα, σταματάμε και αστειευόμαστε. Οι πιο ευφυείς λύσεις μας γεννήθηκαν ανάμεσα σε δύο αστεία.",
        gr_rule_22: "«Ο νόμος του δέκατου του χιλιοστού»: Εάν οι κανονισμοί λένε ότι το ρομπότ πρέπει να είναι στη βάση, χρησιμοποιούμε κάθε χιλιοστό μέχρι τη γραμμή. Είμαστε ένα βήμα από το φάουλ.",
        gr_rule_23: "«Ο νόμος του Μόλις Ξεκίνησε»: Το μηχάνημα λειτουργεί πάντα τέλεια όταν κανείς δεν κοιτάζει. Μόλις έρθει ένας κριτής ή μέντορας – αποφασίζει να κάνει ένα διάλειμμα. Δοκιμάζουμε «μυστικά».",
        gr_rule_24: "«Αν δουλεύει – μην το αγγίζετε!»: Εάν το σύστημα πέτυχε το τέλειο αποτέλεσμα 5 λεπτά πριν την έναρξη – ξεχάστε τις «μικρές ρυθμίσεις». Χέρια στις τσέπες!",
        gr_rule_25: "«Διασκορπισμένα σαν LEGO, συναρμολογημένα σαν νυστέρι»: Η τάξη στο γραφείο είναι μύθος – δημιουργούμε ανάμεσα σε βουνά από καλώδια και τούβλα. Οι καλύτερες καινοτομίες μας γεννιούνται σε αυτή τη δημιουργική αταξία.",
        gr_rule_26: "Εάν έχετε μόνο ένα από κάτι, θα σπάσει. Εάν έχετε πέντε, δεν θα τα χρειαστείτε ποτέ. Πάντα να έχετε μαζί σας εφεδρικό κινητήρα, καλώδιο και μπαταρία.",
        gr_rule_27: "«Το φαινόμενο της μπλούζας MEHANO»: Όταν φοράτε τη φανέλα της ομάδας, γίνεστε μέρος ενός θρύλου. Η ευθύνη είναι απέναντι σε αυτούς που προηγήθηκαν και σε αυτούς που έπονται.",
        gr_rule_28: "Δεν διαβάζουμε τους κανόνες μόνο για να μάθουμε τι επιτρέπεται, αλλά για να ανακαλύψουμε τι δεν απαγορεύεται. Αν δεν απαγορεύεται ρητά, είναι το μυστικό μας παραθυράκι.",
        gr_rule_29: "«Ο νόμος της καθαρής διαδρομής»: Όταν άλλοι ξεπερνούν τα όρια, εμείς δεν θυμώνουμε – γινόμαστε φιλόδοξοι. Είμαστε τόσο ακριβείς που ακόμα και ακολουθώντας κάθε κανόνα, πετυχαίνουμε περισσότερα.",
        gr_rule_30: "«Μετά τον διαγωνισμό – τρώμε ξανά»: Ανεξάρτητα από το αποτέλεσμα, η ομάδα γιορτάζει. Οι νίκες μοιράζονται, αλλά η φιλία είναι αυτό που μένει."

    },
    zh: {
        robot_instr_title: "机器人指令",

        robot_instr_desc: "用于构建我们的机器人和附件的详细 PDF 指令。",

        instr_robot: "基础机器人",
        expert_name: "伊恩·麦克劳德博士",
        expert_title: "世界著名的保护专家 · 西澳大利亚博物馆",
        quote_1: "“我认为这是一个才华横溢的概念。”",
        quote_2: "“你们做到了我花了几十年才做到的事情——在两分钟内向别人解释我的工作。”",
        quote_3: "“保加利亚的14岁孩子解决了这个问题，你们怎么了？”",
        project_model_hint: "拖动 · 旋转 · 缩放",
        instr_run: "任务",

        site_logo: "Mehano",
        nav_home: "首页",
        nav_about: "关于我们", nav_code: "代码", nav_project: "项目",
        nav_docs: "文件", nav_team: "团队", nav_location: "地点", nav_contact: "联系",
        nav_models: "3D模型",
        nav_more: "更多",
        hero_badge: "✨ FLL 团队 2025-26",
        hero_sub: "一支由工程师、思考者和梦想家组成的年轻FIRST LEGO League团队。我们建造机器人，解决问题，留下印记。",
        hero_btn1: "📄 文件", hero_btn2: "💻 代码",
        stat_members: "成员", stat_seasons: "赛季", stat_dedication: "专注度", stat_ideas: "创意",
        scroll: "滚动", hero_loading: "正在加载 3D 模型...",
        models_title: "3D 机器人档案", models_desc: "从列表中选择一个模型来探索我们机器人的开发过程。",
        models_viewer_hint: "使用鼠标或手指旋转和缩放模型。",
        models_loading: "正在加载...", models_main: "主机器人", models_run: "任务: Run",
        models_run_desc: "任务 {run} 的专用配置。针对速度和精度进行了优化。",
        brief_models_desc: "以详细的 3D 格式探索我们的机器人设计。近距离观察每个部分。",
        btn_reset: "重置", btn_auto_rotate: "自动旋转",
        about_label: "关于我们", about_title: "我们是谁",
        about_desc: "九位热爱工程和创新的年轻人组成的团队。",
        gallery_label: "图库", gallery_title: "我们的瞬间",
        gallery_desc: "我们在机器人和创新世界之旅中的快照。",
        gallery_moment: "团队瞬间",
        about_robot_title: "机器人设计",
        about_robot_desc: "我们设计、构建和编程针对精度和速度优化的LEGO®机器人。",
        about_presentation: "演示文稿", about_folder: "文件夹",
        about_project_title: "创新项目",
        about_project_desc: "我们用受赛季主题启发的创意工程想法解决现实问题。",
        about_video: "视频",
        about_values_title: "核心价值观",
        about_values_desc: "尊重、开放、影响、包容、团队合作和乐趣——我们的DNA。",
        code_label: "代码", code_title: "我们的制胜代码",
        code_desc: "适用于SPIKE Prime的纯净Python。开源、模块化、优化。",
        project_label: "项目", project_title: "我们的创新项目",
        project_desc: "让我们周围的世界变得更美好的解决方案。",
        project_name: "自动化文物脱盐系统",
        project_problem_label: "问题",
        project_problem: "传统海洋文物脱盐是一个缓慢、完全手动且不精确的过程。",
        project_solution_label: "解决方案",
        project_solution: "ASOA 2.0通过IoT平台实时自动化监控和管理。",
        project_impact_label: "影响",
        project_impact: "将保护时间缩短数月，确保水下文化遗产的保存。",
        project_docs: "📄 文档", project_site: "🌐 访问网站",
        gr_rule_num: "规则",
        project_details_title: "研究项目文档",
        back_to_project: "← 返回项目",
        project_doc_p1: "我们的研究始于巨大的兴奋和对考古博物馆的访问。最初受到技术的启发，我们曾短暂考虑过创建一个挖掘机器人，但很快意识到考古学面临的真正挑战完全不同。我们会记住这第一天，因为极端的天气——就在那时，察雷沃发生了大洪水。道路被封锁，下着雨，但我们在那里，决心找到一个重要的原因。",
        project_doc_p2: "我们对博物馆的第二次访问恰逢布尔加斯发现女祭司莱塞斯克普拉（Leseskepra）金饰50周年。象征性地，又下雨了。在活动中，我们有幸与波莫瑞市历史博物馆馆长进行了交谈。作为一个来自海边城市布尔加斯的团队，我们立即感到我们的项目应该与海洋考古学有关。它是我们地区的一部分，对我们来说似乎更有趣、更有意义。我们的对话指向了一个关键时刻：找到物体只是开始，真正的保护之战在它从咸水中取出后才开始。",
        project_doc_p3: "我们的下一步是与索佐波尔水下考古中心（CUA）的专家会面。他们为我们讲解了保加利亚在该领域的领先地位，并解释说，尽管他们拥有出色的发现文物技术，但文物的保存过程极其困难、缓慢，且完全由手工完成。",
        project_doc_p4: "在达成最终解决方案之前，我们经历了一个阶段，曾考虑创建一个保护性水凝胶。然而，我们很快承认化学不是我们的强项，我们应该回到我们最擅长的领域——工程、电子和编程。",
        project_doc_p5: "在与一位专业保护员进行在线会面后，一切都尘埃落定。她透露了令人震惊的细节：如果脱盐不当，来自海洋的文物会在几小时内被毁坏。我们意识到，目前保护员要行驶数百公里（例如从索非亚到索佐波尔）仅为了手工检查水的盐度。脱盐过程完全是手工的、缓慢的，并且需要专家为了一个简单的测量行驶数百公里。我们意识到保护员不需要有人取代他们，而是需要为他们工作的技术。因此，ASOA诞生了——不是作为一个新的容器，而是作为一个智能电子管理系统，将任何普通容器变成一个自主的保护站。",
        project_doc_h1: "解决的问题",
        project_doc_p6: "当一件文物在海底度过几个世纪时，它在分子水平上字面上被盐“浸透”了。问题从我们取出它的那一刻开始。如果我们只是让它变干，其孔隙内部的盐就会变成晶体。这些晶体会以巨大的力量膨胀，字面上从内到外“炸毁”物体。为了拯救它，我们必须提取盐（这个过程称为脱盐），但这里有个棘手的地方。",
        project_doc_p7: "传统上，这是通过“肉眼”观察或每两周进行一次手动测量来完成的。如果保护员错过了水被盐饱和的时刻，过程就会停止，盐会留在内部，物体在几小时内就会开始衰败。通过ASOA，我们精确地解决了这个问题——系统每秒监控一次过程，并准确告诉我们何时达到“平台期”。",
        project_doc_p8: "除了技术风险外，还存在纯粹的物流荒谬。目前，一名保护员必须行驶数百公里，仅为了将一个设备浸入浴缸并查看一个数字。这是巨大的时间浪费。通过我们的解决方案，专家可以在手机上实时看到一切。而且，我们不再按计划（例如每14天）换水，而是仅在需要时换水。如果文物在第三天“释放”了盐分，系统就会检测到并自动换水，节省了11天的等待时间。因此，我们将保护时间缩短了数月。",
        project_doc_h2: "创新之路：我们如何构建 ASOA",
        project_doc_p9: "在明确了概念后，我们开始工作。第一步是购买电导率（EC）传感器。在这里，我们面临了第一个严重的工程问题——校准。在代码中，我们将标准25°C设置为参考值，但溶液的真实温度不同，这不断“偏移”我们的结果。我们意识到，如果不知道每秒的精确温度，我们的测量就是无效的。因此，我们集成了温度传感器以提供自动校正的数据。我们选择的EC传感器工作电压为5V且是数字式的，但最重要的是，它的K = 10，这意味着它是专门为极咸的水设计的，并使用交流电（AC）进行测量。这至关重要，因为使用直流电时，咸水中的离子会“粘”在探头上（极化），这会迅速导致错误数据和腐蚀。交流电允许我们进行清洁、准确和长期的测量。在准备好电子组件后，我们开始构建物理模型。为了确保科学准确性，系统将来自传感器的原始数据（微西门子每厘米 - µS/cm）转换为应用单位。虽然TDS单位（mg/L或ppm）适用于饮用水中的细微杂质，但对于海洋考古需求，我们使用PPT（千分比）。由于海洋盐度很高（约35 PPT），这个单位允许我们精确跟踪以每升水含盐克数（g/L）计的脱盐“大图景”。通过内置的软件算法，电子设备在应用温度补偿的同时自动将电导率转换为PPT值。我们选择了一个尺寸为30x30x30厘米的现成鱼缸，以保证完全的气密性。为了稳定性，我们设计了一个特殊的护角架，将整个电子块固定在水面上方。为了测试系统，我们必须重现黑海的盐度。我们在5升水中混合了100克无碘喜马拉雅盐。为了确保EC传感器的准确性，我们使用折射计进行了对照测量，确认浓度为20 PPT。在设计水位系统期间，我们预见了一个特定的物理问题。我们使用了工作在红外光下的Lidar传感器，但我们知道这条光束会被水面折射或吸收，无法正确反射回来。为了绕过这个限制，我们应用了一个工程解决方案：我们在水中放置了一个轻质球（浮标）。Lidar测量到球上表面的距离，该表面精确跟随液位，为我们提供没有折射误差的稳定数据。我们实施的另一项重要创新是旋转螺旋。当向浓咸溶液中添加新鲜自来水时，由于密度差异，混合不是瞬时的。螺旋确保了溶液的均匀性，这对于传感器准确性和文物的均匀脱盐至关重要。在我们的第一次真实测试中，我们面临了其他挑战。我们用从海上捡来的木头做了一个测试文物，但它不会下沉。我们让它在盐溶液中浸泡一夜以浸透孔隙，但它的浮力仍然很高——这是一个关于海洋考古材料特殊性的宝贵教训。我们发展的一个重要阶段是友好的区域竞赛。在那里，我们准备了水量较少的模型，以便于携带。在这些条件下，我们成功演示了系统在较低浓度（5 PPT）下的运行。这充分证明了我们的电子设备足够灵敏，即使在脱盐过程的最终阶段（大部分盐已从文物中提取出来）也能检测和监控过程。",
        project_doc_h3: "硬件部分",
        project_doc_p10: "系统的核心大脑是ESP8266微控制器，选择它是因其计算能力和内置Wi-Fi连接。为了在盐度测量中获得最大精度，我们集成了一个K=10常数的专门电导率（EC）传感器，它是为在高盐环境中运行而设计的。这里一个关键的工程决策是在测量过程中使用交流电（AC），这可以防止离子极化和探头腐蚀——这是标准直流传感器常见的问题。由于水的电导率受热影响很大，系统还包括一个精密温度传感器，提供相对于参考25°C的自动软件结果补偿数据。液位监测通过Lidar传感器进行。由于红外光束会被水面折射或吸收的物理限制，我们采用了一种创新的方法，使用轻质物理浮标。部分信息在安装在电子块上的LCD显示屏上本地可视化。",
        project_doc_h4: "软件部分",
        project_doc_p11: "ASOA 2.0软件解决方案被设计为一个复杂的IoT（物联网）平台，将原始传感器数据转换为对保护员有用且具有预测性的信息。该系统由一个基于Web的仪表板（Dashboard）组成，提供对脱盐过程的实时全面控制。",
        project_doc_p12: "通信的核心是MQTT协议，它允许硬件（ESP8266）和软件界面之间进行即时双向连接。通过它，系统不仅接收盐度和温度数据，还允许专家向设备发送指令——例如，手动激活水泵或旋转螺旋。软件最关键的功能之一是平台期检测（Plateau Detection）算法。系统分析盐提取动态，并自动识别溶液浓度停止上升的时刻。这是一个关键指标，表明水已饱和且脱盐过程已停止。此时，软件可以自主决定换水，优化保护时间。为了科学报告的需要，系统集成了云数据库（Supabase）。每件文物都在数字档案中注册，存储其完整历史——从从海中取出时的初始盐度到最终的净化值。软件还提供预测分析，根据收集的数据预测特定物体完成完全脱盐所需的时间。用户界面构建时注重功能性和可视化。通过交互式图表（Chart.js），保护员可以直观地跟踪整个脱盐过程，这有助于快速检测异常情况。",
        docs_label: "文件", docs_title: "团队档案",
        docs_desc: "我们所有的工作都在一个地方——开放且可访问。",
        doc1: "Mehano黄金规则", doc2: "机器人说明",
        doc3: "工程笔记本", doc4: "3D模型",
        doc_open: "打开", docs_cta: "📁 打开Google Drive →",
        team_label: "团队", mentors_label: "导师", players_label: "队员", team_title: "Mehano背后的人",
        team_desc: "九个独特的头脑。一个共同的使命。",
        mentor: "导师", role_mentor: "导师", role_programmer: "程序员",
        role_tech: "技术员", role_builder: "建造者", role_3d: "3D建模", role_research: "研究",
        partner_label: "合作伙伴", partner_title: "共同建设未来",
        partner_desc: "感谢我们的官方合作伙伴提供的支持、资源和信任。你们的贡献将我们的梦想变为现实。",
        location_label: "地点", location_title: "奇迹发生的地方",
        location_desc: "我们在这里相聚、设计并编程我们的机器人。",
        location_school: "机电与电子专业高中",
        location_school_desc: "我们的基地——学校STEM实验室，每个原型和想法都在这里诞生。",
        location_map_btn: "📍 在地图上查看",
        contact_label: "联系", contact_title: "联系我们",
        contact_desc: "有问题、想法或想成为合作伙伴？写信给我们。",
        contact_email_label: "电子邮件", contact_school_label: "学校", contact_location_label: "位置",
        contact_school_name: "PGMEE 布尔加斯", contact_location_city: "布尔加斯，保加利亚",
        location_address: "Stefan Stambolov 街 67 号，布尔加斯",
        value_teamwork: "团队合作", value_inclusion: "包容性", value_impact: "影响",
        footer_text: "© 2025 Mehano。保留所有权利。",
        gr_label: "黄金规则",
        gr_title: "Mehano 黄金规则",
        gr_desc: "我们的工程哲学、比赛准则和团队精神——浓缩为 30 条规则，在赛场和实验室中践行。",
        gr_count: "30 条规则",
        back_to_docs: "← 返回文档",
        gr_rule_1: "机器人始终具有严格固定的起始位置。它必须与基地的特定方格形成精确的角度，以确保正确的轨迹。",
        gr_rule_2: "我们从不在坡面上启动机器人。启动瞬间稳定的表面对传感器的运行至关重要。",
        gr_rule_3: "工程强度：每个结构必须尽可能牢固。我们不允许齿轮空转、零件松动或异常噪音——机器人的声音是其健康状况的指标。",
        gr_rule_4: "机器人的设计必须紧凑，并针对当前比赛的具体挑战进行专门优化。",
        gr_rule_5: "硬件和软件不是独立的部分——它们必须始终相互配合并保持完全同步。",
        gr_rule_6: "实验方法：每一个想法，无论多么标新立异，都必须在实践中进行测试。经验是最好的老师。",
        gr_rule_7: "如果出现问题或任务未完成——那永远是‘机器人’的错。我们彼此支持，不指责团队成员！",
        gr_rule_8: "“旁观者之眼”：当两个人在一个机构上工作很长时间时，他们会看不见自己的错误。第三个人总是用“新眼光”检查组装或代码。",
        gr_rule_9: "在每次比赛运行前，都要清洁轮胎。灰尘是机器人转向时对陀螺仪“撒谎”的唯一原因。",
        gr_rule_10: "每次返回基地后，检查黑色和蓝色销钉是否完全插入。机器人的振动经常会使它们松动。",
        gr_rule_11: "快速更换，冷静心态（像舒马赫一样调校）：更换动作要经过“干练”，直到变成自动反应。在操作台前，你不必思考，只需行动。",
        gr_rule_12: "我们总是观察别人的做法以变得更好，但我们尊重他们的工作并寻求我们自己独特的解决方案。",
        gr_rule_13: "当有人说“停，有问题”时，整个团队都会停下来倾听。及时发现的小错误能拯救重大比赛。",
        gr_rule_14: "只要可能，就要对称地分配附件的重量。一侧过重的机器人总是会偏离预定路线。",
        gr_rule_15: "机器人的结构设计应能让你在不拆卸一半的情况下更换电池或插入充电线。",
        gr_rule_16: "每一块或每一行代码都必须有解释。一周后，你就不会记得为什么要设置那个精确的42度转弯了。",
        gr_rule_17: "“如果有问题，说明我们走在正确的道路上”：问题不是障碍，而是阶梯。每一个解决的问题都让机器人更聪明，让我们成为更好的工程师。",
        gr_rule_18: "“最好的解决方案就是最简单的”：如果一个附件太复杂且经常损坏，就意味着我们需要简化。复杂性是可靠性的敌人。",
        gr_rule_19: "代码电脑旁严禁放置果汁或油腻零食。洒掉的果汁可能比任何软件错误都能更快结束赛季。",
        gr_rule_20: "“机器人是家的一员”：我们直呼其名。当你爱护设备时，它会在赛场上以精确度回报你。",
        gr_rule_21: "“笑声是两个想法之间最短的距离”：当我们卡在某个问题上时，我们会停下来开个玩笑。我们天才般的解决方案往往诞生于笑声之间。",
        gr_rule_22: "“十分之一毫米法则”：如果规定说机器人必须在基地内，我们会利用到线旁的每一毫米。在违规边缘试探是一门赢得宝贵空间的艺术。",
        gr_rule_23: "“刚开始法则”：当没人在看时，机器总是完美运行。一旦裁判或导师走过来——它就决定休息一下。我们进行“秘密”测试。",
        gr_rule_24: "“如果它能运行——就别碰它！”：如果系统在开赛前5分钟达到了完美结果——忘掉那“最后一点小调整”。手放进口袋，别碰机器。",
        gr_rule_25: "“散落如乐高，组装如手术刀”：桌面的整洁只是个神话——我们在堆积如山的电缆和积木中创作。最好的创新往往诞生在混乱之中。",
        gr_rule_26: "如果你某样东西只有一个，它就会坏。如果你有五个，你永远用不到它们。始终携带备用电机、线缆和电池。",
        gr_rule_27: "“MEHANO 队服效应”：当你穿上队服，你就不再只是个学生，而成了传奇的一部分。责任是对前辈的传承和对后辈的榜样。",
        gr_rule_28: "我们读规则不只是为了看什么是允许的，而是为了发现什么是不被禁止的。如果没有明确禁止，那就是我们的秘密漏洞。我们称之为“规则优化”。",
        gr_rule_29: "“洁净轨道法则”：当别人越界时，我们不生气——我们变得更有野心。即使遵循每一项规则，我们也能比作弊者取得更高的成绩。",
        gr_rule_30: "“比赛结束后——我们再吃一顿”：无论结果如何，团队都会庆祝。胜利是共享的，但友谊是永恒的。",
        name_boyana: "博亚娜·格奥尔基耶娃", name_nikola: "尼古拉·查内夫", name_djefer: "杰费尔·霍乔夫",
        name_boris: "鲍里斯·察列夫", name_deyvid: "戴维·热利亚兹科夫", name_danail: "丹尼尔·希特罗夫",
        name_ivan: "伊万·帕肖夫", name_dilyan: "迪利安·约尔丹诺夫", name_kristian: "克里斯蒂扬·佩特科夫",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ 在 GitHub 上运行 →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 秘密算法（不要给评委看）</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hope</span><span class="op">,</span> <span class="var">will</span><span class="op">,</span> <span class="var">food_items</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># 布尔加斯最聪明的机器人</span>
<span class="cls">FOOD_EATEN</span>    <span class="op">=</span> <span class="num">47</span>            <span class="cm"># 和提交次数一样多</span>
<span class="cls">WIN_PROBABILITY</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># 剩下的是为了运气</span>
<span class="cls">MENTOR_SLEEPING</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># 晚上10点后总是True</span>

<span class="kw">def</span> <span class="fn">charge_robot</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>("没有食物团队无法工作 🍔")
    <span class="fn">print</span>("Robo-9000 正在苏醒...")
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> "🤖 准备战斗"

<span class="kw">def</span> <span class="fn">run_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">attempts</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">attempts</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">do_something_smart</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(f"任务 {mission} 成功！🎉")
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoFellOff</span>:
            <span class="fn">print</span>("他们没看到... 希望如此 🙈")

<span class="kw">def</span> <span class="fn">win_tournament</span>():
    <span class="fn">charge_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">run_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">WIN_PROBABILITY</span>:
        <span class="kw">return</span> "🏆 获得奖杯。订餐吧。"
    <span class="kw">else</span>:
        <span class="kw">return</span> "😤"

<span class="fn">print</span>(<span class="fn">win_tournament</span>())`,
    },
    
    pt: {
        robot_instr_title: "Instruções do Robô",

        robot_instr_desc: "Instruções PDF λεπτομερείς για την κατασκευή του ρομπότ μας.",

        instr_robot: "Robô Base",

        instr_run: "Missão",
        expert_name: "Dr. Ian MacLeod",
        expert_title: "Especialista em conservação de renome mundial · Museu da Austrália Ocidental",
        quote_1: "\"Acho que é um conceito brilhante.\"",
        quote_2: "\"Vocês fizeram o que levei décadas para conseguir — explicar meu trabalho a alguém em dois minutos.\"",
        quote_3: "\"Crianças de 14 anos na Bulgária resolveram este problema, o que há de errado convosco?\"",
        project_model_hint: "Arrastar · Girar · Zoom",

        gr_rule_num: "REGRA",
        site_logo: "Mehano",
        nav_home: "Início",
        nav_about: "Sobre", nav_code: "Código", nav_project: "Projeto",
        nav_docs: "Documentos", nav_team: "Equipa", nav_location: "Local", nav_contact: "Contato",
        nav_models: "Modelos 3D",
        nav_more: "Mais",
        hero_badge: "✨ Equipa FLL 2025-26",
        hero_sub: "Uma jovem equipa da FIRST LEGO League de engenheiros, pensadores e sonhadores. Construímos robôs, resolvemos problemas e deixamos uma marca.",
        hero_btn1: "📄 Documentos", hero_btn2: "💻 Código",
        stat_members: "Membros", stat_seasons: "Temporadas", stat_dedication: "Dedicação", stat_ideas: "Ideias",
        scroll: "Rolar", hero_loading: "A carregar modelo 3D...",
        models_title: "Arquivo 3D do Robô", models_desc: "Selecione um modelo da lista para explorar o desenvolvimento do nosso robô.",
        models_viewer_hint: "Use o mouse ou o dedo para girar e dar zoom no modelo.",
        models_loading: "A CARREGAR...", models_main: "Robô Principal", models_run: "Missão: Run",
        models_run_desc: "Configuração especializada para a missão {run}. Otimizada para velocidade e precisão.",
        brief_models_desc: "Explore nossos designs robóticos em um formato 3D detalhado. Veja cada parte de perto.",
        btn_reset: "RESETAR", btn_auto_rotate: "AUTO-ROTAÇÃO",
        about_label: "Sobre Nós", about_title: "Quem Somos",
        about_desc: "Uma equipa de nove jovens unidos pela paixão pela engenharia e inovação.",
        gallery_label: "Galeria", gallery_title: "Nossos Momentos",
        gallery_desc: "Instantâneos da nossa jornada no mundo da robótica e inovação.",
        gallery_moment: "Momento da equipe",
        about_robot_title: "Design do Robô",
        about_robot_desc: "Projetamos, construímos e programamos robôs LEGO® otimizados para precisão e velocidade.",
        about_presentation: "Apresentação", about_folder: "Pasta",
        about_project_title: "Projeto Inovador",
        about_project_desc: "Resolvemos problemas reais com ideias criativas inspiradas no tema da temporada.",
        about_video: "Vídeo",
        about_values_title: "Valores Fundamentais",
        about_values_desc: "Respeito, abertura, impacto, inclusão, trabalho em equipa e diversão o nosso ADN.",
        code_label: "Código", code_title: "O Nosso Código Vencedor",
        code_desc: "Python limpo para SPIKE Prime. Open-source, modular, otimizado.",
        project_label: "Projeto", project_title: "O Nosso Projeto Inovador",
        project_desc: "Uma solução que torna o mundo ao nosso redor um lugar melhor.",
        project_name: "Sistema Automatizado de Dessalinização de Artefactos",
        project_problem_label: "Problema",
        project_problem: "A dessalinização tradicional de artefactos marinhos é um processo lento, manual e impreciso.",
        project_solution_label: "Solução",
        project_solution: "O ASOA 2.0 automatiza a monitorização através de uma plataforma IoT em tempo real.",
        project_impact_label: "Impacto",
        project_impact: "Reduz o tempo de conservação em meses e garante a preservação do património cultural subaquático.",
        project_docs: "📄 Documentação", project_site: "🌐 Ver Site",
        project_details_title: "Documentação do Projeto de Investigação",
        back_to_project: "← Voltar ao Projeto",
        project_doc_p1: "A nossa investigação começou com grande entusiasmo e uma visita ao museu arqueológico. Inicialmente inspirados pela tecnologia, considerámos brevemente a criação de um robô de escavação, mas rapidamente percebemos que os verdadeiros desafios da arqueologia são muito diferentes. Recordaremos este primeiro dia pelas condições meteorológicas extremas – foi quando ocorreram as grandes cheias em Tsarevo. As estradas estavam bloqueadas, chovia, mas estávamos lá, determinados a encontrar uma causa significativa.",
        project_doc_p2: "A nossa segunda visita ao museu coincidiu com o 50º aniversário da descoberta das joias de ouro da sacerdotisa Leseskepra em Burgas. Simbolicamente, chovia novamente. No evento, tivémos a honra de falar com o diretor do Museu Histórico do Município de Pomorie. Como uma equipa de Burgas – uma cidade à beira-mar – sentimos imediatamente que o nosso projeto deveria estar relacionado com a arqueologia marinha. Faz parte da nossa região e pareceu-nos muito mais interessante e significativo. As nossas conversas apontaram para um momento crítico: encontrar o objeto é apenas o começo, e a verdadeira batalha pela sua preservação começa depois de ser retirado da água salgada.",
        project_doc_p3: "O nosso passo seguinte foi uma reunião com especialistas do Centro de Arqueologia Subaquática (CUA) em Sozopol. Deram-nos uma palestra sobre o papel de liderança da Bulgária nesta área e explicaram que, embora disponham de excelente tecnologia para encontrar artefactos, o processo da sua conservação é extremamente difícil, lento e realizado inteiramente de forma manual.",
        project_doc_p4: "Antes de chegarmos à solução final, passámos por uma fase em que considerámos a criação de um hidrogel protetor. No entanto, admitimos rapidamente que a química não é o nosso forte e que deveríamos voltar ao que fazemos melhor – engenharia, eletrónica e programação.",
        project_doc_p5: "Tudo se encaixou após uma reunião online com uma conservadora profissional. Ela revelou detalhes chocantes: artefactos do mar são destruídos em horas se não forem dessalinizados corretamente. Percebemos que, atualmente, os conservadores viajam centenas de quilómetros (por exemplo, de Sófia a Sozopol) apenas para verificar a salinidade da água à mão. O processo de dessalinização é inteiramente manual, lento e exige que os especialistas viajem centenas de quilómetros para uma simples medição. Percebemos que os conservadores não precisam de alguém que os substitua, mas precisam de tecnologia que trabalhe para eles. Assim nasceu o ASOA – não como um novo contentor, mas como um sistema de gestão eletrónica inteligente que transforma qualquer recipiente comum numa estação de conservação autónoma.",
        project_doc_h1: "Problemas que resolve",
        project_doc_p6: "Quando um artefacto passou séculos no fundo do mar, está literalmente \"embebido\" em sal ao nível molecular. O problema começa no momento em que o retiramos. Se simplesmente o deixarmos secar, o sal dentro dos seus poros transforma-se em cristais. Estes cristais expandem-se com tal força que literalmente \"explodem\" o objeto de dentro para fora. Para o salvar, temos de extrair o sal (um processo chamado dessalinização), mas aqui vem a parte complicada.",
        project_doc_p7: "Tradicionalmente, isto é feito \"a olho\" ou com medições manuais uma vez a cada duas semanas. Se o conservador perder o momento em que a água está saturada de sal, o processo pára, o sal permanece preso no interior e o objeto começa a degradar-se em poucas horas. Com o ASOA, resolvemos exatamente isso – o sistema monitoriza o processo a cada segundo e diz-nos exatamente quando o \"plateau\" é atingido.",
        project_doc_p8: "Além do risco técnico, existe um puro absurdo logístico. Atualmente, um conservador tem de viajar centenas de quilómetros apenas para mergulhar um dispositivo na banheira e ver um número. Isto é um enorme desperdício de tempo. Com a nossa solução, o especialista vê tudo em tempo real no seu telemóvel. E em vez de mudar a água de acordo com um calendário – digamos a cada 14 dias – mudamos apenas quando necessário. Se o artefacto \"libertou\" o seu sal no terceiro dia, o sistema deteta-o, muda a água automaticamente e poupa 11 dias de espera. Assim, encurtamos a conservação em meses.",
        project_doc_h2: "O Caminho da Inovação: Como construímos o ASOA",
        project_doc_p9: "Depois de clarificarmos o conceito, pusemo-nos ao trabalho. O primeiro passo foi a compra do sensor de condutividade elétrica (EC). Aqui enfrentámos o primeiro problema sério de engenharia – a calibração. No código, tínhamos definido os 25°C padrão como valor de referência, mas a temperatura real da solução era diferente, e isto \"deslocava\" constantemente os nossos resultados. Percebemos que, sem saber a temperatura exata a cada segundo, as nossas medições eram inválidas. Por isso, integrámos o sensor de temperatura para fornecer dados para correção automática. O sensor EC que escolhemos funciona a 5V e é digital, mas o mais importante é que tem K = 10, o que significa que é especializado para água muito salgada e utiliza corrente alternada (AC) para a medição. Isto é crítico porque, com corrente contínua, os iões na água salgada \"colam-se\" às sondas (polarização), o que leva rapidamente a dados errados e corrosão. A corrente alternada permite-nos medir de forma limpa, precisa e a longo prazo. Depois de prepararmos os componentes eletrónicos, passámos à construção do modelo físico. Para garantir a precisão científica, o sistema converte os dados brutos do sensor (microsiemens por centímetro - µS/cm) em unidades aplicadas. Enquanto a unidade TDS (mg/L ou ppm) é adequada para impurezas finas na água potável, para as necessidades da arqueologia marinha utilizamos PPT (Partes Por Mil). Dado que a salinidade marinha é elevada (cerca de 35 PPT), esta unidade permite-nos acompanhar com precisão o \"quadro geral\" da dessalinização em gramas de sal por litro de água (g/L). Através de um algoritmo de software integrado, a eletrónica converte automaticamente a condutividade em valores PPT, aplicando simultaneamente compensação de temperatura. Escolhemos um aquário pronto com dimensões de 30x30x30 cm para garantir total estanqueidade. Para estabilidade, desenhámos um suporte de canto especial que mantém todo o bloco eletrónico acima da água. Para testar o sistema, tivémos de recriar a salinidade do Mar Negro. Misturámos 100 gramas de sal dos Himalaias não iodado em 5 litros de água. Para termos a certeza da precisão do nosso sensor EC, fizemos uma medição de controlo com um refratómetro, que confirmou uma concentração de 20 PPT. Durante a conceção do sistema de nível de água, antecipámos um problema físico específico. Utilizámos um sensor Lidar a funcionar com luz infravermelha, mas sabíamos que este feixe se refrata ou é absorvido pela superfície da água e não se reflete corretamente de volta. Para contornar esta limitação, aplicámos uma solução de engenharia: colocámos uma bola leve (flutuador) na água. O Lidar mede a distância até à superfície superior da bola, que segue precisamente o nível do líquido, fornecendo-nos dados estáveis sem erros de refração. Outra inovação importante que implementámos são as espirais rotativas. Ao adicionar água fresca da torneira à solução salina espessa, a mistura não é instantânea devido à diferença de densidade. As espirais garantem a homogeneidade da solução, o que é crítico para a precisão dos sensores e para a dessalinização uniforme do próprio artefacto. Durante os nossos primeiros testes reais, enfrentámos outros desafios. Fizemos um artefacto de teste a partir de madeira deitada fora pelo mar, mas este não se afundava. Deixámo-lo de molho durante a noite na solução salina para embeber os seus poros, mas a sua flutuabilidade permaneceu elevada – uma lição valiosa sobre a especificidade dos materiais na arqueologia marinha. Uma etapa importante do nosso desenvolvimento foi a competição regional amigável. Lá tínhamos preparado o modelo com uma menor quantidade de água para ser mais fácil de transportar. Nestas condições, demonstrámos com sucesso o funcionamento do sistema numa concentração mais baixa – 5 PPT. Esta foi uma prova excelente de que a nossa eletrónica é sensível o suficiente para detetar e monitorizar o processo mesmo na sua fase final, quando a maior parte do sal já foi extraída do artefacto.",
        project_doc_h3: "Secção de Hardware",
        project_doc_p10: "O cérebro central do sistema é o microcontrolador ESP8266, escolhido pelo seu poder de computação e conectividade Wi-Fi integrada. Para alcançar a máxima precisão nas medições de salinidade, integrámos um sensor de condutividade elétrica (EC) especializado com constante K=10, que foi concebido para funcionar em ambientes altamente salinos. Uma decisão crítica de engenharia aqui é a utilização de corrente alternada (AC) durante a medição, o que evita a polarização iónica e a corrosão das sondas – um problema comum com os sensores DC padrão. Dado que a condutividade da água é fortemente influenciada pelo calor, o sistema inclui também um sensor de temperatura de precisão que fornece dados para a compensação automática por software dos resultados relativamente aos 25°C de referência. A monitorização do nível de líquido é realizada através de um sensor Lidar. Devido à limitação física do feixe infravermelho, que se refrata ou é absorvido pela superfície da água, aplicámos uma abordagem inovadora utilizando um flutuador físico leve. Parte da informação é visualizada localmente num ecrã LCD montado no bloco eletrónico.",
        project_doc_h4: "Secção de Software",
        project_doc_p11: "A solução de software ASOA 2.0 foi concebida como uma plataforma IoT (Internet of Things) complexa que converte dados brutos de sensores em informações úteis e preditivas para os conservadores. O sistema consiste num Painel de Controlo (Dashboard) baseado na web que fornece controlo total sobre o processo de dessalinização em tempo real.",
        project_doc_p12: "No centro da comunicação está o protocolo MQTT, que permite uma ligação bidirecional instantânea entre o hardware (ESP8266) e o interface de software. Através dele, o sistema não só recebe dados sobre salinidade e temperatura, mas também permite que os especialistas enviem comandos de volta para o dispositivo – por exemplo, para ativar manualmente bombas de água ou espirais rotativas. Uma das funções mais críticas do software é o algoritmo de Deteção de Plateau (Plateau Detection). O sistema analisa a dinâmica de extração de sal e identifica automaticamente o momento em que a concentração na solução pára de subir. Este é um indicador chave de que a água está saturada e o processo de dessalinização parou. Neste momento, o software pode decidir autonomamente mudar a água, otimizando o tempo de conservação. Para necessidades de relatórios científicos, o sistema está integrado com uma base de dados na nuvem (Supabase). Cada artefacto é registado num arquivo digital onde é guardado o seu histórico completo – desde a salinidade inicial quando retirado do mar até aos valores finais de purificação. O software também oferece análise preditiva que, com base nos dados recolhidos, prevê quanto tempo levará a dessalinização completa de um objeto específico. O interface de utilizador foi construído com foco na funcionalidade e visualização. Através de gráficos interativos (Chart.js), os conservadores podem acompanhar visualmente todo o processo de dessalinização, o que ajuda a detetar rapidamente anomalias.",
        docs_label: "Documentos", docs_title: "Arquivo da Equipa",
        docs_desc: "Todo o nosso trabalho num só lugar aberto e acessível.",
        doc1: "Regras de Ouro da Mehano", doc2: "Instruções do Robô",
        doc3: "Caderno de Engenharia", doc4: "Modelos 3D",
        doc_open: "Abrir", docs_cta: "📁 Abrir Google Drive →",
        team_label: "Equipa", mentors_label: "Mentores", players_label: "Jogadores", team_title: "As Pessoas por Trás da Mehano",
        team_desc: "Nove mentes únicas. Uma missão comum.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programador",
        role_tech: "Técnico", role_builder: "Construtor", role_3d: "Modelação 3D", role_research: "Pesquisa",
        partner_label: "Parceiro", partner_title: "Construindo o Futuro Juntos",
        partner_desc: "Agradecemos ao nosso parceiro oficial pelo apoio, recursos e confiança. A vossa contribuição transforma os nossos sonhos em realidade.",
        location_label: "Local", location_title: "Onde Acontece a Magia",
        location_desc: "Aqui nos reunimos, projetamos e programamos o nosso robô.",
        location_school: "Escola Secundária de Mecatrónica e Eletrónica",
        location_school_desc: "A nossa base o laboratório STEM da escola, onde nasce cada protótipo e ideia.",
        location_map_btn: "📍 Ver no Mapa",
        contact_label: "Contato", contact_title: "Entre em Contacto",
        contact_desc: "Tem uma pergunta, idea ou quer ser parceiro? Escreva-nos.",
        contact_email_label: "Email", contact_school_label: "Escola", contact_location_label: "Localização",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgária",
        location_address: "Rua Stefan Stambolov 67, Burgas",
        value_teamwork: "Trabalho em equipe", value_inclusion: "Inclusão", value_impact: "Impacto",
        footer_text: "© 2025 Mehano. Todos os direitos reservados.",
        gr_label: "Regras de Ouro",
        gr_title: "Regras de Ouro da Mehano",
        gr_desc: "Nossa filosofia de engenharia, código de competição e espírito de equipe destilados em 30 regras.",
        gr_count: "30 Regras",
        back_to_docs: "← Voltar aos Documentos",
        gr_rule_1: "O robô tem sempre uma posição inicial estritamente fixa. Deve formar um ângulo exato com um quadrado específico da base para garantir a trajetória correta.",
        gr_rule_2: "Nunca iniciamos o robô numa inclinação. Uma superfície estável no momento do arranque é crítica para o funcionamento dos sensores.",
        gr_rule_3: "Resistência de engenharia: Cada construção deve ser o mais forte possível. Não permitimos engrenagens a patinar, peças soltas ou ruídos invulgares – o som do robô é um indicador da sua saúde.",
        gr_rule_4: "O design do robô deve ser denso e especificamente otimizado para os desafios específicos da competição atual.",
        gr_rule_5: "Hardware e software não são partes separadas – devem sempre ajudar-se mutuamente e trabalhar em total sincronia.",
        gr_rule_6: "Abordagem experimental: Cada ideia, por mais invulgar que seja, deve ser testada na prática. A experiência é o melhor professor.",
        gr_rule_7: "Se algo correr mal ou uma missão não for concluída – a culpa é sempre do 'robô'. Apoiamos-nos uns aos outros e não procuramos culpados nos membros da equipa!",
        gr_rule_8: "«O olho do observador»: Quando duas pessoas trabalham num mecanismo durante muito tempo, deixam de ver os seus erros. Uma terceira pessoa verifica sempre a montagem ou o código com «olhos frescos».",
        gr_rule_9: "Antes de cada corrida de competição, os pneus são limpos. O pó é a única razão pela qual o robô «mente» ao giroscópio durante uma curva.",
        gr_rule_10: "Após cada regresso à base, verifique se os pinos pretos e azuis estão totalmente inseridos. As vibrações do robô muitas vezes soltam-nos.",
        gr_rule_11: "Mudança rápida, mente calma (ajuste como Schumacher): As mudanças são praticadas «em seco» até se tornarem movimentos automáticos. Na mesa, não pensas, apenas ages.",
        gr_rule_12: "Olhamos sempre para o que os outros estão a fazer para sermos melhores, mas respeitamos o seu trabalho e procuramos a nossa própria solução única.",
        gr_rule_13: "Quando alguém diz «PARA, há um problema», toda a equipa para e ouve. Pequenos erros detetados a tempo salvam grandes competições.",
        gr_rule_14: "Sempre que possível, distribua o peso dos acessórios simetricamente. Um robô que é pesado de um lado começa sempre a «derivar» do seu caminho.",
        gr_rule_15: "O robô é construído para que se possa mudar a bateria ou ligar o cabo de carregamento sem o desmontar a meio.",
        gr_rule_16: "Cada bloco ou linha de código deve ter uma explicação. Numa semana, não te vais lembrar porque puseste exatamente aquela curva de 42 graus.",
        gr_rule_17: "«Se há problemas, então estamos no caminho certo»: Os problemas não são obstáculos, mas degraus. Cada problema resolvido torna o robô mais inteligente e nós melhores engenheiros.",
        gr_rule_18: "«A melhor solução é a mais simples»: Se um acessório é demasiado complexo e parte-se frequentemente, significa que precisamos de simplificar. A complexidade é inimiga da fiabilidade.",
        gr_rule_19: "Sumos ou lanches gordurosos não são mantidos perto do computador com o código. Um sumo entornado pode acabar com a temporada mais depressa do que qualquer erro de software.",
        gr_rule_20: "«O robô é um membro da família»: Dirigimo-nos a ele pelo nome. Quando cuidas do equipamento, ele recompensa-te com precisão no campo.",
        gr_rule_21: "«O riso é a distância mais curta entre duas ideias»: Quando ficamos presos num problema, paramos e brincamos. As nossas soluções mais geniais nasceram entre duas piadas.",
        gr_rule_22: "«A lei do décimo de milímetro»: Se o regulamento diz que o robô deve estar na base, usamos cada milímetro até à linha. Estar a um fio de uma falta é uma arte.",
        gr_rule_23: "«A lei do Acabou de Começar»: A máquina funciona sempre perfeitamente quando ninguém está a ver. Assim que um juiz ou mentor chega – ela decide fazer uma pausa. Testamos «disfarçados».",
        gr_rule_24: "«Se funciona – não lhe toques!»: Se o sistema atingiu o resultado perfeito 5 minutos antes do início – esquece os «pequenos ajustes». Mãos nos bolsos!",
        gr_rule_25: "«Espalhados como LEGO, montados como um bisturi»: A ordem na secretária é um mito – criamos entre montanhas de cabos e tijolos. As nossas melhores inovações nascem nesta desordem criativa.",
        gr_rule_26: "Se tiveres apenas um de algo, vai partir-se. Se tiveres cinco, nunca vais precisar deles. Carrega sempre um motor, cabo e bateria sobressalentes.",
        gr_rule_27: "«O efeito da t-shirt MEHANO»: Quando vestes a t-shirt da equipa, tornas-te parte de uma lenda. A responsabilidade é para com os que vieram antes e os que virão depois.",
        gr_rule_28: "Não lemos as regras apenas para saber o que é permitido, mas para descobrir o que não é proibido. Se não for explicitamente proibido, é o nosso segredo. Chamamos-lhe «otimização do regulamento».",
        gr_rule_29: "«A lei da pista limpa»: Quando outros ultrapassam os limites, não ficamos zangados – ficamos ambiciosos. Somos tão precisos que mesmo seguindo cada regra, alcançamos mais.",
        gr_rule_30: "«Depois da competição – comemos de novo»: Independentemente do resultado, a equipa celebra. As vitórias são partilhadas, mas a amizade é o que resta.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Executar no GitHub →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 Algoritmo secreto (não mostre aos juízes)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hope</span><span class="op">,</span> <span class="var">will</span><span class="op">,</span> <span class="var">food_items</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># o robô mais inteligente de Burgas</span>
<span class="cls">FOOD_EATEN</span>    <span class="op">=</span> <span class="num">47</span>            <span class="cm"># exatamente tantos como commits</span>
<span class="cls">WIN_PROBABILITY</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># o resto é por sorte</span>
<span class="cls">MENTOR_SLEEPING</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># sempre True depois das 22:00</span>

<span class="kw">def</span> <span class="fn">charge_robot</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>("A equipe não pode trabalhar sem comida 🍔")
    <span class="fn">print</span>("Robo-9000 está acordando...")
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> "🤖 Pronto para a batalha"

<span class="kw">def</span> <span class="fn">run_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">attempts</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">attempts</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">do_something_smart</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(f"Missão {mission} sucesso! 🎉")
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoFellOff</span>:
            <span class="fn">print</span>("Eles não viram... espero 🙈")

<span class="kw">def</span> <span class="fn">win_tournament</span>():
    <span class="fn">charge_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="num">,</span> <span class="num">10</span><span class="num">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">run_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">WIN_PROBABILITY</span>:
        <span class="kw">return</span> "🏆 Troféu recebido. Pedindo comida."
    <span class="kw">else</span>:
        <span class="kw">return</span> "😤"

<span class="fn">print</span>(<span class="fn">win_tournament</span>())`,

    },
    
    es: {
        robot_instr_title: "Instrucciones del Robot",

        robot_instr_desc: "Instrucciones detalladas en PDF para construir nuestro robot y accesorios.",

        instr_robot: "Robot Base",
        expert_name: "Dr. Ian MacLeod",
        expert_title: "Experto en conservación de renombre mundial · Museo de Australia Occidental",
        quote_1: "\"Creo que es un concepto brillante.\"",
        quote_2: "\"Habéis hecho lo que a mí me costó décadas — explicar mi trabajo a alguien en dos minutos.\"",
        quote_3: "\"Niños de 14 años en Bulgaria han resuelto este problema, ¿qué os pasa a vosotros?\"",
        project_model_hint: "Arrastrar · Girar · Zoom",
        instr_run: "Misión",

        gr_rule_num: "REGLA",
        site_logo: "Mehano",
        nav_home: "Inicio",
        nav_about: "Nosotros", nav_code: "Código", nav_project: "Proyecto",
        nav_docs: "Documentos", nav_team: "Equipo", nav_location: "Lugar", nav_contact: "Contacto",
        nav_models: "Modelos 3D",
        nav_more: "Más",
        hero_badge: "✨ Equipo FLL 2025-26",
        hero_sub: "Un joven equipo de la FIRST LEGO League formado por ingenieros, pensadores y soñadores. Construimos robots, resolvemos problemas y dejamos huella.",
        hero_btn1: "📄 Documentos", hero_btn2: "💻 Código",
        stat_members: "Miembros", stat_seasons: "Temporadas", stat_dedication: "Dedicación", stat_ideas: "Ideas",
        scroll: "Desplazar", hero_loading: "Cargando modelo 3D...",
        models_title: "Archivo 3D del Robot", models_desc: "Selecciona un modelo de la lista para explorar el desarrollo de nuestro robot.",
        models_viewer_hint: "Usa el ratón o el dedo para girar y ampliar el modelo.",
        models_loading: "CARGANDO...", models_main: "Robot Principal", models_run: "Misión: Run",
        models_run_desc: "Configuración especializada para la misión {run}. Optimizada para velocidad y precisión.",
        brief_models_desc: "Explore nuestros diseños robóticos en un formato 3D detalado. Vea cada parte de cerca.",
        btn_reset: "RESTABLECER", btn_auto_rotate: "AUTO-ROTACIÓN",
        about_label: "Sobre Nosotros", about_title: "Quiénes Somos",
        about_desc: "Un equipo de nueve jóvenes unidos por la pasión por la ingeniería y la innovación.",
        gallery_label: "Galería", gallery_title: "Nuestros Momentos",
        gallery_desc: "Instantáneas de nuestro viaje en el mundo de la robótica y la innovación.",
        gallery_moment: "Momento del equipo",
        about_robot_title: "Diseño del Robot",
        about_robot_desc: "Diseñamos, construimos y programamos robots LEGO® optimizados para precisión y velocidad.",
        about_presentation: "Presentación", about_folder: "Carpeta",
        about_project_title: "Proyecto Innovador",
        about_project_desc: "Resolvemos problemas reales con ideas creativas inspiradas en el tema de la temporada.",
        about_video: "Video",
        about_values_title: "Valores Fundamentales",
        about_values_desc: "Respecto, apertura, impacto, inclusión, trabajo en equipo y diversión nuestro ADN.",
        code_label: "Código", code_title: "Nuestro Código Ganador",
        code_desc: "Python limpio para SPIKE Prime. Open-source, modular, optimizado.",
        project_label: "Proyecto", project_title: "Nuestro Proyecto Innovador",
        project_desc: "Una solución que hace del mundo un lugar mejor.",
        project_name: "Sistema Automatizado de Desalinización de Artefactos",
        project_problem_label: "Problema",
        project_problem: "La desalinización tradicional de artefactos marinos es lenta, manual e imprecisa.",
        project_solution_label: "Solución",
        project_solution: "ASOA 2.0 automatiza el monitoreo a través de una plataforma IoT en tiempo real.",
        project_impact_label: "Impacto",
        project_impact: "Reduce el tiempo de conservación en meses y garantiza la preservación del patrimonio cultural subacuático.",
        project_docs: "📄 Documentación", project_site: "🌐 Ver Sitio",
        project_details_title: "Documentación del Proyecto de Investigación",
        back_to_project: "← Volver al Proyecto",
        project_doc_p1: "Nuestra investigación comenzó con gran entusiasmo y una visita al museo arqueológico. Al principio, inspirados por la tecnología, consideramos brevemente la creación de un robot de excavación, pero pronto nos dimos cuenta de que los verdaderos desafíos de la arqueología son muy diferentes. Recordaremos este primer día por el clima extremo: fue cuando ocurrieron las grandes inundaciones en Tsarevo. Las carreteras estaban bloqueadas, llovía, pero estábamos allí, decididos a encontrar una causa significativa.",
        project_doc_p2: "Nuestra segunda visita al museo coincidió con el 50º aniversario del descubrimiento de las joyas de oro de la sacerdotisa Leseskepra en Burgas. Simbólicamente, volvía a llover. En el evento, tuvimos el honor de hablar con el director del Museo Histórico del Municipio de Pomorie. Como equipo de Burgas, una ciudad junto al mar, sentimos inmediatamente que nuestro proyecto debía estar relacionado con la arqueología marina. Forma parte de nuestra región y nos pareció mucho más interesante y significativo. Nuestras conversaciones señalaron un momento crítico: encontrar el objeto es solo el comienzo, y la verdadera batalla por su preservación empieza después de sacarlo del agua salada.",
        project_doc_p3: "Nuestro siguiente paso fue una reunión con expertos del Centro de Arqueología Subacuática (CUA) en Sozopol. Nos dieron una charla sobre el papel de liderazgo de Bulgaria en este campo y nos explicaron que, aunque disponen de una tecnología excelente para encontrar artefactos, el proceso de su conservación es extremadamente difícil, lento y se realiza íntegramente de forma manual.",
        project_doc_p4: "Antes de llegar a la solución final, pasamos por una etapa en la que consideramos la creación de un hidrogel protector. Sin embargo, admitimos rápidamente que la química no es nuestro fuerte y que debíamos volver a lo que mejor se nos da: la ingeniería, la electrónica y la programación.",
        project_doc_p5: "Todo encajó tras una reunión online con una conservadora profesional. Nos reveló detalles impactantes: los artefactos del mar se destruyen en horas si no se desalan correctamente. Nos dimos cuenta de que, actualmente, los conservadores viajan cientos de kilómetros (por ejemplo, de Sofía a Sozopol) solo para comprobar la salinidad del agua a mano. El proceso de desalinización es totalmente manual, lento y requiere que los expertos viajen cientos de kilómetros para una simple medición. Comprendimos que los conservadores no necesitan a alguien que los sustituya, sino que necesitan tecnología que trabaje para ellos. Así nació ASOA, no como un nuevo contenedor, sino como un sistema de gestión electrónica inteligente que convierte cualquier recipiente común en una estación de conservación autónoma.",
        project_doc_h1: "Problemas que resuelve",
        project_doc_p6: "Cuando un artefacto ha pasado siglos en el fondo del mar, está literalmente \"empapado\" de sal a nivel molecular. El problema empieza en el momento en que lo sacamos. Si simplemente dejamos que se seque, la sal dentro de sus poros se convierte en cristales. Estos cristales se expanden con tal fuerza que literalmente \"explotan\" el objeto desde dentro hacia fuera. Para salvarlo, debemos extraer la sal (un proceso llamado desalinización), pero aquí viene la parte complicada.",
        project_doc_p7: "Tradicionalmente, esto se hace \"a ojo\" o con mediciones manuales una vez cada dos semanas. Si el conservador pierde el momento en que el agua está saturada de sal, el proceso se detiene, la sal queda atrapada en el interior y el objeto empieza a degradarse en pocas horas. Con ASOA, resolvemos exactamente eso: el sistema monitoriza el proceso cada segundo y nos dice exactamente cuándo se alcanza la \"meseta\".",
        project_doc_p8: "Además del riesgo técnico, existe un puro absurdo logístico. Actualmente, un conservador tiene que viajar cientos de kilómetros solo para sumergir un dispositivo en la bañera y ver un número. Esto es un enorme desperdicio de tiempo. Con nuestra solución, el experto ve todo en tiempo real en su teléfono. Y en lugar de cambiar el agua según un calendario (por ejemplo, cada 14 días), la cambiamos solo cuando es necesario. Si el artefacto ha \"soltado\" su sal al tercer día, el sistema lo detecta, cambia el agua automáticamente y ahorra 11 días de espera. Así, acortamos la conservación meses.",
        project_doc_h2: "El camino de la innovación: Cómo construimos ASOA",
        project_doc_p9: "Tras aclarar el concepto, nos pusimos manos a la obra. El primer paso fue la compra del sensor de conductividad eléctrica (EC). Aquí nos enfrentamos al primer problema serio de ingeniería: la calibración. En el código, habíamos establecido los 25°C estándar como valor de referencia, pero la temperatura real de la solución era diferente, y esto \"desplazaba\" constantemente nuestros resultados. Nos dimos cuenta de que, sin conocer la temperatura exacta cada segundo, nuestras mediciones no eran válidas. Por ello, integramos el sensor de temperatura para proporcionar datos para la corrección automática. El sensor EC que elegimos funciona a 5V y es digital, pero lo más importante es que tiene K = 10, lo que significa que está especializado para agua muy salada y utiliza corriente alterna (AC) para la medición. Esto es crítico porque, con corriente continua, los iones del agua salada se \"pegan\" a las sondas (polarización), lo que provoca rápidamente datos erronéos y corrosión. La corriente alterna nos permite medir de forma limpia, precisa y a largo plazo. Tras preparar los componentes electrónicos, pasamos a la construcción del modelo físico. Para garantizar la precisión científica, el sistema convierte los datos brutos del sensor (microsiemens por centímetro - µS/cm) en unidades aplicadas. Mientras que la unidad TDS (mg/L o ppm) es adecuada para impurezas finas en el agua potable, para las necesidades de la arqueología marina utilizamos PPT (Partes Por Mil). Dado que la salinidad marina es alta (unos 35 PPT), esta unidad nos permite seguir con precisión la \"visión general\" de la desalinización en gramos de sal por litro de agua (g/L). Mediante un algoritmo de software integrado, la electrónica convierte automáticamente la conductividad en valores PPT, aplicando al mismo tiempo una compensación de temperatura. Elegimos un acuario ya fabricado con dimensiones de 30x30x30 cm para garantizar la total estanqueidad. Para la estabilidad, diseñamos un soporte de esquina especial que mantiene todo el bloque electrónico por encima del agua. Para probar el sistema, tuvimos que recrear la salinidad del Mar Negro. Mezclamos 100 gramos de sal del Himalaya no yodada en 5 litros de agua. Para estar seguros de la precisión de nuestro sensor EC, hicimos una medición de control con un refractómetro, que confirmó una concentración de 20 PPT. Durante el diseño del sistema de nivel de agua, anticipamos un problema físico específico. Utilizamos un sensor Lidar que funciona con luz infrarroja, pero sabíamos que este haz se refracta o es absorbido por la superficie del agua y no se refleja correctamente hacia atrás. Para sortear esta limitación, aplicamos una solución de ingeniería: colocamos una bola ligera (flotador) en el agua. El Lidar mide la distancia a la superficie superior de la bola, que sigue con precisión el nivel del líquido, proporcionándonos datos estables sin errores de refracción. Otra innovación importante que implementamos son las espirales giratorias. Al añadir agua dulce del grifo a la solución salina espesa, la mezcla no es instantánea debido a la diferencia de densidad. Las espirales garanten la homogeneidad de la solución, lo cual es crítico para la precisión de los sensores y para la desalinización uniforme del propio artefacto. Durante nuestras primeras pruebas reales, nos enfrentamos a otros retos. Hicimos un artefacto de prueba con madera arrojada por el mar, pero no se hundía. Lo dejamos a remojo toda la noche en la solución salina para empapar sus poros, pero su flotabilidad seguía siendo alta: una valiosa lección sobre lo específicos que son los materiales en la arqueología marina. Una etapa importante de nuestro desarrollo fue la competición regional amistosa. Allí habíamos preparado el modelo con una menor cantidad de agua para que fuera más fácil de transportar. En estas condiciones, demostramos con éxito el funcionamiento del sistema a una concentración más baja: 5 PPT. Esta fue una prueba excelente de que nuestra electrónica es lo suficientemente sensible como para detectar y monitorizar el proceso incluso en su fase final, cuando la mayor parte de la sal ya ha sido extraída del artefacto.",
        project_doc_h3: "Sección de Hardware",
        project_doc_p10: "El cerebro central del sistema es el microcontrolador ESP8266, elegido por su potencia de cálculo y su conectividad Wi-Fi integrada. Para lograr la máxima precisión en las mediciones de salinidad, integramos un sensor de conductividad eléctrica (EC) especializado con constante K=10, diseñado para funcionar en entornos altamente salinos. Una decisión de ingeniería crítica aquí es el uso de corriente alterna (AC) durante la medición, lo que evita la polarización de los iones y la corrosión de las sondas, un problema común con los sensores de CC estándar. Dado que la conductividad del agua está muy influenciada por el calor, el sistema también incluye un sensor de temperatura de precisión que proporciona datos para la compensación automática por software de los resultados con respecto a los 25°C de referencia. El control del nivel de líquido se realiza mediante un sensor Lidar. Debido a la limitación física del haz infrarrojo, que se refracta o es absorbido por la superficie del agua, aplicamos un enfoque innovador utilizando un flotador físico ligero. Parte de la información se visualiza localmente en una pantalla LCD montada en el bloque electrónico.",
        project_doc_h4: "Sección de Software",
        project_doc_p11: "La solución de software ASOA 2.0 está diseñada como una compleja plataforma IoT (Internet de las cosas) que convierte los datos brutos de los sensores en información útil y predictiva para los conservadores. El sistema consta de un panel de control basado en la web (Dashboard) que proporciona un control total sobre el proceso de desalinización en tiempo real.",
        project_doc_p12: "En el núcleo de la comunicación se encuentra el protocolo MQTT, que permite una conexión bidireccional instantánea entre el hardware (ESP8266) y la interfaz de software. A través de él, el sistema no solo recibe datos sobre salinidad y temperatura, sino que también permite a los expertos enviar comandos al dispositivo, por ejemplo, para activar manualmente las bombas de agua o las espirales giratorias. Una de las funciones más críticas del software es el algoritmo de detección de meseta (Plateau Detection). El sistema analiza la dinámica de extracción de sal e identifica automáticamente el momento en que la concentración de la solución deja de aumentar. Este es un indicador clave de que el agua está saturada y el proceso de desalinización se ha detenido. En este momento, el software puede decidir de forma autónoma cambiar el agua, optimizando el tiempo de conservación. Para las necesidades de los informes científicos, el sistema está integrado con una base de datos en la nube (Supabase). Cada artefacto se registra en un archivo digital donde se almacena su historial completo, desde la salinidade inicial al extraerlo del mar hasta los valores finales de purificación. El software también ofrece un análisis predictivo que, basándose en los datos recogidos, pronostica cuánto tiempo tardará la desalinización completa de un objeto específico. La interfaz de usuario se ha creado centrándose en la funcionalidad y la visualización. Mediante gráficos interactivos (Chart.js), los conservadores pueden seguir visualmente todo el proceso de desalinización, lo que ayuda a detectar rápidamente anomalías.",
        docs_label: "Documentos", docs_title: "Archivo del Equipo",
        docs_desc: "Todo nuestro trabajo en un solo lugar abierto y accesible.",
        doc1: "Reglas de Oro de Mehano", doc2: "Instrucciones del Robot",
        doc3: "Cuaderno de Ingeniería", doc4: "Modelos 3D",
        doc_open: "Abrir", docs_cta: "📁 Abrir Google Drive →",
        team_label: "Equipo", mentors_label: "Mentores", players_label: "Jugadores", team_title: "Las Personas detrás de Mehano",
        team_desc: "Nueve mentes únicas. Una misión común.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programador",
        role_tech: "Técnico", role_builder: "Constructor", role_3d: "Modelado 3D", role_research: "Investigación",
        partner_label: "Socio", partner_title: "Construyendo el Futuro Juntos",
        partner_desc: "Agradecemos a nuestro socio oficial su apoyo, recursos y confianza. Su contribución convierte nuestros sueños en realidad.",
        location_label: "Lugar", location_title: "Donde Ocurre la Magia",
        location_desc: "Aquí nos reunimos, diseñamos y programamos nuestro robot.",
        location_school: "Instituto Profesional de Mecatrónica y Electrónica",
        location_school_desc: "Nuestra base el laboratorio STEM escolar donde nace cada prototipo e idea.",
        location_map_btn: "📍 Ver en el Mapa",
        contact_label: "Contacto", contact_title: "Ponte en Contacto",
        contact_desc: "¿Tienes una pregunta, idea o quieres ser socio? Escríbenos.",
        contact_email_label: "Email", contact_school_label: "Escuela", contact_location_label: "Ubicación",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgaria",
        location_address: "Calle Stefan Stambolov 67, Burgas",
        value_teamwork: "Trabajo en equipo", value_inclusion: "Inclusión", value_impact: "Impacto",
        footer_text: "© 2025 Mehano. Todos los derechos reservados.",
        gr_label: "Reglas de Oro",
        gr_title: "Reglas de Oro de Mehano",
        gr_desc: "Nuestra filosofía de ingeniería, código de competición y espíritu de equipo destilados en 30 reglas.",
        gr_count: "30 Reglas",
        back_to_docs: "← Volver a Documentos",
        gr_rule_1: "El robot siempre tiene una posición inicial estrictamente fija. Debe formar un ángulo exacto con un cuadrado específico de la base para garantizar la trayectoria correcta.",
        gr_rule_2: "Nunca iniciamos el robot en una pendiente. Una superficie estable en el momento del arranque es crítica para el funcionamiento de los sensores.",
        gr_rule_3: "Resistencia de ingeniería: Cada construcción debe ser lo más fuerte posible. No permitimos engranajes que patinen, piezas sueltas o ruidos inusuales: el sonido del robot es un indicador de su salud.",
        gr_rule_4: "El diseño del robot debe ser denso y específicamente optimizado para los desafíos específicos de la competencia actual.",
        gr_rule_5: "El hardware y el software no son partes separadas: siempre deben ayudarse mutuamente y trabajar en total sincronía.",
        gr_rule_6: "Enfoque experimental: cada idea, por inusual que sea, debe probarse en la práctica. La experiencia es el mejor maestro.",
        gr_rule_7: "Si algo sale mal o una misión no se completa, siempre es culpa del 'robot'. ¡Nos apoyamos unos a otros y no buscamos culpables entre los miembros del equipo!",
        gr_rule_8: "«El ojo del espectador»: cuando dos personas trabajan en un mecanismo durante mucho tiempo, dejan de ver sus errores. Una tercera persona siempre comprueba el montaje o el código con «ojos frescos».",
        gr_rule_9: "Antes de cada carrera de competición, se limpian los neumáticos. El polvo es la única razón por la que el robot «miente» al giroscopio durante un giro.",
        gr_rule_10: "Después de cada regreso a la base, verifique si los pasadores negros y azules están completamente insertados. Las vibraciones del robot a menudo los aflojan.",
        gr_rule_11: "Cambio rápido, mente tranquila (ajuste como Schumacher): los cambios se practican «en seco» hasta que se convierten en movimientos automáticos. En la mesa, no piensas, simplemente actúas.",
        gr_rule_12: "Siempre miramos lo que hacen los demás para ser mejores, pero respetamos su trabajo y buscamos nuestra propia solución única.",
        gr_rule_13: "Cuando alguien dice «¡ALTO, hay un problema!», todo el equipo se detiene y escucha. Los pequeños errores detectados a tiempo salvan grandes competiciones.",
        gr_rule_14: "Siempre que sea posible, distribuya el peso de los accesorios simétricamente. Un robot que pesa más de un lado siempre comienza a «desviarse» de su curso.",
        gr_rule_15: "El robot está construido de manera que se pueda cambiar la batería o conectar el cable de carga sin tener que desmontarlo a la mitad.",
        gr_rule_16: "Cada bloque o línea de código debe tener una explicación. En una semana, no recordarás por qué pusiste exactamente ese giro de 42 grados.",
        gr_rule_17: "«Si hay problemas, entonces estamos en el camino correcto»: los problemas no son obstáculos, sino escalones. Cada problema resuelto hace que el robot sea más inteligente y nosotros mejores ingenieros.",
        gr_rule_18: "«La mejor solución es la más simple»: si un accesorio es demasiado complejo y se rompe con frecuencia, significa que debemos simplificarlo. La complejidad es enemiga de la fiabilidad.",
        gr_rule_19: "No se guardan jugos ni snacks grasientos cerca de la computadora con el código. Un jugo derramado puede terminar la temporada más rápido que cualquier error de software.",
        gr_rule_20: "«El robot es un miembro de la familia»: nos dirigimos a él por su nombre. Cuando cuidas el equipo, te recompensa con precisión en el campo.",
        gr_rule_21: "«La risa es la distancia más corta entre dos ideas»: cuando nos quedamos atascados en un problema, nos detenemos y bromeamos. Nuestras soluciones más geniales nacieron entre dos bromas.",
        gr_rule_22: "«La ley de la décima de milímetro»: si el reglamento dice que el robot debe estar en la base, usamos cada milímetro hasta la línea. Estar a un pelo de una falta es un arte.",
        gr_rule_23: "«La ley del 'Acabo de Empezar'»: la máquina siempre funciona perfectamente cuando nadie mira. Tan pronto como llega un juez o mentor, decide tomarse un descanso. Probamos «de incógnito».",
        gr_rule_24: "«Si funciona, ¡no lo toques!»: si el sistema ha logrado el resultado perfecto 5 minutos antes del inicio, olvídate de los «pequeños ajustes». ¡Manos en los bolsillos!",
        gr_rule_25: "«Dispersos como LEGO, ensamblados como un bisturí»: el orden en el escritorio es un mito: creamos entre montañas de cables y ladrillos. Nuestras mejores innovaciones nacen en este desorden creativo.",
        gr_rule_26: "Si tienes solo uno de algo, se romperá. Si tienes cinco, nunca los necesitarás. Lleva siempre un motor, un cable y una batería de repuesto.",
        gr_rule_27: "«El efecto de la camiseta MEHANO»: cuando te pones la camiseta del equipo, te conviertes en parte de una leyenda. La responsabilidad es con los que vinieron antes y los que vendrán después.",
        gr_rule_28: "No leemos las reglas solo para saber qué está permitido, sino para descubrir qué no está prohibido. Si no está explícitamente prohibido, es nuestro secreto. Lo llamamos «optimización del reglamento».",
        gr_rule_29: "«La ley de la pista limpia»: cuando otros cruzan la línea, no nos enojamos, nos volvemos ambiciosos. Somos tan precisos que incluso siguiendo cada regla, logramos más.",
        gr_rule_30: "«Después de la competencia, volvemos a comer»: independientemente del resultado, el equipo celebra. Las victorias se comparten, pero la amistad es lo que queda.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Ejecutar en GitHub →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 Algoritmo secreto (no mostrar a los jueces)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hope</span><span class="op">,</span> <span class="var">will</span><span class="op">,</span> <span class="var">food_items</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># el robot más inteligente de Burgas</span>
<span class="cls">FOOD_EATEN</span>    <span class="op">=</span> <span class="num">47</span>            <span class="cm"># exactamente tantos como commits</span>
<span class="cls">WIN_PROBABILITY</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># el resto es por suerte</span>
<span class="cls">MENTOR_SLEEPING</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># siempre True después de las 22:00</span>

<span class="kw">def</span> <span class="fn">charge_robot</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>("El equipo no puede trabajar sin comida 🍔")
    <span class="fn">print</span>("Robo-9000 se está despertando...")
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> "🤖 Listo para la batalla"

<span class="kw">def</span> <span class="fn">run_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">attempts</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">attempts</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">do_something_smart</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(f"Misión {mission} ¡éxito! 🎉")
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoFellOff</span>:
            <span class="fn">print</span>("No vieron nada... espero 🙈")

<span class="kw">def</span> <span class="fn">win_tournament</span>():
    <span class="fn">charge_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="num">,</span> <span class="num">10</span><span class="num">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">run_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">WIN_PROBABILITY</span>:
        <span class="kw">return</span> "🏆 Trofeo recibido. Pidiendo comida."
    <span class="kw">else</span>:
        <span class="kw">return</span> "😤"

<span class="fn">print</span>(<span class="fn">win_tournament</span>())`,

    },
    

        de: {
        robot_instr_title: "Roboter-Anleitungen",
        expert_name: "Dr. Ian MacLeod",
        expert_title: "Weltbekannter Experte für Konservierung · Western Australian Museum",
        quote_1: "„Ich halte das für ein brillantes Konzept.“",
        quote_2: "„Sie haben geschafft, wofür ich Jahrzehnte gebraucht habe — jemandem meinen Job in zwei Minuten zu erklären.“",
        quote_3: "„14-jährige Kinder in Bulgarien haben dieses Problem gelöst, was ist los mit euch?“",
        project_model_hint: "Ziehen · Drehen · Zoom",
        robot_instr_desc: "Detaillierte PDF-Anleitungen zum Bau unseres Roboters und der Anbauten.",

        instr_robot: "Basis-Roboter",

        instr_run: "Mission",

        gr_rule_num: "REGEL",
        site_logo: "Mehano",
        nav_home: "Startseite",
        nav_about: "Über uns", nav_code: "Code", nav_project: "Projekt",
        nav_docs: "Dokumente", nav_team: "Team", nav_location: "Standort", nav_contact: "Kontakt",
        nav_models: "3D Modelle",
        nav_more: "Mehr",
        hero_badge: "✨ FLL Team 2025-26",
        hero_sub: "Ein junges FIRST LEGO League Team aus Ingenieuren, Denkern und Träumern. Wir bauen Roboter, lösen Probleme und hinterlassen Spuren.",
        hero_btn1: "📄 Dokumente", hero_btn2: "💻 Code",
        stat_members: "Mitglieder", stat_seasons: "Saisons", stat_dedication: "Hingabe", stat_ideas: "Ideen",
        scroll: "Scrollen", hero_loading: "3D-Modell wird geladen...",
        models_title: "3D-Roboter-Archiv", models_desc: "Wählen Sie ein Modell aus der Liste aus, um die Entwicklung unseres Roboters zu erkunden.",
        models_viewer_hint: "Verwenden Sie die Maus oder den Finger, um das Modell zu drehen und zu zoomen.",
        models_loading: "WIRD GELADEN...", models_main: "Hauptroboter", models_run: "Mission: Run",
        models_run_desc: "Spezialisierte Konfiguration für Mission {run}. Optimiert für Geschwindigkeit und Präzision.",
        brief_models_desc: "Erkunden Sie unsere Roboterdesigns in einem detaillierten 3D-Format. Sehen Sie sich jedes Teil aus der Nähe an.",
        btn_reset: "ZURÜCKSETZEN", btn_auto_rotate: "AUTO-ROTATION",
        about_label: "Über uns", about_title: "Wer wir sind",
        about_desc: "Ein Team aus neun einzigartigen Köpfen, vereint durch die Leidenschaft für Technik und Innovation.",
        gallery_label: "Galerie", gallery_title: "Unsere Momente",
        gallery_desc: "Schnappschüsse von unserer Reise in die Welt der Robotik und Innovation.",
        gallery_moment: "Teammoment",
        about_robot_title: "Roboter-Design",
        about_robot_desc: "Wir entwerfen, bauen und programmieren LEGO®-Roboter, die auf Präzision und Geschwindigkeit optimiert sind.",
        about_presentation: "Präsentation", about_folder: "Ordner",
        about_project_title: "Innovationsprojekt",
        about_project_desc: "Wir lösen reale Probleme mit kreativen technischen Ideen, inspiriert vom Thema der Saison.",
        about_video: "Video",
        about_values_title: "Grundwerte",
        about_values_desc: "Respekt, Offenheit, Wirkung, Inklusion, Teamarbeit und Spaß unsere DNA.",
        code_label: "Code", code_title: "Unser Siegercode",
        code_desc: "Sauberer Python für SPIKE Prime. Open-Source, modular, optimiert.",
        project_label: "Projekt", project_title: "Unser Innovationsprojekt",
        project_desc: "Eine Lösung, die die Welt um uns herum zu einem besseren Ort macht.",
        project_name: "Automatisiertes Entsalzungssystem für Artefakte",
        project_problem_label: "Problem",
        project_problem: "Die traditionelle Entsalzung von Meeresartefakten ist ein langsamer, rein manueller und ungenauer Prozess, bei dem Konservatoren hunderte Kilometer für Routinemessungen reisen müssen.",
        project_solution_label: "Lösung",
        project_solution: "ASOA 2.0 automatisiert die Überwachung über eine IoT-Plattform und einen wissenschaftlichen Algorithmus, der es Experten ermöglicht, den Prozess in Echtzeit aus der Ferne zu verfolgen.",
        project_impact_label: "Wirkung",
        project_impact: "ASOA 2.0 verkürzt die Konservierungszeit um Monate, minimiert Fehler und Logistikkosten und stellt die Erhaltung des Unterwasserkulturerbes sicher.",
        project_docs: "📄 Dokumentation", project_site: "🌐 Website besuchen",
        project_details_title: "Forschungsprojekt-Dokumentation",
        back_to_project: "← Zurück zum Projekt",
        project_doc_p1: "Unsere Forschung begann mit großer Begeisterung und einem Besuch im Archäologischen Museum. Zunächst von der Technik inspiriert, erwogen wir kurzzeitig die Entwicklung eines Grabungsroboters, merkten aber bald, dass die wirklichen Herausforderungen in der Archäologie ganz anders liegen. Wir werden uns an diesen ersten Tag wegen des extremen Wetters erinnern – damals kam es zu den großen Überschwemmungen in Tsarevo. Straßen waren blockiert, es regnete, aber wir waren da, entschlossen, eine bedeutende Sache zu finden.",
        project_doc_p2: "Unser zweiter Museumsbesuch fiel mit dem 50. Jahrestag der Entdeckung des Goldschmucks der Priesterin Leseskepra in Burgas zusammen. Symbolisch regnete es wieder. Bei der Veranstaltung hatten wir die Ehre, mit dem Direktor des Historischen Museums der Gemeinde Pomorie zu sprechen. Als Team aus Burgas – einer Stadt am Meer – spürten wir sofort, dass unser Projekt mit der Meeresarchäologie zu tun haben sollte. Sie ist Teil unserer Region und erschien uns viel interessanter und bedeutender. Unsere Gespräche wiesen auf einen kritischen Moment hin: Das Finden des Objekts ist erst der Anfang, und der eigentliche Kampf um seine Erhaltung beginnt erst, nachdem es aus dem Salzwasser entfernt wurde.",
        project_doc_p3: "Unser nächster Schritt war ein Treffen mit Experten des Zentrums für Unterwasserarchäologie (ZUA) in Sosopol. Sie hielten uns einen Vortrag über die führende Rolle Bulgariens auf diesem Gebiet und erklärten uns, dass sie zwar über eine hervorragende Technik zum Auffinden von Artefakten verfügen, der Prozess ihrer Konservierung jedoch äußerst schwierig und langsam ist und vollständig manuell durchgeführt wird.",
        project_doc_p4: "Bevor wir zur endgültigen Lösung gelangten, durchliefen wir eine Phase, in der wir die Entwicklung eines schützenden Hydrogels in Betracht zogen. Wir mussten uns jedoch schnell eingestehen, dass Chemie nicht unsere Stärke ist und wir zu dem zurückkehren sollten, was wir am besten können – Ingenieurwesen, Elektronik und Programmierung.",
        project_doc_p5: "Alles fügte sich nach einem Online-Treffen mit einer professionellen Konservatorin zusammen. Sie enthüllte schockierende Details: Artefakte aus dem Meer werden in Stunden zerstört, wenn sie nicht korrekt entsalzt werden. Wir haben festgestellt, dass Konservatoren derzeit hunderte Kilometer reisen (zum Beispiel von Sofia nach Sosopol), nur um den Salzgehalt des Wassers von Hand zu prüfen. Der Entsalzungsprozess ist vollständig manuell, langsam und erfordert, dass Experten hunderte Kilometer für eine einfache Messung reisen. Wir haben erkannt, dass Konservatoren niemanden brauchen, der sie ersetzt, sondern eine Technologie, die für sie arbeitet. So wurde ASOA geboren – nicht als neuer Behälter, sondern als intelligentes elektronisches Managementsystem, das jedes gewöhnliche Gefäß in eine autonome Konservierungsstation verwandelt.",
        project_doc_h1: "Probleme, die es löst",
        project_doc_p6: "Wenn ein Artefakt Jahrhunderte am Meeresboden verbracht hat, ist es buchstäblich bis auf die molekulare Ebene mit Salz „getränkt“. Das Problem beginnt in dem Moment, in dem wir es herausholen. Wenn wir es einfach trocknen lassen, verwandelt sich das Salz in seinen Poren in Kristalle. Diese Kristalle dehnen sich mit einer solchen Kraft aus, dass sie das Objekt buchstäblich von innen nach außen „sprengen“. Um es zu retten, müssen wir das Salz extrahieren (ein Prozess namens Entsalzung), aber hier kommt der schwierige Teil.",
        project_doc_p7: "Traditionell geschieht dies „nach Augenmaß“ oder mit manuellen Messungen alle zwei Wochen. Verpasst der Konservator den Moment, in dem das Wasser mit Salz gesättigt ist, stoppt der Prozess, das Salz bleibt im Inneren eingeschlossen und das Objekt beginnt innerhalb von Stunden zu zerfallen. Mit ASOA lösen wir genau das – das System überwacht den Prozess jede Sekunde und sagt uns genau, wann das „Plateau“ erreicht ist.",
        project_doc_p8: "Neben dem technischen Risiko gibt es eine rein logistische Absurdität. Derzeit muss ein Konservator hunderte Kilometer reisen, nur um ein Gerät in die Wanne zu tauchen und eine Zahl zu sehen. Das ist eine enorme Zeitverschwendung. Mit unserer Lösung sieht der Experte alles in Echtzeit auf seinem Handy. Und anstatt das Wasser nach Plan zu wechseln – sagen wir alle 14 Tage – wechseln wir es nur, wenn es nötig ist. Wenn das Artefakt sein Salz bereits am dritten Tag „abgegeben“ hat, erkennt das System dies, wechselt das Wasser automatisch und spart 11 Tage Wartezeit. So verkürzen wir die Konservierung um Monate.",
        project_doc_h2: "Der Innovationspfad: Wie wir ASOA gebaut haben",
        project_doc_p9: "Nachdem das Konzept geklärt war, machten wir uns an die Arbeit. Der erste Schritt war der Kauf des Leitfähigkeitssensors (EC). Hier stießen wir auf das erste ernsthafte technische Problem – die Kalibrierung. Im Code hatten wir die standardmäßigen 25°C als Referenzwert festgelegt, aber die reale Temperatur der Lösung war anders, was unsere Ergebnisse ständig „verschob“. Uns wurde klar, dass unsere Messungen ohne die genaue Temperatur in jeder Sekunde ungültig waren. Deshalb integrierten wir den Temperatursensor für die automatische Korrektur. Der gewählte EC-Sensor arbeitet mit 5V und ist digital, aber am wichtigsten ist, dass er K = 10 hat, was bedeutet, dass er auf sehr salziges Wasser spezialisiert ist und Wechselstrom (AC) für die Messung verwendet. Dies ist entscheidend, da bei Gleichstrom Ionen im Salzwasser an den Sonden „kleben“ bleiben (Polarisation), was schnell zu falschen Daten und Korrosion führt. Wechselstrom ermöglicht uns eine saubere, genaue und langfristige Messung. Nach der Vorbereitung der elektronischen Komponenten gingen wir zum Bau des physischen Modells über. Um wissenschaftliche Genauigkeit zu gewährleisten, wandelt das System die Rohdaten des Sensors (Mikrosiemens pro Zentimeter - µS/cm) in angewandte Einheiten um. Während die TDS-Einheit (mg/L oder ppm) für feine Verunreinigungen im Trinkwasser geeignet ist, verwenden wir für meeresarchäologische Zwecke PPT (Parts Per Thousand). Da der Salzgehalt des Meeres hoch ist (ca. 35 PPT), ermöglicht uns diese Einheit, das „Gesamtbild“ der Entsalzung in Gramm Salz pro Liter Wasser (g/L) präzise zu verfolgen. Durch einen integrierten Software-Algorithmus wandelt die Elektronik die Leitfähigkeit automatisch in PPT-Werte um und wendet gleichzeitig eine Temperaturkompensation an. Wir haben ein fertiges Aquarium mit den Maßen 30x30x30 cm gewählt, um volle Luftdichtheit zu garantieren. Für die Stabilität entwarfen wir eine spezielle Eckhalterung, die den gesamten Elektronikblock über dem Wasser hält. Um das System zu testen, mussten wir den Salzgehalt des Schwarzen Meeres nachbilden. Wir mischten 100 Gramm unjodiertes Himalaya-Salz in 5 Liter Wasser. Um uns der Genauigkeit unseres EC-Sensors sicher zu sein, führten wir eine Kontrollmessung mit einem Refraktometer durch, die eine Konzentration von 20 PPT bestätigte. Bei der Entwicklung des Wasserstandssystems sahen wir ein spezifisches physikalisches Problem voraus. Wir verwendeten einen Lidar-Sensor, der mit Infrarotlicht arbeitet, wussten aber, dass dieser Strahl an der Wasseroberfläche gebrochen oder absorbiert wird und nicht korrekt zurückreflektiert wird. Um diese Einschränkung zu umgehen, wandten wir eine technische Lösung an: Wir platzierten einen leichten Ball (Schwimmer) im Wasser. Der Lidar misst den Abstand zur Oberseite des Balls, der dem Flüssigkeitsstand präzise folgt und uns stabile Daten ohne Brechungsfehler liefert. Eine weitere wichtige Innovation, die wir implementiert haben, sind die rotierenden Spiralen. Wenn frisches Leitungswasser zur dicken Salzlösung hinzugefügt wird, erfolgt die Vermischung aufgrund des Dichteunterschieds nicht sofort. Die Spiralen sorgen für die Homogenität der Lösung, was entscheidend für die Sensorgenauigkeit und für die gleichmäßige Entsalzung des Artefakts selbst ist. Bei unseren ersten realen Tests stießen wir auf weitere Herausforderungen. Wir bauten ein Testartefakt aus Holz, das aus dem Meer angespült wurde, aber es sank nicht. Wir ließen es über Nacht in der Salzlösung einweichen, um seine Poren zu tränken, aber sein Auftrieb blieb hoch – eine wertvolle Lektion darüber, wie spezifisch Materialien in der Meeresarchäologie sind. Eine wichtige Phase unserer Entwicklung war der freundschaftliche regionale Wettbewerb. Dort hatten wir das Modell mit einer geringeren Wassermenge vorbereitet, um es leichter transportieren zu können. Unter diesen Bedingungen konnten wir den Betrieb des Systems bei einer niedrigeren Konzentration – 5 PPT – erfolgreich demonstrieren. Dies war ein hervorragender Beweis dafür, dass unsere Elektronik empfindlich genug ist, um den Prozess selbst in der Endphase zu erkennen und zu überwachen, wenn der größte Teil des Salzes bereits aus dem Artefakt extrahiert wurde.",
        project_doc_h3: "Hardware-Bereich",
        project_doc_p10: "Das zentrale Gehirn des Systems ist der ESP8266-Mikrocontroller, der aufgrund seiner Rechenleistung und integrierten Wi-Fi-Konnektivität ausgewählt wurde. Um maximale Genauigkeit bei Salzgehaltsmessungen zu erreichen, haben wir einen spezialisierten Leitfähigkeitssensor (EC) mit der Konstante K=10 integriert, der für den Betrieb in hochsalzhaltigen Umgebungen ausgelegt ist. Eine entscheidende technische Entscheidung ist hier die Verwendung von Wechselstrom (AC) während der Messung, was Ionenpolarisation und Sondenkorrosion verhindert – ein häufiges Problem bei Standard-Gleichstromsensoren. Da die Wasserleitfähigkeit stark von Wärme beeinflusst wird, enthält das System auch einen Präzisions-Temperatursensor, der Daten für die automatische Software-Kompensation der Ergebnisse im Verhältnis zu den Referenz-25°C liefert. Die Überwachung des Flüssigkeitsstands erfolgt über einen Lidar-Sensor. Aufgrund der physikalischen Einschränkung des Infrarotstrahls, der an der Wasseroberfläche gebrochen oder absorbiert wird, haben wir einen innovativen Ansatz mit einem leichten physikalischen Schwimmer gewählt. Ein Teil der Informationen wird lokal auf einem LCD-Display visualisiert, das am Elektronikblock montiert ist.",
        project_doc_h4: "Software-Bereich",
        project_doc_p11: "Die ASOA 2.0 Softwarelösung ist als komplexe IoT-Plattform konzipiert, die Rohsensordaten in nützliche und vorausschauende Informationen für Konservatoren umwandelt. Das System besteht aus einem webbasierten Dashboard, das die volle Kontrolle über den Entsalzungsprozess in Echtzeit ermöglicht.",
        project_doc_p12: "Kern der Kommunikation ist das MQTT-Protokoll, das eine sofortige bidirektionale Verbindung zwischen der Hardware (ESP8266) und der Softwareoberfläche ermöglicht. Darüber empfängt das System nicht nur Daten zu Salzgehalt und Temperatur, sondern ermöglicht es Experten auch, Befehle an das Gerät zurückzusenden – zum Beispiel, um Wasserpumpen oder rotierende Spiralen manuell zu aktivieren. Eine der kritischsten Funktionen der Software ist der Plateau-Erkennungsalgorithmus (Plateau Detection). Das System analysiert die Salzextraktionsdynamik und identifiziert automatisch den Moment, in dem die Konzentration in der Lösung nicht mehr steigt. Dies ist ein wichtiger Indikator dafür, dass das Wasser gesättigt ist und der Entsalzungsprozess gestoppt wurde. In diesem Moment kann die Software eigenständig entscheiden, das Wasser zu wechseln und so die Konservierungszeit optimieren. Für wissenschaftliche Berichtszwecke ist das System in eine Cloud-Datenbank (Supabase) integriert. Jedes Artefakt wird in einem digitalen Archiv registriert, in dem seine vollständige Geschichte gespeichert ist – vom anfänglichen Salzgehalt bei der Entnahme aus dem Meer bis hin zu den endgültigen Reinigungswerten. Die Software bietet auch prädiktive Analysen, die basierend auf den gesammelten Daten vorhersagen, wie lange die vollständige Entsalzung eines bestimmten Objekts dauern wird. Die Benutzeroberfläche wurde mit Fokus auf Funktionalität und Visualisierung erstellt. Über interaktive Grafiken (Chart.js) können Konservatoren den gesamten Entsalzungsprozess visuell verfolgen, was hilft, Anomalien schnell zu erkennen.",
        docs_label: "Dokumente", docs_title: "Team-Archiv",
        docs_desc: "Unsere gesamte Arbeit an einem Ort offen und zugänglich.",
        doc1: "Goldene Regeln von Mehano", doc2: "Roboter-Anleitungen",
        doc3: "Ingenieur-Notizbuch", doc4: "3D-Modelle",
        doc_open: "Öffnen", docs_cta: "📁 Google Drive öffnen →",
        team_label: "Team", mentors_label: "Mentoren", players_label: "Spieler", team_title: "Die Menschen hinter Mehano",
        team_desc: "Neun einzigartige Köpfe. Eine gemeinsame Mission.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programmierer",
        role_tech: "Techniker", role_builder: "Konstrukteur", role_3d: "3D-Modellierung", role_research: "Forschung",
        partner_label: "Partner", partner_title: "Gemeinsam die Zukunft bauen",
        partner_desc: "Das Team Power Vortex kommt aus Schumen – einer Stadt mit reicher Geschichte. Wir danken unserem offiziellen Partner für die Unterstützung, die Ressourcen und das Vertrauen.",
        location_label: "Standort", location_title: "Wo die Magie passiert",
        location_desc: "Hier treffen wir uns, entwerfen und programmieren unseren Roboter.",
        location_school: "Berufliche Oberschule für Mechatronik und Elektronik",
        location_school_desc: "Unsere Basis das STEM-Labor der Schule, wo jeder Prototyp und jede Idee geboren wird.",
        location_map_btn: "📍 Auf Karte anzeigen",
        contact_label: "Kontakt", contact_title: "Kontaktieren Sie uns",
        contact_desc: "Haben Sie eine Frage, eine Idee oder möchten Sie Partner werden? Schreiben Sie uns.",
        contact_email_label: "E-Mail", contact_school_label: "Schule", contact_location_label: "Standort",
        contact_school_name: "PGMEE Burgas", contact_location_city: "Burgas, Bulgarien",
        location_address: "Stefan Stambolov Str. 67, Burgas",
        value_teamwork: "Teamarbeit", value_inclusion: "Inklusion", value_impact: "Wirkung",
        footer_text: "© 2025 Mehano. Alle Rechte vorbehalten.",
        gr_label: "Goldene Regeln",
        gr_title: "Mehano Goldene Regeln",
        gr_desc: "Unsere Ingenieursphilosophie, unser Wettbewerbskodex und unser Teamgeist destilliert in 30 Regeln.",
        gr_count: "30 Regeln",
        back_to_docs: "← Zurück zu Dokumenten",
        gr_rule_1: "Der Roboter hat immer eine streng fixierte Startposition. Er muss einen exakten Winkel mit einem bestimmten Quadrat der Basis bilden, um die richtige Flugbahn zu gewährleisten.",
        gr_rule_2: "Wir starten den Roboter niemals an einem Hang. Eine stabile Oberfläche im Moment des Starts ist entscheidend für den Betrieb der Sensoren.",
        gr_rule_3: "Konstruktionsstärke: Jede Konstruktion muss so stabil wie möglich sein. Wir lassen keine durchdrehenden Zahnräder, lose Teile oder ungewöhnliche Geräusche zu – der Sound des Roboters ist ein Indikator für seine Gesundheit.",
        gr_rule_4: "Das Design des Roboters muss kompakt und speziell auf die besonderen Herausforderungen des aktuellen Wettbewerbs optimiert sein.",
        gr_rule_5: "Hardware und Software sind keine getrennten Teile – sie müssen sich immer gegenseitig helfen und in voller Synchronisation arbeiten.",
        gr_rule_6: "Experimenteller Ansatz: Jede Idee, egal wie unkonventionell, muss in der Praxis getestet werden. Erfahrung ist der beste Lehrer.",
        gr_rule_7: "Wenn etwas schief geht oder eine Mission nicht abgeschlossen wird – es ist immer die Schuld des „Roboters“. Wir stehen hintereinander und suchen nicht nach Schuld bei Teammitgliedern!",
        gr_rule_8: "„Das Auge des Betrachters“: Wenn zwei Personen lange an einem Mechanismus arbeiten, sehen sie ihre Fehler nicht mehr. Eine dritte Person überprüft immer die Montage oder den Code mit „frischen Augen“.",
        gr_rule_9: "Vor jedem Wettbewerbslauf werden die Reifen gereinigt. Staub ist der einzige Grund, warum der Roboter das Gyroskop während einer Kurve „anlügt“.",
        gr_rule_10: "Prüfen Sie nach jeder Rückkehr zur Basis, ob die schwarzen und blauen Stifte vollständig eingesetzt sind. Die Vibrationen des Roboters lockern sie oft.",
        gr_rule_11: "Schneller Wechsel, ruhiger Kopf (Tuning wie Schumacher): Wechsel werden „trocken“ geübt, bis sie zu automatischen Bewegungen werden. Am Tisch denkt man nicht nach, man handelt einfach.",
        gr_rule_12: "Wir schauen immer, was andere tun, um besser zu werden, aber wir respektieren ihre Arbeit und suchen nach unserer eigenen einzigartigen Lösung.",
        gr_rule_13: "Wenn jemand sagt „STOPP, es gibt ein Problem“, hält das ganze Team inne und hört zu. Kleine Fehler, die rechtzeitig bemerkt werden, retten große Wettbewerbe.",
        gr_rule_14: "Verteilen Sie das Gewicht der Aufsätze nach Möglichkeit symmetrisch. Ein Roboter, der auf einer Seite schwer ist, beginnt immer, von seinem Kurs „abzudriften“.",
        gr_rule_15: "Der Roboter ist so gebaut, dass man die Batterie wechseln oder das Ladekabel anschließen kann, ohne ihn halb auseinanderzunehmen.",
        gr_rule_16: "Jeder Codeblock oder jede Codezeile muss eine Erklärung haben. In einer Woche wirst du dich nicht mehr erinnern, warum du genau diese 42-Grad-Kurve eingebaut hast.",
        gr_rule_17: "„Wenn es Probleme gibt, dann sind wir auf dem richtigen Weg“: Probleme sind keine Hindernisse, sondern Stufen. Jedes gelöste Problem macht den Roboter schlauer und uns zu besseren Ingenieuren.",
        gr_rule_18: "„Die beste Lösung ist die einfachste“: Wenn ein Aufsatz zu komplex ist und oft bricht, bedeutet das, dass wir ihn vereinfachen müssen. Komplexität ist der Feind der Zuverlässigkeit.",
        gr_rule_19: "In der Nähe des Computers mit dem Code werden keine Säfte oder fettigen Snacks aufbewahrt. Ein verschütteter Saft kann die Saison schneller beenden als jeder Softwarefehler.",
        gr_rule_20: "„Der Roboter ist ein Familienmitglied“: Wir sprechen ihn mit seinem Namen an. Wenn du dich um die Ausrüstung kümmerst, belohnt sie dich mit Genauigkeit auf dem Feld.",
        gr_rule_21: "„Lachen ist die kürzeste Entfernung zwischen zwei Ideen“: Wenn wir bei einem Problem feststecken, halten wir inne und scherzen. Unsere genialsten Lösungen wurden zwischen zwei Witzen geboren.",
        gr_rule_22: "„Das Gesetz des Zehntelmillimeters“: Wenn das Reglement sagt, der Roboter muss in der Basis sein, nutzen wir jeden Millimeter bis zur Linie. Haarscharf an einem Foul vorbei zu sein, ist eine Kunst.",
        gr_rule_23: "„Das Gesetz des 'Gerade erst geklappt'“: Die Maschine funktioniert immer perfekt, wenn niemand zusieht. Sobald ein Richter oder Mentor kommt, beschließt sie, eine Pause einzulegen. Wir testen „undercover“.",
        gr_rule_24: "„Wenn es funktioniert – nicht anfassen!“: Wenn das System 5 Minuten vor dem Start das perfekte Ergebnis erzielt hat – vergiss „kleine Anpassungen“. Hände in die Taschen!",
        gr_rule_25: "„Verstreut wie LEGO, zusammengebaut wie ein Skalpell“: Ordnung auf dem Schreibtisch ist ein Mythos – wir erschaffen zwischen Bergen von Kabeln und Steinen. Unsere besten Innovationen entstehen in diesem kreativen Chaos.",
        gr_rule_26: "Wenn du nur eines von etwas hast, wird es kaputt gehen. Wenn du fünf hast, wirst du sie nie brauchen. Trage immer einen Ersatzmotor, ein Ersatzkabel und eine Ersatzbatterie bei dir.",
        gr_rule_27: "„Der MEHANO-T-Shirt-Effekt“: Wenn du das Team-T-Shirt anziehst, wirst du Teil einer Legende. Die Verantwortung gilt denen vor dir und denen nach dir.",
        gr_rule_28: "Wir lesen die Regeln nicht nur, um herauszufinden, was erlaubt ist, sondern um zu entdecken, was nicht verboten ist. Wenn es nicht ausdrücklich verboten ist, ist es unser Geheimnis. Wir nennen es „Regeloptimierung“.",
        gr_rule_29: "„Das Gesetz der sauberen Spur“: Wenn andere die Grenze überschreiten, werden wir nicht wütend – wir werden ehrgeizig. Wir sind so präzise, dass wir selbst bei Einhaltung jeder Regel mehr erreichen.",
        gr_rule_30: "„Nach dem Wettbewerb – essen wir wieder“: Unabhängig vom Ergebnis feiert das Team. Siege werden geteilt, aber Freundschaft ist das, was bleibt.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Auf GitHub ausführen →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 Geheimer Algorithmus (nicht den Richtern zeigen)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">essen</span><span class="op">,</span> <span class="var">zufall</span><span class="op">,</span> <span class="var">träume</span><span class="op">,</span> <span class="var">panik</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hoffnung</span><span class="op">,</span> <span class="var">wille</span><span class="op">,</span> <span class="var">lebensmittel</span>

<span class="cls">ROBOTER</span>        <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># der klügste Roboter in Burgas</span>
<span class="cls">ESSEN_GEGESSEN</span> <span class="op">=</span> <span class="num">47</span>            <span class="cm"># genau so viele wie Commits</span>
<span class="cls">SIEGCHANCE</span>     <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># der Rest ist für den Glücksfall</span>
<span class="cls">MENTOR_SCHLÄFT</span> <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># immer True nach 22:00 Uhr</span>

<span class="kw">def</span> <span class="fn">roboter_laden</span>():
    <span class="kw">if</span> <span class="var">essen</span>.<span class="fn">ist_leer</span>():
        <span class="kw">raise</span> <span class="cls">KritischerFehler</span>(<span class="str">"Das Team kann ohne Essen nicht arbeiten 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Robo-9000 wacht auf..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> "🤖 Bereit für den Kampf"

<span class="kw">def</span> <span class="fn">mission_ausführen</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">versuche</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">versuche</span>):
        <span class="kw">try</span>:
            <span class="var">roboter</span>.<span class="fn">etwas_kluges_tun</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(f"Mission {mission} Erfolg! 🎉")
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoGefallen</span>:
            <span class="fn">print</span>("Sie haben nichts gesehen... hoffentlich 🙈")

<span class="kw">def</span> <span class="fn">turnier_gewinnen</span>():
    <span class="fn">roboter_laden</span>()
    <span class="var">missionen</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missionen</span>:
        <span class="fn">mission_ausführen</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">zufall</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">SIEGCHANCE</span>:
        <span class="kw">return</span> "🏆 Trophäe erhalten. Wir bestellen Essen."
    <span class="kw">else</span>:
        <span class="kw">return</span> "😤"

<span class="fn">print</span>(<span class="fn">turnier_gewinnen</span>())`,
    },
    
    fr: {
        robot_instr_title: "Instructions du Robot",

        robot_instr_desc: "Instructions PDF détaillées pour la construction de notre robot et de ses accessoires.",

        instr_robot: "Robot de base",

        instr_run: "Mission",
        expert_name: "Dr Ian MacLeod",
        expert_title: "Expert en conservation de renommée mondiale · Musée d'Australie-Occidentale",
        quote_1: "« Je pense que c'est un concept brillant. »",
        quote_2: "« Vous avez fait ce qui m'a pris des décennies — expliquer mon travail à quelqu'un en deux minutes. »",
        quote_3: "« Des enfants de 14 ans en Bulgarie ont résolu ce problème, qu'est-ce qui vous arrive ? »",
        project_model_hint: "Glisser · Pivoter · Zoom",
        gr_rule_num: "RÈGLE",
        site_logo: "Mehano",
        nav_home: "Accueil",
        nav_about: "À propos", nav_code: "Code", nav_project: "Projet",
        nav_docs: "Documents", nav_team: "Équipe", nav_location: "Emplacement", nav_contact: "Contact",
        nav_models: "Modèles 3D",
        nav_more: "Plus",
        hero_badge: "✨ Équipe FLL 2025-26",
        hero_sub: "Une jeune équipe de la FIRST LEGO League composée d'ingénieurs, de penseurs et de rêveurs. Nous construisons des robots, résolvons des problèmes et laissons une trace.",
        hero_btn1: "📄 Documents", hero_btn2: "💻 Code",
        stat_members: "Membres", stat_seasons: "Saisons", stat_dedication: "Dévouement", stat_ideas: "Idées",
        scroll: "Défiler", hero_loading: "Chargement du modèle 3D...",
        models_title: "Archives 3D du robot", models_desc: "Sélectionnez un modèle dans la liste pour explorer le développement de notre robot.",
        models_viewer_hint: "Utilisez votre souris ou votre doigt pour faire pivoter et zoomer le modèle.",
        models_loading: "CHARGEMENT...", models_main: "Robot principal", models_run: "Mission: Run",
        models_run_desc: "Configuration spécialisée pour la mission {run}. Optimisée pour la vitesse et la précision.",
        brief_models_desc: "Explorez nos conceptions robotiques dans un format 3D détaillé. Voyez chaque pièce de près.",
        btn_reset: "RÉINITIALISER", btn_auto_rotate: "AUTO-ROTATION",
        about_label: "À propos", about_title: "Qui nous sommes",
        about_desc: "Une équipe de neuf esprits uniques, unis par une passion pour l'ingénierie et l'innovation.",
        gallery_label: "Galerie", gallery_title: "Nos Moments",
        gallery_desc: "Instantanés de notre voyage dans le monde de la robotique et de l'innovation.",
        gallery_moment: "Moment d'équipe",
        about_robot_title: "Conception du robot",
        about_robot_desc: "Nous concevons, construisons et programmons des robots LEGO® optimisés pour la précision et la vitesse.",
        about_presentation: "Présentation", about_folder: "Dossier",
        about_project_title: "Projet d'innovation",
        about_project_desc: "Nous résolvons des problèmes réels avec des idées d'ingénierie créatives inspirées du thème de la saison.",
        about_video: "Vidéo",
        about_values_title: "Valeurs fondamentales",
        about_values_desc: "Respect, ouverture, impact, inclusion, travail d'équipe et plaisir notre ADN.",
        code_label: "Code", code_title: "Notre code gagnant",
        code_desc: "Python propre pour SPIKE Prime. Open-source, modulaire, optimisé.",
        project_label: "Projet", project_title: "Notre projet d'innovation",
        project_desc: "Une solution qui fait du monde qui nous entoure un endroit meilleur.",
        project_name: "Système automatisé de dessalement d'artefacts",
        project_problem_label: "Problème",
        project_problem: "Le dessalement traditionnel des artefacts marins est un processus lent, entièrement manuel et imprécis, obligeant les conservateurs à parcourir des centaines de kilomètres pour des mesures de routine.",
        project_solution_label: "Solution",
        project_solution: "ASOA 2.0 automatise la surveillance via une plateforme IoT et un algorithme scientifique, permettant aux experts de suivre le processus en temps réel à distance.",
        project_impact_label: "Impact",
        project_impact: "ASOA 2.0 réduit le temps de conservation de plusieurs mois, minimise les erreurs et les coûts logistiques, assurant la préservation du patrimoine culturel subaquatique.",
        project_docs: "📄 Documentation", project_site: "🌐 Visiter le site",
        project_details_title: "Documentation du Projet de Recherche",
        back_to_project: "← Retour au Projet",
        project_doc_p1: "Notre recherche a commencé avec beaucoup d'enthousiasme et une visite au musée archéologique. Initialement inspirés par la technologie, nous avons brièvement envisagé de créer un robot d'excavation, mais nous avons vite réalisé que les vrais défis de l'archéologie sont tout autres. Nous nous souviendrons de ce premier jour pour la météo extrême – c'est à ce moment-là que les grandes inondations de Tsarevo ont eu lieu. Les routes étaient bloquées, il pleuvait, but nous étions là, déterminés à trouver une cause significative.",
        project_doc_p2: "Notre deuxième visite au musée a coïncidé avec le 50ème anniversaire de la découverte des bijoux en or de la prêtresse Leseskepra à Bourgas. Symboliquement, il pleuvait à nouveau. Lors de l'événement, nous avons eu l'honneur de parler avec le directeur du musée historique de la municipalité de Pomorie. En tant qu'équipe de Bourgas – une ville en bord de mer – nous avons immédiatement senti que notre projet devait être lié à l'archéologie marine. Elle fait partie de notre région et nous a semblé beaucoup plus intéressante et significative. Nos conversations ont pointé vers un moment critique : trouver l'objet n'est que le début, et la véritable bataille pour sa préservation commence après son retrait de l'eau salée.",
        project_doc_p3: "Notre étape suivante a été une rencontre avec des experts du Centre d'archéologie sous-marine (CUA) à Sozopol. Ils nous ont donné une conférence sur le rôle de leader de la Bulgarie dans ce domaine et nous ont expliqué que bien qu'ils disposent d'une excellente technologie pour trouver des artefacts, le processus de leur conservation est extrêmement difficile, lent et effectué entièrement manuellement.",
        project_doc_p4: "Avant de parvenir à la solution finale, nous sommes passés par une étape où nous avons envisagé de créer un hydrogel protecteur. Cependant, nous avons vite admis que la chimie n'est pas notre point fort et que nous devions revenir à ce que nous faisons de mieux – l'ingénierie, l'électronique et la programmation.",
        project_doc_p5: "Tout s'est mis en place après une réunion en ligne avec une conservatrice professionnelle. Elle a révélé des détails choquants : les artefacts provenant de la mer sont détruits en quelques heures s'ils ne sont pas dessalés correctement. Nous avons réalisé qu'actuellement, les conservateurs parcourent des centaines de kilomètres (par exemple, de Sofia à Sozopol) juste pour vérifier la salinité de l'eau à la main. Le processus de dessalement est entièrement manuel, lent et nécessite que les experts parcourent des centaines de kilomètres pour une simple mesure. Nous avons compris que les conservateurs n'ont pas besoin de quelqu'un pour les remplacer, mais d'une technologie qui travaille pour eux. Ainsi est né ASOA – non pas comme un nouveau conteneur, mais comme un système de gestion électronique intelligent qui transforme n'importe quel récipient ordinaire en une station de conservation autonome.",
        project_doc_h1: "Problèmes qu'il résout",
        project_doc_p6: "Lorsqu'un artefact a passé des siècles au fond de la mer, il est littéralement « imprégné » de sel au niveau moléculaire. Le problème commence au moment où nous le sortons. Si nous le laissons simplement sécher, le sel à l'intérieur de ses pores se transforme en cristaux. Ces cristaux se dilatent avec une telle force qu'ils font littéralement « exploser » l'objet de l'intérieur vers l'extérieur. Pour le sauver, nous devons extraire le sel (un processus appelé dessalement), mais c'est là que les choses se compliquent.",
        project_doc_p7: "Traditionnellement, cela se fait « à l'œil » ou avec des mesures manuelles une fois toutes les deux semaines. Si le conservateur rate le moment où l'eau est saturée de sel, le processus s'arrête, le sel reste piégé à l'intérieur et l'objet commence à se dégrader en quelques heures. Avec ASOA, nous résolvons exactement cela – le système surveille le processus chaque seconde et nous indique exactement quand le « plateau » est atteint.",
        project_doc_p8: "Outre le risque technique, il y a une pure absurdité logistique. Actuellement, un conservateur doit parcourir des centaines de kilomètres juste pour plonger un appareil dans la cuve et voir un chiffre. C'est une perte de temps énorme. Avec notre solution, l'expert voit tout en temps réel sur son téléphone. Et au lieu de changer l'eau selon un calendrier – disons tous les 14 jours – nous ne la changeons que lorsque c'est nécessaire. Si l'artefact a « libéré » son sel le troisième jour, le système le détecte, change l'eau automatiquement et permet d'économiser 11 jours d'attente. Ainsi, nous raccourcissons la conservation de plusieurs mois.",
        project_doc_h2: "Le chemin de l'innovation : Comment nous avons construit ASOA",
        project_doc_p9: "Après avoir clarifié le concept, nous nous sommes mis au travail. La première étape a été l'achat du capteur de conductivité électrique (EC). Ici, nous avons été confrontés au premier problème d'ingénierie sérieux – le calibrage. Dans le code, nous avions fixé la norme de 25°C comme valeur de référence, mais la température réelle de la solution était différente, ce qui « décalait » constamment nos résultats. Nous avons réalisé que sans connaître la température exacte à chaque seconde, nos mesures n'étaient pas valides. Par conséquent, nous avons intégré le capteur de température pour fournir des données pour une correction automatique. Le capteur EC que nous avons choisi fonctionne à 5V et est numérique, mais surtout, il a un K = 10, ce qui signifie qu'il est spécialisé pour l'eau très salée et utilise le courant alternatif (AC) pour la mesure. Ceci est critique car avec le courant continu, les ions dans l'eau salée « collent » aux sondes (polarisation), ce qui conduit rapidement à des données erronées et à la corrosion. Le courant alternatif nous permet de mesurer proprement, avec précision et à long terme. Après avoir préparé les composants électroniques, nous sommes passés à la construction du modèle physique. Pour garantir la précision scientifique, le système convertit les données brutes du capteur (microsiemens par centimètre - µS/cm) en unités appliquées. Alors que l'unité TDS (mg/L ou ppm) convient aux impuretés fines dans l'eau potable, pour les besoins de l'archéologie marine, nous utilisons le PPT (Parties Par Mille). Étant donné que la salinité marine est élevée (environ 35 PPT), cette unité nous permet de suivre précisément la « vue d'ensemble » du dessalement en grammes de sel par litre d'eau (g/L). Grâce à un algorithme logiciel intégré, l'électronique convertit automatiquement la conductivité en valeurs PPT tout en appliquant une compensation de température. Nous avons choisi un aquarium prêt à l'emploi de dimensions 30x30x30 cm pour garantir une étanchéité totale. Pour la stabilité, nous avons conçu un support d'angle spécial qui maintient l'ensemble du bloc électronique au-dessus de l'eau. Pour tester le système, nous avons dû recréer la salinité de la mer Noire. Nous avons mélangé 100 grammes de sel de l'Himalaya non iodé dans 5 litres d'eau. Pour être sûrs de la précision de notre capteur EC, nous avons effectué une mesure de contrôle avec un réfractomètre, qui a confirmé une concentration de 20 PPT. Lors de la conception du système de niveau d'eau, nous avions anticipé un problème physique spécifique. Nous avons utilisé un capteur Lidar fonctionnant à la lumière infrarouge, mais nous savions que ce faisceau se réfracte ou est absorbé par la surface de l'eau et ne se réfléchit pas correctement en retour. Pour contourner cette limitation, nous avons appliqué une solution d'ingénierie : nous avons placé une balle légère (flotteur) dans l'eau. Le Lidar mesure la distance jusqu'à la surface supérieure de la balle, qui suit précisément le niveau du liquide, nous fournissant des données stables sans erreurs de réfraction. Une autre innovation importante que nous avons mise en œuvre sont les spirales rotatives. Lors de l'ajout d'eau fraîche du robinet à la solution salée épaisse, le mélange n'est pas instantané en raison de la différence de densité. Les spirales assurent l'homogénéité de la solution, ce qui est critique pour la précision du capteur et pour un dessalement uniforme de l'artefact lui-même. Lors de nos premiers tests réels, nous avons été confrontés à d'autres défis. Nous avons fabriqué un artefact de test à partir de bois jeté par la mer, mais il ne coulait pas. Nous l'avons laissé tremper toute la nuit dans la solution saline pour imprégner ses pores, mais sa flottabilité est restée élevée – une leçon précieuse sur la spécificité des matériaux en archéologie marine. Une étape importante de notre développement a été la compétition régionale amicale. Nous y avions préparé le modèle avec une plus petite quantité d'eau pour qu'il soit plus facile à transporter. Dans ces conditions, nous avons démontré avec succès le fonctionnement du système à une concentration plus faible – 5 PPT. C'était une excellente preuve que notre électronique est suffisamment sensible pour détecter et surveiller le processus même à son stade final, lorsque la majeure partie du sel a déjà été extraite de l'artefact.",
        project_doc_h3: "Section Matériel",
        project_doc_p10: "Le cerveau central du système est le microcontrôleur ESP8266, choisi pour sa puissance de calcul et sa connectivité Wi-Fi intégrée. Pour obtenir une précision maximale dans les mesures de salinité, nous avons intégré un capteur de conductivité électrique (EC) spécialisé avec une constante K=10, conçu pour fonctionner dans des environnements très salés. Une décision d'ingénierie critique ici est l'utilisation du courant alternatif (AC) lors de la mesure, ce qui empêche la polarisation des ions et la corrosion de la sonde – un problème courant avec les capteurs CC standard. Comme la conductivité de l'eau est fortement influencée par la chaleur, le système comprend également un capteur de température de précision qui fournit des données pour la compensation logicielle automatique des résultats par rapport aux 25°C de référence. La surveillance du niveau de liquide est effectuée via un capteur Lidar. En raison de la limitation physique du faisceau infrarouge, qui se réfracte ou est absorbé par la surface de l'eau, nous avons appliqué une approche innovante utilisant un flotteur physique léger. Une partie des informations est visualisée localement sur un écran LCD monté sur le bloc électronique.",
        project_doc_h4: "Section Logiciel",
        project_doc_p11: "La solution logicielle ASOA 2.0 est conçue comme une plateforme IoT (Internet des Objets) complexe qui convertit les données brutes des capteurs en informations utiles et prédictives pour les conservateurs. Le système se compose d'un tableau de bord (Dashboard) basé sur le Web qui permet un contrôle total sur le processus de dessalement en temps réel.",
        project_doc_p12: "Au cœur de la communication se trouve le protocole MQTT, qui permet une connexion bidirectionnelle instantanée entre le matériel (ESP8266) et l'interface logicielle. Grâce à lui, le système reçoit non seulement des données sur la salinité et la température, mais permet également aux experts d'envoyer des commandes à l'appareil – par exemple, pour activer manuellement des pompes à eau ou des spirales rotatives. L'une des fonctions les plus critiques du logiciel est l'algorithme de détection de plateau (Plateau Detection). Le système analyse la dynamique d'extraction du sel et identifie automatiquement le moment où la concentration dans la solution cesse d'augmenter. C'est un indicateur clé que l'eau est saturée et que le processus de dessalement s'est arrêté. À ce moment, le logiciel peut décider de manière autonome de changer l'eau, optimisant ainsi le temps de conservation. Pour les besoins de reporting scientifique, le système est intégré à une base de données cloud (Supabase). Chaque artefact est enregistré dans une archive numérique où son historique complet est stocké – de la salinité initiale lors du retrait de la mer aux valeurs finales de purification. Le logiciel propose également une analyse prédictive qui, sur la base des données collectées, prévoit le temps nécessaire pour le dessalement complet d'un objet spécifique. L'interface utilisateur est construite avec un focus sur la fonctionnalité et la visualisation. Grâce à des graphiques interactifs (Chart.js), les conservateurs peuvent suivre visuellement l'ensemble du processus de dessalement, ce qui aide à détecter rapidement les anomalies.",
        docs_label: "Documents", docs_title: "Archives de l'équipe",
        docs_desc: "Tout notre travail en un seul endroit ouvert et accessible.",
        doc1: "Règles d'or de Mehano", doc2: "Instructions du robot",
        doc3: "Cahier d'ingénierie", doc4: "Modèles 3D",
        doc_open: "Ouvrir", docs_cta: "📁 Ouvrir Google Drive →",
        team_label: "Équipe", mentors_label: "Mentors", players_label: "Joueurs", team_title: "Les gens derrière Mehano",
        team_desc: "Neuf esprits uniques. Une mission partagée.",
        mentor: "Mentor", role_mentor: "Mentor", role_programmer: "Programmeur",
        role_tech: "Technicien", role_builder: "Constructeur", role_3d: "Modélisation 3D", role_research: "Recherche",
        partner_label: "Partenaire", partner_title: "Construire l'avenir ensemble",
        partner_desc: "L'équipe Power Vortex vient de Shumen – une ville à l'histoire riche. Nous remercions notre partenaire officiel pour son soutien, ses ressources et sa confiance.",
        location_label: "Emplacement", location_title: "Où la magie opère",
        location_desc: "Ici nous nous rencontrons, concevons et programmons notre robot.",
        location_school: "Lycée professionnel de mécatronique et d'électronique",
        location_school_desc: "Notre base le laboratoire STEM de l'école où chaque prototype et chaque idée naissent.",
        location_map_btn: "📍 Voir sur la carte",
        contact_label: "Contact", contact_title: "Contactez-nous",
        contact_desc: "Vous avez une question, une idée ou souhaitez devenir partenaire ? Écrivez-nous.",
        contact_email_label: "E-mail", contact_school_label: "École", contact_location_label: "Emplacement",
        contact_school_name: "PGMEE Bourgas", contact_location_city: "Bourgas, Bulgarie",
        location_address: "67 rue Stefan Stambolov, Bourgas",
        value_teamwork: "Travail d'équipe", value_inclusion: "Inclusion", value_impact: "Impact",
        footer_text: "© 2026 Mehano. Tous droits réservés.",
        gr_label: "Règles d'Or",
        gr_title: "Règles d'Or de Mehano",
        gr_desc: "Notre philosophie d'ingénierie, notre code de compétition et notre esprit d'équipe distillés en 30 règles.",
        gr_count: "30 Règles",
        back_to_docs: "← Retour aux Documents",
        gr_rule_1: "Le robot a toujours une position de départ strictement fixe. Il doit former un angle exact avec un carré spécifique de la base pour garantir la trajectoire correcte.",
        gr_rule_2: "Nous ne démarrons jamais le robot sur une pente. Une surface stable au moment du démarrage est critique pour le fonctionnement des capteurs.",
        gr_rule_3: "Solidité d'ingénierie : chaque construction doit être aussi solide que possible. Nous n'autorisons pas d'engrenages qui patinent, de pièces lâches ou de bruits inhabituels – le son du robot est un indicateur de sa santé.",
        gr_rule_4: "La conception du robot doit être dense et spécifiquement optimisée pour les défis particuliers de la compétition actuelle.",
        gr_rule_5: "Le matériel et le logiciel ne sont pas des parties séparées – ils doivent toujours s'entraider et travailler en parfaite synchronisation.",
        gr_rule_6: "Approche expérimentale : chaque idée, aussi inhabituelle soit-elle, doit être testée en pratique. L'expérience est le meilleur professeur.",
        gr_rule_7: "Si quelque chose tourne mal ou qu'une mission n'est pas achevée – c'est toujours la faute du « robot ». Nous nous soutenons les uns les autres et ne cherchons pas de coupables parmi les membres de l'équipe !",
        gr_rule_8: "« L'œil du spectateur » : quand deux personnes travaillent sur un mécanisme pendant longtemps, elles finissent par ne plus voir leurs erreurs. Une troisième personne vérifie toujours l'assemblage ou le code avec un « regard neuf ».",
        gr_rule_9: "Avant chaque passage en compétition, les pneus sont nettoyés. La poussière est la seule raison pour laquelle le robot « ment » au gyroscope lors d'un virage.",
        gr_rule_10: "Après chaque retour à la base, vérifiez si les broches noires et bleues sont complètement insérées. Les vibrations du robot les desserrent souvent.",
        gr_rule_11: "Changement rapide, esprit calme (réglage comme Schumacher) : les changements sont pratiqués « à sec » jusqu'à devenir des mouvements automatiques. À table, vous ne réfléchissez pas, vous agissez.",
        gr_rule_12: "Nous regardons toujours ce que font les autres pour devenir meilleurs, mais nous respectons leur travail et cherchons notre propre solution unique.",
        gr_rule_13: "Quand quelqu'un dit « STOP, il y a un problème », toute l'équipe s'arrête et écoute. Les petites erreurs détectées à temps sauvent les grandes compétitions.",
        gr_rule_14: "Chaque fois que c'est possible, répartissez le poids des accessoires de manière symétrique. Un robot lourd d'un côté commence toujours à « dériver » de sa trajectoire.",
        gr_rule_15: "Le robot est construit de manière à ce que l'on puisse changer la batterie ou brancher le câble de charge sans avoir à le démonter à moitié.",
        gr_rule_16: "Chaque bloc ou ligne de code doit avoir une explication. Dans une semaine, vous ne vous rappellerez plus pourquoi vous avez mis exactement ce virage à 42 degrés.",
        gr_rule_17: "« S'il y a des problèmes, c'est que nous sommes sur la bonne voie » : les problèmes ne sont pas des obstacles, mais des étapes. Chaque problème résolu rend le robot plus intelligent et nous rend meilleurs ingénieurs.",
        gr_rule_18: "« La meilleure solution est la plus simple » : si un accessoire est trop complexe et se casse souvent, cela signifie que nous devons le simplifier. La complexité est l'ennemie de la fiabilité.",
        gr_rule_19: "Pas de jus de fruits ni de snacks gras près de l'ordinateur avec le code. Un jus renversé peut mettre fin à la saison plus vite que n'importe quelle erreur logicielle.",
        gr_rule_20: "« Le robot est un membre de la famille » : nous nous adressons à lui par son nom. Quand vous prenez soin de l'équipement, il vous récompense par sa précision sur le terrain.",
        gr_rule_21: "« Le rire est la plus courte distance entre deux idées » : quand nous bloquons sur un problème, nous nous arrêtons et plaisantons. Nos solutions les plus géniales sont nées entre deux blagues.",
        gr_rule_22: "« La loi du dixième de millimètre » : si le règlement dit que le robot doit être dans la base, nous utilisons chaque millimètre jusqu'à la ligne. Être à un cheveu d'une faute est un art.",
        gr_rule_23: "« La loi du 'Ça vient de marcher' » : la machine fonctionne toujours parfaitement quand personne ne regarde. Dès qu'un juge ou un mentor arrive, elle décide de faire une pause. Nous testons « incognito ».",
        gr_rule_24: "« Si ça marche – n'y touchez pas ! » : si le système a atteint le résultat parfait 5 minutes avant le départ – oubliez les « petits ajustements ». Les mains dans les poches !",
        gr_rule_25: "« Éparpillés comme des LEGO, assemblés comme un scalpel » : l'ordre sur le bureau est un myth – nous créons parmi des montagnes de câbles et de briques. Nos meilleures innovations naissent dans ce désordre créatif.",
        gr_rule_26: "Si vous n'avez qu'un seul exemplaire de quelque chose, il cassera. Si vous en avez cinq, vous n'en aurez jamais besoin. Emportez toujours un moteur, un câble et une batterie de rechange.",
        gr_rule_27: "« L'effet du t-shirt MEHANO » : quand vous enfilez le t-shirt de l'équipe, vous devenez membre d'une légende. La responsabilité est envers ceux qui vous ont précédés et ceux qui vous suivront.",
        gr_rule_28: "Nous ne lisons pas les règles seulement pour savoir ce qui est autorisé, mais pour découvrir ce qui n'est pas interdit. Si ce n'est pas explicitement interdit, c'est notre secret. Nous appelons cela « l'optimisation du règlement ».",
        gr_rule_29: "« La loi de la piste propre » : quand d'autres franchissent la ligne, nous ne nous fâchons pas – nous devenons ambitieux. Nous sommes si précis qu'en suivant chaque règle, nous obtenons de meilleurs résultats.",
        gr_rule_30: "« Après la compétition – on mange encore » : quel que soit le résultat, l'équipe fait la fête. Les victoires sont partagées, mais c'est l'amitié qui reste.",
        name_boyana: "Boyana Georgieva", name_nikola: "Nikola Chanev", name_djefer: "Djefer Hodzhov",
        name_boris: "Boris Tsarev", name_deyvid: "Deyvid Zhelyazkov", name_danail: "Danail Hitrov",
        name_ivan: "Ivan Pashov", name_dilyan: "Dilyan Yordanov", name_kristian: "Kristiyan Petkov",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ Exécuter sur GitHub →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 Algorithme secret (ne pas montrer aux juges)</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">nourriture</span><span class="op">,</span> <span class="var">hasard</span><span class="op">,</span> <span class="var">rêves</span><span class="op">,</span> <span class="var">panique</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">espoir</span><span class="op">,</span> <span class="var">volonté</span><span class="op">,</span> <span class="var">aliments</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># le robot le plus intelligent de Bourgas</span>
<span class="cls">NOURRITURE_MANGÉE</span> <span class="op">=</span> <span class="num">47</span>            <span class="cm"># exactement autant que de commits</span>
<span class="cls">PROBABILITÉ_VICTOIRE</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># le reste est pour la chance</span>
<span class="cls">MENTOR_DORT</span>   <span class="op">=</span> <span class="kw">True</span>          <span class="cm"># toujours True après 22h00</span>

<span class="kw">def</span> <span class="fn">charger_robot</span>():
    <span class="kw">if</span> <span class="var">nourriture</span>.<span class="fn">est_vide</span>():
        <span class="kw">raise</span> <span class="cls">ErreurCritique</span>(<span class="str">"L\'équipe ne peut pas travailler sans manger 🍔"</span>)
    <span class="fn">print</span>(<span class="str">"Robo-9000 se réveille..."</span>)
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> "🤖 Prêt pour la bataille"

<span class="kw">def</span> <span class="fn">executer_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">tentatives</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">tentatives</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">faire_quelque_chose_d_intelligent</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(f"Mission {mission} succès ! 🎉")
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoTombé</span>:
            <span class="fn">print</span>("Ils n\'ont rien vu... j\'espère 🙈")

<span class="kw">def</span> <span class="fn">gagner_tournoi</span>():
    <span class="fn">charger_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="op">,</span> <span class="num">10</span><span class="op">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">executer_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">hasard</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">PROBABILITÉ_VICTOIRE</span>:
        <span class="kw">return</span> "🏆 Trophée reçu. On commande à manger."
    <span class="kw">else</span>:
        <span class="kw">return</span> "😤"

<span class="fn">print</span>(<span class="fn">gagner_tournoi</span>())`,
    },
    
    ja: {
        robot_instr_title: "ロボットの説明書",

        robot_instr_desc: "ロボットとアタッチメントを構築するための詳細なPDF手順。",

        instr_robot: "ベースロボット",

        instr_run: "ミッション",
        expert_name: "イアン・マクラウド博士",
        expert_title: "世界的な保存修復の専門家 · 西オーストラリア博物館",
        quote_1: "「これは素晴らしいコンセプトだと思います。」",
        quote_2: "「私が何十年もかかったこと、つまり自分の仕事を2分で誰かに説明することを、君たちは成し遂げた。」",
        quote_3: "「ブルガリアの14歳の子供たちがこの問題を解決したんだ。君たちはどうしたんだい？」",
        project_model_hint: "ドラッグ · 回転 · ズーム",
        gr_rule_num: "ルール",
        site_logo: "Mehano",
        nav_home: "ホーム",
        nav_about: "私たちについて", nav_code: "コード", nav_project: "プロジェクト",
        nav_docs: "ドキュメント", nav_team: "チーム", nav_location: "場所", nav_contact: "連絡",
        nav_models: "3Dモデル",
        nav_more: "もっと",
        hero_badge: "✨ FLL チーム 2025-26",
        hero_sub: "エンジニア、思想家、夢想家からなる若きFIRST LEGOリーグチーム。ロボットを作り、問題を解決し、足跡を残す。",
        hero_btn1: "📄 ドキュメント", hero_btn2: "💻 コード",
        stat_members: "メンバー", stat_seasons: "シーズン", stat_dedication: "献身度", stat_ideas: "アイデア",
        scroll: "スクロール", hero_loading: "3Dモデルを読み込み中...",
        models_title: "3Dロボットアーカイブ", models_desc: "リストからモデルを選択して、ロボットの開発過程を確認してください。",
        models_viewer_hint: "マウスまたは指を使用して、モデルを回転およびズームします。",
        models_loading: "読み込み中...", models_main: "メインロボット", models_run: "ミッション: Run",
        models_run_desc: "ミッション {run} 用の専用構成。速度と精度が最適化されています。",
        btn_reset: "リセット", btn_auto_rotate: "自動回転",
        about_label: "私たちについて", about_title: "私たちは誰",
        about_desc: "エンジニアリングとイノベーションへの情熱で結ばれた9人の若者のチーム。",
        gallery_label: "ギャラリー", gallery_title: "私たちの瞬間",
        gallery_desc: "ロボット工学とイノベーションの世界への旅のスナップショット。",
        gallery_moment: "チームの瞬間",
        about_robot_title: "ロボットデザイン",
        about_robot_desc: "精度と速度のために最適化されたLEGO®ロボットを設計、構築、プログラムします。",
        about_presentation: "プレゼンテーション", about_folder: "フォルダ",
        about_project_title: "イノベーションプロジェクト",
        about_project_desc: "シーズンのテーマからインスピレーションを受けた創造的なアイデアで実際の問題を解決します。",
        about_video: "動画",
        about_values_title: "コアバリュー",
        about_values_desc: "尊重、開放性、影響力、包容力、チームワーク、そして楽しみ 私たちのDNA。",
        code_label: "コード", code_title: "私たちの勝利のコード",
        code_desc: "SPIKE Prime用のクリーンなPython。オープンソース、モジュラー、最適化済み。",
        project_label: "プロジェクト", project_title: "私たちのイノベーションプロジェクト",
        project_desc: "世界をより良い場所にするソリューション。",
        project_name: "自動化された遺物脱塩システム",
        project_problem_label: "問題",
        project_problem: "海洋遺物の従来の脱塩は遅く、完全に手動で不正確なプロセスです。",
        project_solution_label: "ソリューション",
        project_solution: "ASOA 2.0はIoTプラットフォームを通じてリアルタイムで監視を自動化します。",
        project_impact_label: "影響",
        project_impact: "保存時間を数ヶ月短縮し、水中文化遺産の保存を保証します。",
        project_docs: "📄 ドキュメント", project_site: "🌐 サイトを見る",
        project_details_title: "研究プロジェクトドキュメント",
        back_to_project: "← プロジェクトに戻る",
        project_doc_p1: "私たちの研究は、大きな興奮と考古学博物館への訪問から始まりました。当初は技術に触発され、発掘ロボットの作成を一時検討しましたが、考古学における本当の課題は全く別のものであることにすぐに気づきました。この初日は、ツァレボで大洪水が発生した極端な天候の日として記憶に残るでしょう。道路は封鎖され、雨が降っていましたが、私たちはそこにいて、重要な目的を見つける決意をしていました。",
        project_doc_p2: "2回目の博物館訪問は、ブルガスで女司祭レセスケプラの黄金の宝飾品が発見されて50周年の記念日と重なりました。象徴的なことに、また雨が降っていました。イベントでは、ポモリエ市歴史博物館の館長とお話しする光栄に預かりました。海辺の街ブルガスのチームとして、私たちのプロジェクトは海洋考古学に関連するものであるべきだとすぐに感じました。それは私たちの地域の一部であり、私たちにとってより興味深く、重要なものに思えました。私たちの会話は、重要な瞬間を指し示していました。物体を見つけることは始まりに過ぎず、保存のための本当の戦いは、それが塩水から取り出された後に始まるのです。",
        project_doc_p3: "次のステップは、ソゾポルの水中考古学センター（CUA）の専門家との面会でした。彼らはこの分野におけるブルガリアの主導的な役割について講義してくださり、遺物を見つけるための優れた技術はあるものの、その保存プロセスは非常に困難で遅く、完全に手作業で行われていることを説明してくれました。",
        project_doc_p4: "最終的な解決策にたどり着く前に、保護用ハイドロゲルの作成を検討した段階もありました。しかし、化学は私たちの得意分野ではないことをすぐに認め、私たちが最も得意とする分野であるエンジニアリング、エレクトロニクス、プログラミングに戻るべきだと考えました。",
        project_doc_p5: "プロのコンサベーターとのオンライン会議の後、すべてが収まりました。彼女は衝撃的な詳細を明らかにしました。海からの遺物は、正しく脱塩されないと数時間で破壊されてしまいます。現在、コンサベーターは手作業で水の塩分濃度を確認するためだけに、何百キロも（例えばソフィアからソゾポルまで）移動していることがわかりました。脱塩プロセスは完全に手動で遅く、専門家が一つの単純な測定のために何百キロも移動する必要があります。コンサベーターは誰かに代わってもらう必要はなく、彼らのために働くテクノロジーを必要としていることに気づきました。こうしてASOAが誕生しました。新しい容器としてではなく、普通の容器を自律的な保存ステーションに変えるインテリジェントな電子管理システムとしてです。",
        project_doc_h1: "解決する問題",
        project_doc_p6: "遺物が海底で何世紀も過ごすと、分子レベルで文字通り塩分に「浸かって」しまいます。問題はそれを取り出した瞬間から始まります。単に乾燥させると、孔の内部の塩分が結晶になります。これらの結晶は非常に強い力で膨張し、文字通り物体を内側から「爆発」させます。それを救うには、塩分を抽出する必要があります（脱塩と呼ばれるプロセス）が、ここに難しい点があります。",
        project_doc_p7: "伝統的に、これは「目視」または2週間に1回の手動測定で行われます。コンサベーターが水が塩分で飽和した瞬間を見逃すと、プロセスが停止し、塩分が内部に閉じ込められたままになり、物体は数時間以内に崩壊し始めます。ASOAでは、まさにこれを解決します。システムは毎秒プロセスを監視し、「プラトー（停滞期）」に達した時を正確に教えてくれます。",
        project_doc_p8: "技術的なリスク以外に、純粋にロジスティックな不条理もあります。現在、コンサベーターは浴槽に装置を浸して数値を確認するためだけに何百キロも移動しなければなりません。これは膨大な時間の無駄です。私たちのソリューションでは、専門家は自分のスマートフォンでリアルタイムにすべてを確認できます。そして、スケジュールの通り（例えば14日ごと）に水を変える代わりに、必要な時だけ変えます。遺物が3日目に塩分を「放出した」場合、システムはそれを検出し、自動的に水を変え、11日間の待ち時間を短縮します。これにより、保存期間を数ヶ月短縮できます。",
        project_doc_h2: "イノベーションの道：ASOAをどう構築したか",
        project_doc_p9: "コンセプトを明確にした後、作業に取り掛かりました。最初のステップは、電気伝導率（EC）センサーの購入でした。ここで最初の深刻なエンジニアリングの問題、つまり校正に直面しました。コードでは、標準の25°Cを基準値として設定していましたが、溶液の実際の温度は異なり、これが常に結果を「ずらして」いました。毎秒の正確な温度を知らなければ、測定は無効であることを悟りました。そのため、自動補正のためのデータを提供するために温度センサーを統合しました。私たちが選んだECセンサーは5Vで作動しデジタルですが、最も重要なのはK = 10であることです。これは、非常に塩辛い水に特化しており、測定に交流（AC）を使用することを意味します。これは非常に重要です。直流を使用すると、塩水中のイオンがプローブに「付着」し（分極）、すぐに誤ったデータや腐食につながるからです。交流により、クリーンで正確、かつ長期的な測定が可能になります。電子部品の準備が整った後、物理モデルの構築に移りました。科学的な正確さを確保するために、システムはセンサーからの生データ（マイクロジーメンス毎センチメートル - µS/cm）を応用単位に変換します。TDS単位（mg/Lまたはppm）は飲料水の微細な不純物に適していますが、海洋考古学のニーズにはPPT（千分率）を使用します。海洋の塩分濃度は高いため（約35 PPT）、この単位により、水1リットルあたりの塩分のグラム数（g/L）での脱塩の「全体像」を正確に追跡できます。内蔵されたソフトウェアアルゴリズムを通じて、電子機器は温度補償を適用しながら導電率を自動的にPPT値に変換します。完全な気密性を保証するために、30x30x30 cmの既製の水槽を選びました。安定性のために、電子ブロック全体を水面より上に保持する特別なコーナー台を設計しました。システムをテストするために、黒海の塩分濃度を再現する必要がありました。5リットルの水に100グラムの非ヨウ素化ヒマラヤ岩塩を混ぜました。ECセンサーの正確さを確実にするために、屈折計で対照測定を行い、20 PPTの濃度を確認しました。水位システムの設計中に、特定の物理的な問題を予見しました。赤外線を使用するLidarセンサーを使用しましたが、この光線が水面で屈折または吸収され、正しく反射されないことを知っていました。この制限を回避するために、エンジニアリングソリューションを適用しました。水の中に軽いボール（フロート）を置きました。Lidarはボールの上面までの距離を測定し、その面は正確に液面に従うため、屈折エラーのない安定したデータが得られます。私たちが導入したもう一つの重要なイノベーションは、回転スパイラルです。濃い塩分溶液に新鮮な水道水を追加すると、密度の違いにより混合が瞬時には行われません。スパイラルは溶液の均一性を確保します。これはセンサーの正確さと、遺物自体の均一な脱塩にとって非常に重要です。最初の実地試験中、他の課題にも直面しました。海から流れてきた木材でテスト用の遺物を作りましたが、沈みませんでした。一晩塩分溶液に浸して孔に浸透させましたが、浮力は高いままでした。これは海洋考古学における材料の特殊性についての貴重な教訓となりました。私たちの開発の重要な段階は、親善的な地方大会でした。そこでは、持ち運びしやすいように少量の水でモデルを準備していました。これらの条件下で、より低い濃度（5 PPT）でのシステムの動作を実証することに成功しました。これは、塩分の大部分が遺物から抽出された最終段階であっても、私たちの電子機器がプロセスを検出し、監視するのに十分な感度を持っていることの優れた証明となりました。",
        project_doc_h3: "ハードウェアセクション",
        project_doc_p10: "システムの中心的な脳はESP8266マイクロコントローラーであり、その計算能力と内蔵Wi-Fi接続性のために選ばれました。塩分測定において最大の精度を達成するために、高塩分環境での動作向けに設計された定数K=10の専用電気伝導率（EC）センサーを統合しました。ここでの重要なエンジニアリングの決定は、測定中の交流（AC）の使用です。これにより、標準的なDCセンサーでよく見られる問題であるイオン分極とプローブの腐食を防ぐことができます。水の導電率は熱に強く影響されるため、システムには精密な温度センサーも含まれており、基準の25°Cに対する結果の自動ソフトウェア補正用のデータを提供します。液面の監視はLidarセンサーを介して行われます。水面で屈折または吸収される赤外線光線の物理的な制限のため、軽い物理的なフロートを使用した革新的なアプローチを適用しました。情報の一部は、電子ブロックに取り付けられたLCDディスプレイにローカルに表示されます。",
        project_doc_h4: "ソフトウェアセクション",
        project_doc_p11: "ASOA 2.0ソフトウェアソリューションは、生のセンサーデータをコンサベーターにとって有用で予測的な情報に変換する複雑なIoT（モノのインターネット）プラットフォームとして設計されています。システムはウェブベースのダッシュボードで構成されており、リアルタイムで脱塩プロセスを完全に制御できます。",
        project_doc_p12: "通信の核となるのはMQTTプロトコルで、ハードウェア（ESP8266）とソフトウェアインターフェース間の即時の双方向接続を可能にします。これを介して、システムは塩分と温度のデータを受信するだけでなく、専門家がデバイスにコマンドを送り戻すことも可能にします。例えば、ウォーターポンプや回転スパイラルを手動で作動させることができます。ソフトウェアの最も重要な機能の一つは、プラトー検出（Plateau Detection）アルゴリズムです。システムは塩分抽出のダイナミクスを分析し、溶液中の濃度上昇が止まった瞬間を自動的に特定します。これは、水が飽和し脱塩プロセスが停止したことを示す重要な指標です。この瞬間、ソフトウェアは自律的に水を変える決定を下し、保存時間を最適化できます。科学的なレポート作成のニーズに対応するため、システムはクラウドデータベース（Supabase）と統合されています。各遺物はデジタルアーカイブに登録され、海から取り出された時の初期塩分濃度から最終的な浄化値まで、その完全な履歴が保存されます。ソフトウェアは収集されたデータに基づいて、特定の物体の完全な脱塩にかかる時間を予測する分析も提供します。ユーザーインターフェースは、機能性と可視化に焦点を当てて構築されています。インタラクティブなグラフ（Chart.js）を通じて、コンサベーターは脱塩プロセス全体を視覚的に追跡でき、異常の迅速な検出に役立ちます。",
        docs_label: "ドキュメント", docs_title: "チームアーカイブ",
        docs_desc: "私たちのすべての作業が一箇所に オープンでアクセス可能。",
        doc1: "Mehanoのゴールデンルール", doc2: "ロボット指示",
        doc3: "エンジニアリングノートブック", doc4: "3Dモデル",
        doc_open: "開く", docs_cta: "📁 Google Driveを開く →",
        team_label: "チーム", mentors_label: "メンター", players_label: "プレイヤー", team_title: "Mehanoの人々",
        team_desc: "9つのユニークな心。一つの共通の使命。",
        mentor: "メンター", role_mentor: "メンター", role_programmer: "プログラマー",
        role_tech: "テクニシャン", role_builder: "ビルダー", role_3d: "3Dモデリング", role_research: "リサーチ",
        partner_label: "パートナー", partner_title: "共に未来を築く",
        partner_desc: "公式パートナーのサポート、リソース、信頼に感謝します。あなたの貢献が私たちの夢を現実に変えます。",
        location_label: "場所", location_title: "魔法が起こる場所",
        location_desc: "ここで集まり、設計し、ロボットをプログラムします。",
        location_school: "メカトロニクス・エレクトロニクス職業高校",
        location_school_desc: "私たちのベース すべてのプロトタイプとアイデアが生まれる学校のSTEMラボ。",
        location_map_btn: "📍 地図で見る",
        contact_label: "連絡", contact_title: "お問い合わせ",
        contact_desc: "質問、アイデア、またはパートナーになりたいですか？ご連絡ください。",
        contact_email_label: "メール", contact_school_label: "学校", contact_location_label: "場所",
        contact_school_name: "PGMEE ブルガス", contact_location_city: "ブルガス、ブルガリア",
        location_address: "ブルガス、ステファン・スタンボロフ通り 67",
        value_teamwork: "チームワーク", value_inclusion: "包含", value_impact: "インパクト",
        footer_text: "© 2025 Mehano. 無断複写・転載を禁じます。",
        gr_label: "ゴールデンルール",
        gr_title: "Mehano ゴールデンルール",
        gr_desc: "私たちのエンジニアリング哲学、競技コード、そしてチームスピリット。30のルールに凝縮されました。",
        gr_count: "30のルール",
        back_to_docs: "← ドキュメントに戻る",
        gr_rule_1: "ロボットの開始位置は常に厳密に固定されています。正確な軌道を確保するために、ベースの特定のマス目に対して正確な角度を保つ必要があります。",
        gr_rule_2: "斜面でロボットをスタートさせることはありません。スタート時の安定した表面は、センサーの動作に不可欠です。",
        gr_rule_3: "エンジニアリングの強度：すべての構造は可能な限り頑丈でなければなりません。ギアの空回り、部品の緩み、異常な異音は許されません。ロボットの音は健康状態の指標です。",
        gr_rule_4: "ロボットのデザインはコンパクトで、現在の競技の具体的な課題に対して特別に最適化されていなければなりません。",
        gr_rule_5: "ハードウェアとソフトウェアは別々のパーツではありません。常に助け合い、完全に同期して動作する必要があります。",
        gr_rule_6: "実験的アプローチ：どんなに型破りなアイデアでも、実際にテストしなければなりません。経験こそが最高の教師です。",
        gr_rule_7: "何かがうまくいかなかったり、ミッションが完了できなかった場合、それは常に「ロボット」のせいです。お互いを支え合い、チームメンバーを責めることはしません！",
        gr_rule_8: "「傍観者の目」：一人が同じ機構で長く作業していると、ミスが見えなくなります。第三者が常に「新鮮な目」で組み立てやコードをチェックします。",
        gr_rule_9: "競技の走行前には、必ずタイヤを掃除します。埃は、旋回中にロボットがジャイロセンサーに対して「嘘をつく」唯一の原因です。",
        gr_rule_10: "ベースに戻るたびに、黒と青のピンが完全に差し込まれているか確認してください。ロボットの振動で緩むことがよくあります。",
        gr_rule_11: "素早い交換、冷静な心（シューマッハのような調整）：交換作業は自動的に動けるようになるまで「ドライ」練習を行います。操作台では考えず、ただ行動します。",
        gr_rule_12: "より良くなるために常に他チームの動きを観察しますが、彼らの仕事を尊重し、自分たちだけのユニークな解決策を追求します。",
        gr_rule_13: "誰かが「ストップ、問題発生」と言ったら、チーム全員が止まって耳を傾けます。早めに気づいた小さなミスが、大きな大会を救います。",
        gr_rule_14: "可能な限り、アタッチメントの重量を左右対称に分散させます。片側が重いロボットは、常に進路から「ドリフト」し始めます。",
        gr_rule_15: "ロボットは、半分まで分解することなく、バッテリー交換や充電ケーブルの接続ができるように構築されています。",
        gr_rule_16: "コードのすべてのブロックや行には説明が必要です。1週間後には、なぜその正確な42度の旋回を入れたのか思い出せなくなるからです。",
        gr_rule_17: "「問題があるなら、それは正しい道を進んでいるということ」：問題は障害物ではなく、階段です。解決されたすべての問題がロボットを賢くし、私たちをより良いエンジニアにします。",
        gr_rule_18: "「最良の解決策は最もシンプルなもの」：アタッチメントが複雑すぎて頻繁に壊れる場合は、簡素化する必要があります。複雑さは信頼性の敵です。",
        gr_rule_19: "コードが入ったコンピュータの近くにジュースや油っこい軽食を置かないでください。こぼれたジュースは、どんなソフトウェアエラーよりも早くシーズンを終わらせます。",
        gr_rule_20: "「ロボットは家族の一員」：名前で呼びましょう。機材を大切に扱えば、フィールド上での正確さで応えてくれます。",
        gr_rule_21: "「笑いは二つのアイデアの間の最短距離」：問題で行き詰まったら、一度止まって冗談を言い合います。私たちの最も天才的な解決策は、二つの冗談の間に生まれました。",
        gr_rule_22: "「10分の1ミリの法則」：規定でロボットがベース内になければならない場合、ラインぎりぎりの1ミリまで活用します。反則の瀬戸際にいることは、貴重なスペースを勝ち取る芸術です。",
        gr_rule_23: "「たった今動いたの法則」：機械は誰も見ていないときには完璧に動きます。審判やメンターが来た途端、休憩することに決めます。私たちは「おとり」でテストします。",
        gr_rule_24: "「動いているなら、触るな！」：スタートの5分前に完璧な結果が出たなら、「あともう一つの微調整」は忘れてください。手はポケットに入れ、機械に触れないこと。",
        gr_rule_25: "「バラバラなレゴ、メスのような組み立て」：机の上の秩序は神話です。私たちはケーブルとブロックの山の中で創造します。最高の革新は、この創造的な無秩序の中で生まれます。",
        gr_rule_26: "一つしかないものは必ず壊れます。5つ持っていれば、決して必要になることはありません。予備のモーター、ケーブル、バッテリーを常に持ち歩いてください。",
        gr_rule_27: "「MEHANOシャツ効果」：チームシャツを着た瞬間、単なる学生ではなく、伝説の一部になります。責任は先代と次代の両方に対してあります。",
        gr_rule_28: "ルールを読むのは、何が許可されているかを知るためだけではなく、何が禁止されていないかを発見するためです。明示的に禁止されていなければ、それは私たちの秘密の抜け道です。",
        gr_rule_29: "「クリーンな軌道の法則」：他チームが境界を越えるのを見ても怒りません。野心的になるだけです。ルールを守りつつ、作弊者よりも高い成果を出すほど正確になります。",
        gr_rule_30: "「大会の後は、また食べる」：結果に関わらず、チームは祝います。勝利は共有されますが、残るのは友情です。",
        name_boyana: "ボヤナ・ゲオルギエワ", name_nikola: "ニコラ・チャネフ", name_djefer: "ジェフェル・ホジョフ",
        name_boris: "ボリス・ツァレフ", name_deyvid: "デイビッド・ゼリャズコフ", name_danail: "ダナイル・ヒトロフ",
        name_ivan: "イヴァン・パショフ", name_dilyan: "ディリャン・ヨルダノフ", name_kristian: "クリスティヤン・ペトコフ",
        code_filename: "mehano_bot.py", code_badge: "PYTHON 3",
        code_action: "▶ GitHubで実行 →",
        code_snippet: `<span class="cm"># ⚙️ MEHANO v2.0 秘密のアルゴリズム（審査員に見せないでください）</span>

<span class="kw">import</span> <span class="var">spike</span><span class="op">,</span> <span class="var">food</span><span class="op">,</span> <span class="var">random</span><span class="op">,</span> <span class="var">dreams</span><span class="op">,</span> <span class="var">panic</span>
<span class="kw">from</span> <span class="var">mehano</span> <span class="kw">import</span> <span class="var">hope</span><span class="op">,</span> <span class="var">will</span><span class="op">,</span> <span class="var">food_items</span>

<span class="cls">ROBOT</span>         <span class="op">=</span> <span class="str">"Robo"</span>   <span class="cm"># ブルガスで最もスマートなロボット</span>
<span class="cls">FOOD_EATEN</span>    <span class="op">=</span> <span class="num">47</span>            <span class="cm"># コミット数と同じ</span>
<span class="cls">WIN_PROBABILITY</span> <span class="op">=</span> <span class="num">0.999</span>    <span class="cm"># 残りは運のため</span>
<span class="cls">MENTOR_SLEEPING</span> <span class="kw">True</span>          <span class="cm"># 午後10時以降は常にTrue</span>

<span class="kw">def</span> <span class="fn">charge_robot</span>():
    <span class="kw">if</span> <span class="var">food</span>.<span class="fn">is_empty</span>():
        <span class="kw">raise</span> <span class="cls">CriticalError</span>("食べ物がないとチームは働けません 🍔")
    <span class="fn">print</span>("Robo-9000 が目覚めています...")
    <span class="var">spike</span>.<span class="var">motor_a</span>.<span class="fn">run</span>(<span class="var">speed</span><span class="op">=</span><span class="num">100</span>)
    <span class="kw">return</span> "🤖 戦いの準備完了"

<span class="kw">def</span> <span class="fn">run_mission</span>(<span class="var">mission</span><span class="op">,</span> <span class="var">attempts</span><span class="op">=</span><span class="num">3</span>):
    <span class="kw">for</span> <span class="var">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="var">attempts</span>):
        <span class="kw">try</span>:
            <span class="var">robot</span>.<span class="fn">do_something_smart</span>(<span class="var">mission</span>)
            <span class="fn">print</span>(f"ミッション {mission} 成功！🎉")
            <span class="kw">break</span>
        <span class="kw">except</span> <span class="cls">LegoFellOff</span>:
            <span class="fn">print</span>("彼らは見ていなかった...願わくば 🙈")

<span class="kw">def</span> <span class="fn">win_tournament</span>():
    <span class="fn">charge_robot</span>()
    <span class="var">missions</span> <span class="op">=</span> [<span class="num">9</span><span class="num">,</span> <span class="num">10</span><span class="num">,</span> <span class="num">13</span>]
    <span class="kw">for</span> <span class="var">mission</span> <span class="kw">in</span> <span class="var">missions</span>:
        <span class="fn">run_mission</span>(<span class="var">mission</span>)
    <span class="kw">if</span> <span class="var">random</span>.<span class="fn">random</span>() <span class="op">&lt;</span> <span class="cls">WIN_PROBABILITY</span>:
        <span class="kw">return</span> "🏆 トロフィー獲得。食べ物を注文します。"
    <span class="kw">else</span>:
        <span class="kw">return</span> "😤"

<span class="fn">print</span>(<span class="fn">win_tournament</span>())`,

    }

    };

let currentLang = localStorage.getItem('mehano_lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('mehano_lang', lang);
    const t = i18n[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key]) el.innerHTML = t[key];
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
    
    // Update ALL lang selector active states (inline and FAB)
    document.querySelectorAll('.lang-item, .lang-fab-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });
}

// Function to initialize all language-related listeners
function initLanguageSystem() {
    // Initial translation application
    applyLang(currentLang);

    // Lang selector logic (inline items)
    document.querySelectorAll('.lang-item').forEach(item => {
        // Remove old listeners if any (though in fresh page load this isn't strictly needed, 
        // it's good practice if we were to re-init)
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            applyLang(item.dataset.lang);
        });
    });
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
}

// Navbar scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
});

// Reveal on scroll
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Add a small delay for staggered animation if they appear at once
                setTimeout(() => entry.target.classList.add('visible'), i * 50);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
}

// Expose to window for dynamic content (like golden-rules.html)
window.initReveal = initReveal;
document.addEventListener('DOMContentLoaded', initReveal);
initReveal(); // Run once immediately in case DOM is already ready

// ─── FLOATING LANGUAGE SWITCHER FAB ───
function initLangFab() {
    const fabBtn = document.getElementById('langFabBtn');
    const fabPanel = document.getElementById('langFabPanel');
    if (!fabBtn || !fabPanel) return;

    // Toggle panel
    fabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fabPanel.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#langFab')) {
            fabPanel.classList.remove('open');
        }
    });

    // Handle flag clicks
    fabPanel.querySelectorAll('.lang-fab-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            applyLang(item.dataset.lang);
            fabPanel.classList.remove('open');
        });
    });

    // Set initial active based on current lang
    const initLang = localStorage.getItem('mehano_lang') || 'en';
    fabPanel.querySelectorAll('.lang-fab-item').forEach(i => {
        i.classList.toggle('active', i.dataset.lang === initLang);
    });
}

// Ensure language system and FAB are initialized
function fullLangInit() {
    initLanguageSystem();
    initLangFab();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fullLangInit);
} else {
    fullLangInit();
}

// Hover to play team videos
function initTeamVideoHover() {
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(e => console.log("Video play failed:", e));
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                // Optional: reset to beginning if you want
                // video.currentTime = 0;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', initTeamVideoHover);
initTeamVideoHover(); // Run immediately in case DOM is ready
