
import sys

# Source Bulgarian Rules from goldenrules.txt (manually cleaned/verified)
bg_rules = [
    "Роботът винаги има строго фиксирана изходна позиция. Той трябва да сключва точен ъгъл с конкретно квадратче от базата, за да се гарантира правилната траектория.",
    "Никога не стартираме робота под наклон. Стабилната повърхност в момента на старта е критична за работата на сензорите.",
    "Инженерна здравина: Всяка конструкция трябва да бъде максимално здрава. Не допускаме превъртане на зъбни колела, хлабави части или необичайни шумове – звукът на робота е индикатор за неговото здраве.",
    "Дизайнът на робота трябва да бъде плътен и специално оптимизиран за конкретните предизвикателства на текущото състезание.",
    "Хардуерът и софтуерът не са отделни части – те трябва винаги да си помагат и да работят в пълен синхрон.",
    "Експериментален подход: Всяка идея, колкото и нестандартна да е, трябва да бъде тествана на практика. Опитът е най-добрият учител.",
    "Ако нещо се обърка или мисията не бъде изпълнена – виновен е винаги „роботът“. Ние стоим един зад друг и не търсим вина в членовете на екипа!",
    "“Окото на страничния наблюдател“: Когато двама души работят по един механизъм дълго време, те спират да виждат грешките си. В МЕХАНО имаме правило: „Погледни го ти“. Трети човек винаги проверява сглобката или кода с „пресни очи“, за да открие пропуски, които другите са пропуснали от умора.",
    "Преди всяко състезателно пускане гумите се почистват. Прахът е единствената причина роботът да \"излъже\" жироскопа при завой.",
    "След всяко прибиране в базата се проверява дали черните и сините щифтове са влезли докрай. Вибрациите на робота често ги разхлабват.",
    "Бърза смяна, спокоен ум (тунинг като за Шумахер): Смените се тренират „на сухо“, докато не станат автоматични движения. На масата не се мисли „как се слага това“, там просто се действа.",
    "Винаги гледаме какво правят другите, за да станем по-добри, но уважаваме труда им и търсим нашето собствено уникално решение.",
    "Когато някой каже „СТОП, има проблем“, целият отбор спира и слуша. Малките грешки, които някой е забелязал навреме, спасяват големи състезания.",
    "Когато е възможно, разпределяме тежестта на приставките симетрично. Робот, който натежава на една страна, винаги започва да „дрифти“ (да завива сам).",
    "Роботът се строи така, че да можеш да смениш батерията или да включиш кабела за зареждане, без да го разглобяваш наполовина.",
    "Всеки блок или ред код трябва да има обяснение. След седмица няма да помниш защо си сложил точно този завой от 42 градуса.",
    "„Ако има проблеми, значи сме на правилния път“: Проблемите не са пречки, а стъпала. Всеки решен проблем прави робота по-умен, а нас – по-добри инженери.",
    "„Най-доброто решение е най-простото“: Ако една представка е твърде сложна и често се чупи, значи трябва да я опростим. Сложността е враг на надеждността.",
    "Около компютъра с кода не се пият сокове и не се държат мазни банички. Един разлят сок може да сложи край на сезона по-бързо от всяка софтуерна грешка.",
    "„Роботът е член на семейството“: Обръщаме се към него по име (или поне с уважение). Когато се грижиш за техниката, тя ти се отплаща с точност на полето.",
    "“Смехът е най-късото разстояние между две идеи“: Когато зациклим на някой проблем, спираме и се шегуваме. Най-гениалните ни решения са се раждали точно между два вица. В МЕХАНО хуморът не е разсейване, а инструмент за иновации.",
    "“Законът на десетата от милиметъра“: Ако регламентът казва, че роботът трябва да е в базата, ние използваме всеки милиметър до самата линия. Нашата хитрост не е да пресечем линията, а да я настъпим така, че само един фотон светлина да не минава под гумата ни. Да си на косъм от фаула е изкуство, което печели ценно пространство.",
    "„Законът на 'Тамън тръгна'“: Машината винаги работи перфектно, когато никой не я гледа. Щом дойде менторът, съдията или капитанът – тя решава да си вземе почивка. В МЕХАНО тестваме „под прикритие“, за да не разбере хардуерът, че е под наблюдение.",
    "„Работи ли – не го пипай!“: Ако системата е заковала перфектния резултат 5 минути преди старта – забрави за „още една малка настройка“. Най-големите катастрофи в историята на МЕХАНО започват с фразата: „Чакай само да оправя това“. В този момент ръцете ти трябва да са в джобовете, а не върху машината.",
    "„Разпиляни като LEGO, събрани като скалпел“: В МЕХАНО редът на бюрото е мит – ние живеем и творим сред планини от кабели, сензори и разхвърляни тухлички от минали мисии. Подреденото работно място приспива мозъка, но нашият безпорядък го държи буден. Най-добрите ни иновации се раждат точно тогава – докато ровим за изгубено LEGO зъбно колело сред платките и кабелите.",
    "Ако имаш само една бройка от нещо, тя ще се счупи. Ако имаш пет, никога няма да ти потрябват. В МЕХАНО вярваме в „презастраховането“ – винаги носи резервен мотор, резервен кабел и резервна батерия, дори да мислиш, че отиваш на разходка.",
    "„Ефектът на МЕХАНО-фанелката“: Когато облечеш екипната блуза, спираш да бъдеш просто ученик и ставаш част от легенда. Отговорността е към тези преди теб и към тези след теб. На терена се държим така, че дори конкуренцията да иска да прилича на нас.",
    "Ние не четем правилата само за да разберем какво е позволено, а за да открием какво не е забранено. Ако в описанието на мисията не пише изрично, че не можем да ползваме ластик или гравитация по определен начин – значи това е нашата тайна вратичка. Наричаме го „оптимизация на регламента“.",
    "„Законът на чистата следа“: Когато видим, че друг отбор пресича линията на позволеното, ние не се гневим – ние се амбицираме. Нашата хитрост е да бъдем толкова прецизни, че дори със спазване на всяка точка от регламента, да постигнем по-висок резултат от тези, които „режат завоите“. Честността винаги пробива път, защото на финала журито търси характер, а не просто точки, извоювани с измама.",
    "„След състезанието – пак се яде“: Независимо от резултата, отборът отива да празнува. Победите се споделят, но приятелството е това, което остава след като приберем робота в кашона."
]

# English Translations (manually refined for clarity and impact)
en_rules = [
    "The robot always has a strictly fixed starting position. It must form an exact angle with a specific square in the base to ensure a correct trajectory.",
    "Never start the robot on an incline. A stable surface at the moment of start is critical for sensor performance.",
    "Engineering Integrity: Every construction must be as strong as possible. We don't allow gear slipping, loose parts, or unusual noises – the robot's sound is an indicator of its health.",
    "The robot's design must be dense and specifically optimized for the unique challenges of the current competition.",
    "Hardware and software are not separate entities – they must always support each other and work in perfect sync.",
    "Experimental Approach: Every idea, no matter how unconventional, must be tested in practice. Experience is the best teacher.",
    "If something goes wrong or a mission fails – the 'robot' is always to blame. We stand behind each other and never look for guilt within the team!",
    "“The Side Observer’s Eye”: When two people work on a mechanism for a long time, they stop seeing their mistakes. In MEHANO, we say: 'You take a look.' A third person always checks the build or code with 'fresh eyes' to find slips that others missed due to fatigue.",
    "Before every competition run, the tires are cleaned. Dust is the only reason the robot 'fools' the gyro during a turn.",
    "After every return to the base, check if the black and blue pins are fully inserted. The robot's vibrations often loosen them.",
    "Fast Change, Calm Mind: Pit stops are practiced until they become automatic. At the table, you don't think 'how does this fit' – you just act.",
    "We always watch what others are doing to improve, but we respect their work and seek our own unique solutions.",
    "When someone says 'STOP, there is a problem', the whole team stops and listens. Small mistakes caught in time save big competitions.",
    "Whenever possible, distribute the weight of attachments symmetrically. A robot that is heavy on one side will always start to 'drift'.",
    "The robot is built so you can change the battery or plug in the charging cable without taking it halfway apart.",
    "Every block or line of code must have an explanation. In a week, you won't remember why you put exactly that 42-degree turn.",
    "“If there are problems, we are on the right track”: Problems are not obstacles, but steps. Every solved problem makes the robot smarter and us better engineers.",
    "“The best solution is the simplest”: If an attachment is too complex and breaks often, we must simplify it. Complexity is the enemy of reliability.",
    "No juices or greasy pastries near the coding computer. A spilled drink can end the season faster than any software bug.",
    "“The robot is a family member”: We address it by name (or at least with respect). When you take care of the tech, it pays you back with accuracy on the field.",
    "“Laughter is the shortest distance between two ideas”: When stuck on a problem, we stop and joke. Our most genius solutions are often born between two jokes. In MEHANO, humor is not a distraction, but a tool for innovation.",
    "“The Law of the Tenth of a Millimeter”: If the rules say the robot must be in the base, we use every millimeter up to the line. Our trick isn't to cross the line, but to step on it so that not even a photon of light passes under our tire. Being on the edge of a foul is an art that wins valuable space.",
    "“The Law of 'It Just Worked'”: The machine always works perfectly when no one is watching. Once the mentor, judge, or captain arrives, it decides to take a break. In MEHANO, we test 'undercover' so the hardware doesn't know it's being observed.",
    "“If it works – don't touch it!”: If the system hit a perfect score 5 minutes before the start – forget about 'just one more small adjustment'. The biggest disasters in MEHANO history start with the phrase: 'Wait, let me just fix this.' At that moment, your hands should be in your pockets, not on the machine.",
    "“Scattered like LEGO, Assembled like a Scalpel”: In MEHANO, a tidy desk is a myth – we live and create among mountains of cables, sensors, and bricks from past missions. An orderly workspace puts the brain to sleep, but our chaos keeps it awake. Our best innovations are born right then – while digging for a lost LEGO gear among the circuits.",
    "If you only have one of something, it will break. If you have five, you'll never need them. In MEHANO, we believe in 'over-insurance' – always carry a spare motor, spare cable, and spare battery, even if you're just going for a walk.",
    "“The MEHANO T-shirt Effect”: When you put on the team jersey, you stop being just a student and become part of a legend. The responsibility is to those before you and those after you. On the field, we behave so that even the competition wants to be like us.",
    "We don't read the rules just to see what's allowed, but to find what isn't forbidden. If the mission description doesn't explicitly say we can't use a rubber band or gravity in a certain way – then that's our secret loophole. We call it 'Rule Optimization'.",
    "“The Law of the Clean Trace”: When we see another team crossing the line of what's allowed, we don't get angry – we get ambitious. Our trick is to be so precise that even while following every point of the rules, we achieve a higher result than those who 'cut corners'. Honesty always prevails because, in the end, the jury looks for character, not just points won by deception.",
    "“After the competition – we eat again”: Regardless of the result, the team goes to celebrate. Victories are shared, but friendship is what remains after we put the robot back in the box."
]

def print_rules(rules, indent=8):
    for i, rule in enumerate(rules, 1):
        print(f'{" " * indent}gr_rule_{i}: "{rule}",')

print("// Bulgarian Rules")
print_rules(bg_rules)
print("\n// English Rules")
print_rules(en_rules)
